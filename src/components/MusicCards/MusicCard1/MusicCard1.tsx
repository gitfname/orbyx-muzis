
import { Button } from "@chakra-ui/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { AiFillWindows, AiOutlineDownload, AiOutlineStar } from "react-icons/ai";
import { BsFillPlayFill, BsFillShareFill, BsShuffle, BsThreeDots } from "react-icons/bs";
import { twMerge } from "tailwind-merge"
import { AudioController, AudioControllerAudio } from "../../../utils/AudioController";
import { useAudioVisualizerStore, useBottomSongControllerStore } from "../../../stores";
import { useNavigate } from "react-router-dom";
import { ApplicationRoutes } from "../../../routes";
import { ContextMenu, PlayLists, PlayPauseBtn } from "../..";
import { HiOutlineQueueList } from "react-icons/hi2";
import { PiPlaylistFill } from "react-icons/pi";
import { useInViewport } from "ahooks"
import { MusicOptions } from "../../../types/MusicOptions";

interface Props {
    id: string;
    title: string;
    text: string;
    img: string;
    icon: ReactNode;
    song: string;
    stared: boolean;
    showText: boolean;
    imgClassName?: string;
    imgOverlatClassName?: string;
    colors: Array<string>;
    playlist?: Array<MusicOptions>
}

type AudioControllerType = AudioController | null

function MusicCard1({
    icon, id, img, song, stared, text, title, showText, imgClassName, imgOverlatClassName, colors, playlist
}: Props) {

    const audioFilePath = useBottomSongControllerStore(selector => selector.file === song ? selector.file : "")
    const audio = useBottomSongControllerStore(selector => audioFilePath === song ? selector.audio : undefined)
    const isPlaying = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isPlaying : false)
    const isLoaded = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isLoaded : false)
    const isAudioLoading = useBottomSongControllerStore(selector => audioFilePath === song ? selector.isLoading : false)
    const setSongName = useBottomSongControllerStore(selector => selector.setSongName)
    const [audioController, setAudioController] = useState<AudioControllerType>(null);
    const [isLoading, setIsLoading] = useState(false)
    // AudioVisualizer
    const setIsAudioVisualizerOpen = useAudioVisualizerStore(selector => selector.setIsOpen)
    const setAudioVisualizerName = useAudioVisualizerStore(selector => selector.setName)
    const setAudioVisualizerImg = useAudioVisualizerStore(selector => selector.setImg)
    const setAudioVisualizerColors = useAudioVisualizerStore(selector => selector.setColors)

    const containerRef = useRef<HTMLDivElement>(null)
    const [isInViewPort] = useInViewport(containerRef, { threshold: 0.1 })
    const [wasInViewPort, setWasInViewPort] = useState(false)

    useEffect(
        () => {
            console.log("ahooks")
            if (isInViewPort && !wasInViewPort) {
                setWasInViewPort(true)
                containerRef.current = null
            }
        },
        [isInViewPort]
    )

    const handlePlayPauseClick = () => {
        setAudioVisualizerName(title)
        setAudioVisualizerImg(img)
        setAudioVisualizerColors(colors)

        if (isLoading) return

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

    const handleClickAudioVisualizer = (e) => {
        setAudioVisualizerName(title)
        setAudioVisualizerImg(img)
        setAudioVisualizerColors(colors)
        e.stopPropagation()
        setIsAudioVisualizerOpen(true)
    }

    const navigate = useNavigate()

    const handleNavigate = () => navigate(ApplicationRoutes.pages._singleSong(id))

    return (
        <div
            ref={containerRef}
        >
            {
                wasInViewPort
                    ?
                    <ContextMenu
                        items={[
                            {
                                id: "play",
                                icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
                                title: "Play"
                            },
                            {
                                id: "shuffle",
                                icon: <BsShuffle className="w-5 h-5 fill-white" />,
                                title: "Shuffle"
                            },
                            {
                                id: "add-to-queue",
                                icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
                                title: "Add to Queue"
                            },
                            {
                                isSeparator: true
                            },
                            {
                                id: "follow",
                                icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
                                title: "Follow"
                            },
                            {
                                id: "download",
                                icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
                                title: "Download"
                            },
                            { isSeparator: true },
                            {
                                id: "go-to-playlist",
                                icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
                                title: "Go to Playlist"
                            },
                            { isSeparator: true },
                            {
                                id: "open-in-win-app",
                                icon: <AiFillWindows className="w-5 h-5 fill-white" />,
                                title: "Open in Windows App"
                            },
                            {
                                id: "share",
                                icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
                                title: "Share",
                                items: [
                                    {
                                        id: "copy-playlist",
                                        title: "Copy Playlist"
                                    },
                                    {
                                        id: "copy-url",
                                        title: "Copy NowListen URI"
                                    }
                                ]
                            }
                        ]}
                    >
                        <div
                            className="w-full h-full"
                            onClick={handleNavigate}
                        >
                            <div className="relative group rounded-lg overflow-hidden">
                                <img
                                    alt=""
                                    src={img}
                                    loading="lazy"
                                    decoding="async"
                                    className={twMerge("w-full aspect-square", imgClassName)}
                                />

                                {/* overlay */}
                                <div
                                    className={twMerge(`absolute top-0 left-0 w-full h-full opacity-0 pointer-events-none
            bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100 group-hover:pointer-events-auto
            transition-opacity duration-300 flex flex-col cursor-pointer`, imgOverlatClassName, isPlaying || isAudioLoading ? "opacity-100" : "")}
                                >

                                    <div className="flex items-center justify-end p-2">
                                        <Button
                                            onClick={handleClickAudioVisualizer}
                                            bgColor="whiteAlpha.300"
                                            _hover={{
                                                bgColor: "whiteAlpha.400"
                                            }}
                                            rounded="full"
                                            padding={0}
                                            size="sm"
                                            className="active:scale-95 ml-auto"
                                        >
                                            <BsThreeDots className="w-5 h-5 fill-white" />
                                        </Button>
                                    </div>


                                    <div
                                        className="flex items-center gap-x-1.5 mt-auto p-2 w-max cursor-default"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <PlayPauseBtn
                                            colors={colors}
                                            id={id}
                                            img={img}
                                            name={title}
                                            song={song}
                                            playList={playlist}
                                        />

                                        <Button
                                            bgColor="whiteAlpha.300"
                                            _hover={{
                                                bgColor: "whiteAlpha.400"
                                            }}
                                            rounded="full"
                                            padding={0}
                                            size="sm"
                                            className="active:scale-95"
                                        >
                                            <AiOutlineStar className="w-5 h-5 fill-white" />
                                        </Button>

                                        <Button
                                            bgColor="whiteAlpha.300"
                                            _hover={{
                                                bgColor: "whiteAlpha.400"
                                            }}
                                            rounded="full"
                                            padding={0}
                                            size="sm"
                                            className="active:scale-95"
                                        >
                                            <BsThreeDots className="w-5 h-5 fill-white" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-1.5 pt-2.5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-white font-normal">{title}</p>
                                        {
                                            showText
                                                ?
                                                <p className="text-xs text-white/60 font-normal mt-1">{text}</p>
                                                :
                                                null
                                        }
                                    </div>

                                    {icon}
                                </div>
                            </div>

                        </div>
                    </ContextMenu >
                    :
                    <div className="w-full aspect-square bg-gray-500 animate-pulse animate-duration-[2400ms] rounded-lg"></div>

            }
        </div >
    )
}

export default MusicCard1