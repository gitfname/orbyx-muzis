
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useAudioVisualizerStore, useBottomSongControllerStore } from "../../stores"
import { twMerge } from "tailwind-merge"
import { useEffect, useRef, useState } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { BsFullscreen } from "react-icons/bs"
import getBaseUrl from "../../utils/base-url"
import { Videos, Visualizer1, Visualizer2, Visualizer3 } from "./visualizers"
import { useAudioVisualizerSettingsStore } from "../../stores"

function AudioVisualizer() {

    const HOLO = useAudioVisualizerSettingsStore(selector => selector.HOLO)
    const wave = useAudioVisualizerSettingsStore(selector => selector.wave)
    const showImage = useAudioVisualizerSettingsStore(selector => selector.showImage)
    const showVideo = useAudioVisualizerSettingsStore(selector => selector.showVideo)

    const isOpen = useAudioVisualizerStore(selector => selector.isOpen)
    const setIsOpen = useAudioVisualizerStore(selector => selector.setIsOpen)
    const colors = useAudioVisualizerStore(selector => selector.colors)
    const img = useAudioVisualizerStore(selector => selector.img)
    const audio = useBottomSongControllerStore(selector => selector.audio)
    const handleFullScreen = useFullScreenHandle()

    return (
        <FullScreen handle={handleFullScreen}>
            <div
                className={twMerge(`
        fixed top-0 left-0 w-screen h-screen bg-zinc-900/90 opacity-0 pointer-events-none z-[999] transition-opacity
        `, isOpen ? "opacity-100 pointer-events-auto" : "")}
            >
                {
                    HOLO
                    &&
                    <Visualizer2 audio={audio} isOpen={isOpen} colors={colors}>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-60 h-60">
                            {
                                showImage
                                &&
                                <img
                                    alt=""
                                    loading="lazy"
                                    src={img}
                                    className="w-60 h-60 rounded-xl object-cover object-center"
                                />
                            }
                            {
                                wave
                                &&
                                <Visualizer3 diameter={showVideo ? 290 : 140} audio={audio} colors={colors} />
                            }
                        </div>
                    </Visualizer2>
                }

                {/* PowerAudio */}
                <Visualizer1 audio={audio} />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60">
                    {
                        showImage
                        &&
                        <img
                            alt=""
                            loading="lazy"
                            src={img}
                            className="w-60 h-60 rounded-xl object-cover object-center"
                        />
                    }
                    {
                        wave
                        &&
                        <Visualizer3 diameter={showVideo ? 290 : 140} audio={audio} colors={colors} />
                    }
                </div>

                {
                    showVideo
                    &&
                    <Videos />
                }


                <div className="absolute z-10 top-4 right-4">
                    <Button
                        onClick={handleFullScreen.active ? handleFullScreen.exit : handleFullScreen.enter}
                        bgColor="whiteAlpha.300"
                        _hover={{
                            bgColor: "whiteAlpha.400"
                        }}
                        rounded="full"
                        padding={0}
                        color="white"
                        borderWidth={1}
                        borderColor="whiteAlpha.200"
                        className="active:scale-95"
                    >
                        <BsFullscreen className="w-4 h-4 fill-white" />
                    </Button>
                </div>

                <div className="absolute z-10 top-4 left-4 flex flex-col gap-y-3 px-2 py-3 rounded-lg bg-zinc-800 shadow-md shadow-black/10">
                    <Button
                        onClick={() => {
                            handleFullScreen.exit()
                            setIsOpen(false)
                        }}
                        bgColor="whiteAlpha.300"
                        _hover={{
                            bgColor: "whiteAlpha.400"
                        }}
                        rounded="full"
                        padding={0}
                        color="white"
                        borderWidth={1}
                        borderColor="whiteAlpha.200"
                        className="active:scale-95"
                    >
                        X
                    </Button>

                    {/* <Menu>
                        <MenuButton>
                            <Button
                                onClick={() => {
                                    handleFullScreen.exit()
                                    setIsOpen(false)
                                }}
                                bgColor="whiteAlpha.300"
                                _hover={{
                                    bgColor: "whiteAlpha.400"
                                }}
                                rounded="full"
                                padding={0}
                                color="white"
                                borderWidth={1}
                                borderColor="whiteAlpha.200"
                                className="active:scale-95"
                            >
                                <PiIntersectThreeLight className="w-5 h-5 fill-white" />
                            </Button>
                        </MenuButton>

                        <MenuList
                            className="!bg-zinc-900"
                            border="none"
                            paddingX="1.5"
                            boxShadow="1px 2px 10px rgba(10,10,10,0.2)"
                            display="flex"
                            flexDirection="column"
                            rowGap="1"
                        >
                            <MenuItem
                                onClick={() => setVisualizerOptions(
                                    prev => ({
                                        ...prev,
                                        visualizerOne: !prev.visualizerOne
                                    })
                                )}
                                bgColor="transparent"
                                _hover={{
                                    bgColor: "whiteAlpha.100"
                                }}
                                color="whiteAlpha.800"
                                fontSize="sm"
                                fontWeight="normal"
                                rounded="lg"
                            >
                                Power Audio --{visualizerOptions.visualizerOne ? 1 : 0}
                            </MenuItem>
                            <MenuItem
                                onClick={() => setVisualizerOptions(
                                    prev => ({
                                        ...prev,
                                        visualizerTwo: !prev.visualizerTwo
                                    })
                                )}
                                bgColor="transparent"
                                _hover={{
                                    bgColor: "whiteAlpha.100"
                                }}
                                color="whiteAlpha.800"
                                fontSize="sm"
                                fontWeight="normal"
                                rounded="lg"
                            >
                                HOLO --{visualizerOptions.visualizerTwo ? 1 : 0}
                            </MenuItem>
                            <MenuItem
                                onClick={() => setVisualizerOptions(
                                    prev => ({
                                        ...prev,
                                        visualizerThree: !prev.visualizerThree
                                    })
                                )}
                                bgColor="transparent"
                                _hover={{
                                    bgColor: "whiteAlpha.100"
                                }}
                                color="whiteAlpha.800"
                                fontSize="sm"
                                fontWeight="normal"
                                rounded="lg"
                            >
                                Wave --{visualizerOptions.visualizerThree ? 1 : 0}
                            </MenuItem>

                            <div className="w-full border-b border-b-white/10"></div>

                            <MenuItem
                                bgColor="transparent"
                                _hover={{
                                    bgColor: "whiteAlpha.100"
                                }}
                                color="whiteAlpha.800"
                                fontSize="sm"
                                fontWeight="normal"
                                rounded="lg"
                            >
                                Show Image
                            </MenuItem>

                            <MenuItem
                                bgColor="transparent"
                                _hover={{
                                    bgColor: "whiteAlpha.100"
                                }}
                                color="whiteAlpha.800"
                                fontSize="sm"
                                fontWeight="normal"
                                rounded="lg"
                            >
                                Show Video
                            </MenuItem>

                        </MenuList>
                    </Menu> */}
                </div>
            </div>
        </FullScreen >
    )
}

export default AudioVisualizer