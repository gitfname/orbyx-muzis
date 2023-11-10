
import { useState } from "react";
import { useAudioVisualizerStore, useBottomSongControllerStore } from "../../stores";
import { AudioController, AudioControllerAudio } from "../../utils/AudioController";
import { Button } from "@chakra-ui/react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge"
import { MusicOptions } from "../../types/MusicOptions";

interface Props {
    id: string;
    name: string;
    img: string;
    song: string;
    colors: Array<string>;
    className?: string;
    iconClassName?: string;
    playList?: Array<MusicOptions>;
}

type AudioControllerType = AudioController

function PlayPauseBtn({ id, img, name, song, colors, className, iconClassName, playList }: Props) {

    const audioFilePath = useBottomSongControllerStore(selector => selector.file === song ? selector.file : "")
    const setIsPlaylist = useBottomSongControllerStore(selector => selector.setIsPlayList)
    const setPlaylist = useBottomSongControllerStore(selector => selector.setPlayList)
    const audio = useBottomSongControllerStore(selector => audioFilePath === song ? selector.audio : undefined)
    const isPlaying = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isPlaying : false)
    const isLoaded = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isLoaded : false)
    const isAudioLoading = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isLoading : false)
    const setSongName = useBottomSongControllerStore(selector => selector.setSongName)
    const [audioController, setAudioController] = useState<AudioControllerType>(null);
    const [isLoading, setIsLoading] = useState(false)
    // AudioVisualizer
    const setAudioVisualizerName = useAudioVisualizerStore(selector => selector.setName)
    const setAudioVisualizerImg = useAudioVisualizerStore(selector => selector.setImg)
    const setAudioVisualizerColors = useAudioVisualizerStore(selector => selector.setColors)

    const handleIsPlayList = () => {
        if (playList?.length > 0) {
            setIsPlaylist(true)
            setPlaylist(playList)
        }
        else {
            setIsPlaylist(false)
            setPlaylist([])
        }
    }

    const handlePlayPauseClick = () => {
        handleIsPlayList()

        setAudioVisualizerName(name)
        setAudioVisualizerImg(img)
        setAudioVisualizerColors(colors)

        if (isLoading) return

        if (song !== audioFilePath) {
            setIsLoading(true)
            setSongName(name)
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
        <Button
            onClick={handlePlayPauseClick}
            colorScheme="red"
            rounded="full"
            padding={0}
            size="sm"
            className={twMerge("active:scale-95", className)}
        >
            {
                isAudioLoading
                    ?
                    <div className="w-5 h-5 rounded-full border-t border-white animate-spin animate-duration-1000"></div>
                    :
                    isPlaying
                        ?
                        <BsFillPauseFill className={twMerge("w-5 h-5 fill-white", iconClassName)} />
                        :
                        <BsFillPlayFill className={twMerge("w-5 h-5 fill-white", iconClassName)} />

            }
        </Button>
    )
}

export default PlayPauseBtn