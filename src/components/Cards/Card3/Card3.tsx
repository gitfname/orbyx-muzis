import { Button } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { useBottomSongControllerStore } from "../../../stores";
import { AudioController, AudioControllerAudio } from "../../../utils/AudioController";
import { twMerge } from "tailwind-merge";

interface Props {
    id: string;
    title: string;
    subtitle: ReactNode;
    img: string;
    rightSide: ReactNode;
    song: string;
}


type AudioControllerType = AudioController | null;

function Card3({
    id, img, rightSide, subtitle, title, song
}: Props) {

    const audioFilePath = useBottomSongControllerStore(selector => selector.file === song ? selector.file : "")
    const audio = useBottomSongControllerStore(selector => audioFilePath === song ? selector.audio : undefined)
    const isPlaying = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isPlaying : false)
    const isLoaded = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isLoaded : false)
    const setSongName = useBottomSongControllerStore(selector => selector.setSongName)
    const [audioController, setAudioController] = useState<AudioControllerType>(null);
    const [isLoading, setIsLoading] = useState(false)

    const handlePlayPauseClick = () => {
        if (song !== audioFilePath) {
            setIsLoading(true)
            setSongName(title)
            const audioControllerInstance = new AudioController({
                file: song,
                onFileLoaded(audio) {
                    console.log("audio loaded");
                    audioControllerInstance.play()
                    setIsLoading(false)
                }
            })
            setAudioController(audioControllerInstance)
            return
        }
        if (!isLoaded) {
            const audioControllerInstance = new AudioController({
                file: song,
                onFileLoaded(audio) {
                    console.log("audio loaded");
                    audioControllerInstance.play()
                }
            })
            setAudioController(audioControllerInstance)
        }
        else if (isPlaying) {
            AudioControllerAudio?.pause()
        }
        else {
            AudioControllerAudio?.play()
        }
    }

    return (
        <div
            className="w-full flex items-center justify-between p-2 px-4 hover:bg-white/10 transition-colors rounded-lg group"
        >
            <div className="flex items-center gap-x-3.5">

                {/* img */}
                <div className="w-14 h-14 relative overflow-hidden rounded-lg">
                    <img
                        alt=""
                        src={img}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-center object-cover"
                    />

                    <div
                        className={ twMerge(`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-black/50
                        grid place-items-center transition-opacity`, isPlaying ? "opacity-100" : "")}
                    >
                        <Button
                            onClick={handlePlayPauseClick}
                            size="sm"
                            rounded="full"
                            bgColor="whiteAlpha.700"
                            padding={0}
                        >
                            {
                                isPlaying
                                    ?
                                    <BsPauseFill className="w-6 h-6 fill-rose-500" />
                                    :
                                    <BsPlayFill className="w-6 h-6 fill-rose-500" />
                            }
                        </Button>
                    </div>
                </div>

                <div>
                    {/* title */}
                    <p
                        className="text-sm font-normal text-white"
                    >
                        {title}
                    </p>

                    {/* subtitle */}
                    {subtitle}
                </div>

            </div>

            {/* right side */}
            {rightSide}

        </div>
    )
}

export default Card3