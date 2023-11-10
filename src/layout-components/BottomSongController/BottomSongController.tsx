
import { useAudioVisualizerStore, useBottomSongControllerStore } from "../../stores"
import { Pause1, Play1 } from "../../icons"
import { AudioControllerAudio } from "../../utils/AudioController"
import { useCallback, useEffect, useRef, useState } from "react"
import SongTime from "../../components/SongTime/SongTime"
import { Button } from "@chakra-ui/react"
import { twMerge } from "tailwind-merge"
import { BsFullscreen } from "react-icons/bs"
import { AudioController } from "../../utils/AudioController"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"

function BottomSongController() {

    const isPlaying = useBottomSongControllerStore(selector => selector.isPlaying)
    const isLoading = useBottomSongControllerStore(selector => selector.isLoading)
    const songName = useBottomSongControllerStore(selector => selector.name)
    const setSongName = useBottomSongControllerStore(selector => selector.setSongName)
    const isHidden = useBottomSongControllerStore(selector => selector.isHidden)
    const isPlaylist = useBottomSongControllerStore(selector => selector.isPlayList)
    const playList = useBottomSongControllerStore(selector => selector.playList)
    const currentSongName = useBottomSongControllerStore(selector => selector.name)
    const setIsAudioVisualizerOpen = useAudioVisualizerStore(selector => selector.setIsOpen)
    const [isShown, setIsShown] = useState(false)
    const controllerRef = useRef<HTMLDivElement>(null)

    const hideController = () => {
        if (controllerRef.current) {
            controllerRef.current.classList.remove("!translate-y-0", "!opacity-100", "!z-[9999]", "!delay-0")
        }
    }

    const handlePlayPauseCLick = () => {
        if (!isShown) setIsShown(true)

        if (isPlaying) {
            AudioControllerAudio?.pause()
        }
        else {
            AudioControllerAudio?.play()
        }
    }

    useEffect(
        () => {
            if (isHidden) return
            if (controllerRef.current && isLoading || isPlaying || isShown) {
                controllerRef.current.classList.add("!translate-y-0", "!opacity-100", "!z-[9999]", "!delay-0")
            }
        },
        [isPlaying, isLoading]
    )

    useEffect(
        () => {
            if (isHidden) {
                hideController()
            }
        },
        [isHidden]
    )


    return (
        <div
            ref={controllerRef}
            className={`fixed bottom-2 w-11/12 left-1/2 p-2.5 -translate-x-1/2 rounded-xl bg-zinc-800 shadow-lg
            shadow-black/10 opacity-0 -z-50 translate-y-[110%] delay-200 transition-all duration-300
            flex max-sm:flex-col items-center justify-between gap-y-2`}
        >
            <div className="absolute top-2 left-2 sm:top-0 sm:left-2 sm:-translate-y-full">
                <Button
                    onClick={hideController}
                    bgColor="whiteAlpha.100"
                    color="white"
                    fontWeight="normal"
                    _active={{
                        bgColor: "whiteAlpha.100"
                    }}
                    size="sm"
                    paddingInline={["unset", "unset", "4"]}
                    _focus={{
                        bgColor: "whiteAlpha.100"
                    }}
                    rounded="lg"
                    className="sm:!bg-zinc-800 sm:!rounded-b-none"
                >
                    X
                </Button>
            </div>

            <div className="absolute top-2 right-2 sm:top-0 sm:right-2 sm:-translate-y-full">
                <Button
                    onClick={() => setIsAudioVisualizerOpen(true)}
                    bgColor="whiteAlpha.100"
                    color="white"
                    fontWeight="normal"
                    _active={{
                        bgColor: "whiteAlpha.100"
                    }}
                    size="sm"
                    paddingInline={["unset", "unset", "4"]}
                    _focus={{
                        bgColor: "whiteAlpha.100"
                    }}
                    rounded="lg"
                    className="sm:!bg-zinc-800 sm:!rounded-b-none"
                >
                    <BsFullscreen className="w-4 h-4 fill-white" />
                </Button>
            </div>

            <div className="flex items-center gap-x-4 flex-1">
                <button
                    onClick={handlePlayPauseCLick}
                    className="appearance-none w-9 h-9 rounded-xl grid place-items-center bg-slate-100
                transition-transform duration-300 cursor-pointer
                hover:scale-105 active:scale-100">
                    {
                        isLoading
                            ?
                            <div className="w-5 h-5 rounded-full border-t border-black/80 animate-spin animate-duration-1000"></div>
                            :
                            isPlaying
                                ?
                                <Pause1 className="w-5 h-5 text-black/90" />
                                :
                                <Play1 className="w-5 h-5 text-black/90" />
                    }

                </button>

                <p className="text-white text-base font-medium tracking-wide">{songName}</p>

            </div>

            {
                isPlaylist
                    ?
                    <div
                        className="flex items-center gap-x-2 flex-1"
                    >

                        <Button
                            bgColor="whiteAlpha.200"
                            _hover={{
                                bgColor: "whiteAlpha.300"
                            }}
                            size="sm"

                            onClick={() => {
                                const currentSongIndexInPlayList = playList.findIndex(song => song.name === currentSongName)
                                if (currentSongIndexInPlayList === -1) return

                                const nextUrnextSong = playList[
                                    playList[currentSongIndexInPlayList - 1]
                                        ?
                                        currentSongIndexInPlayList - 1
                                        :
                                        playList.length - 1
                                ]

                                setSongName(nextUrnextSong.name)

                                const audio = new AudioController({
                                    file: nextUrnextSong.url
                                })
                                audio.audio.oncanplay = () => {
                                    audio.play()
                                }
                            }}
                        >
                            <BiSkipPrevious className="w-5 h-5 fill-white" />
                        </Button>

                        <Button
                            bgColor="whiteAlpha.200"
                            _hover={{
                                bgColor: "whiteAlpha.300"
                            }}
                            size="sm"

                            onClick={() => {
                                const currentSongIndexInPlayList = playList.findIndex(song => song.name === currentSongName)
                                if (currentSongIndexInPlayList === -1) return

                                const nextUrnextSong = playList[
                                    playList[currentSongIndexInPlayList + 1]
                                        ?
                                        currentSongIndexInPlayList + 1
                                        :
                                        0
                                ]

                                setSongName(nextUrnextSong.name)

                                const audio = new AudioController({
                                    file: nextUrnextSong.url
                                })
                                audio.audio.oncanplay = () => {
                                    audio.play()
                                }
                            }}
                        >
                            <BiSkipNext className="w-5 h-5 fill-white" />
                        </Button>
                    </div>
                    :
                    null
            }

            <div className="w-full sm:w-7/12 md:w-6/12 mx-auto">
                <SongTime />
            </div>

        </div>
    )
}

export default BottomSongController