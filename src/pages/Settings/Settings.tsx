
import { Checkbox, Radio } from "@chakra-ui/react"
import { useAudioVisualizerSettingsStore, useBottomSongControllerStore, useWhichImagesStore } from "../../stores"
import { useEffect } from "react"
import { AudioController, AudioControllerAudio } from "../../utils/AudioController"
import { Navigate } from "react-router-dom"

function Settings() {

    const HOLO = useAudioVisualizerSettingsStore(selector => selector.HOLO)
    const setHOLO = useAudioVisualizerSettingsStore(selector => selector.setHOLO)
    const powerAudio = useAudioVisualizerSettingsStore(selector => selector.PowerAudio)
    const setPowerAudio = useAudioVisualizerSettingsStore(selector => selector.setPowerAudio)
    const wave = useAudioVisualizerSettingsStore(selector => selector.wave)
    const setWave = useAudioVisualizerSettingsStore(selector => selector.setWave)
    const showImage = useAudioVisualizerSettingsStore(selector => selector.showImage)
    const setShowImage = useAudioVisualizerSettingsStore(selector => selector.setShowImage)
    const showVideo = useAudioVisualizerSettingsStore(selector => selector.showVideo)
    const setShowVideo = useAudioVisualizerSettingsStore(selector => selector.setShowVideo)
    const isPlaying = useBottomSongControllerStore(selector => selector.isPlaying)
    const audio = useBottomSongControllerStore(selector => selector.audio)
    const setAudio = useBottomSongControllerStore(selector => selector.setAudio)
    const setIsHidden = useBottomSongControllerStore(selector => selector.setIsHidden)
    const whichImage = useWhichImagesStore(selector => selector.whichImage)
    const setImageType = useWhichImagesStore(selector => selector.setWhichImage)

    const beforeAll = () => {
        if (isPlaying || audio) {
            AudioControllerAudio.pause()
            setAudio(null)
            setIsHidden(true)
        }
    }

    const handleHoloClick = () => {
        beforeAll()
        setPowerAudio(false)
        setHOLO(!HOLO)
    }
    const handlePowerAudioClick = () => {
        beforeAll()
        setHOLO(false)
        setWave(false)
        setPowerAudio(!powerAudio)
    }
    const handleWaveClick = () => {
        beforeAll()
        setPowerAudio(false)
        setWave(!wave)
    }
    const handleImageTypeChange = () => {
        if (whichImage === "boring-images") {
            setImageType("cool-images")
            localStorage.setItem("image-type", "cool-images")
            location.reload()
        }
        else {
            setImageType("boring-images")
            localStorage.setItem("image-type", "boring-images") 
            location.reload()
        }
    }

    return (
        <div
            className="w-full min-h-full h-max p-4"
        >

            <p className="text-2xl font-medium text-white mb-8">Audio Visualizer Settings</p>

            <div className="flex flex-col gap-y-2.5">

                <span
                    className="mb-2 text-base text-white/60 font-normal"
                >
                    Audio Visualizer
                </span>

                <div className="pl-2.5 flex flex-col gap-y-3 mb-4">
                    <div className="flex items-center gap-x-2">
                        <Checkbox isChecked={HOLO} />
                        <p onClick={handleHoloClick} className="text-sm font-normal text-white cursor-pointer">HOLO</p>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Checkbox name="audio-visualizer" isChecked={powerAudio} />
                        <p onClick={handlePowerAudioClick} className="text-sm font-normal text-white cursor-pointer">Power Audio</p>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Checkbox name="audio-visualizer" isChecked={wave} />
                        <p onClick={handleWaveClick} className="text-sm font-normal text-white cursor-pointer">Wave</p>
                    </div>
                </div>

                <span
                    className="mb-2 text-base text-white/60 font-normal"
                >
                    Other Settings
                </span>

                <div className="pl-2.5 flex flex-col gap-y-3 mb-4">
                    <div className="flex items-center gap-x-2">
                        <Checkbox isChecked={showImage} />
                        <p onClick={() => setShowImage(!showImage)} className="text-sm font-normal text-white cursor-pointer">Show Image</p>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Checkbox isChecked={showVideo} />
                        <p onClick={() => setShowVideo(!showVideo)} className="text-sm font-normal text-white cursor-pointer">Show Video</p>
                    </div>

                    <div className="flex items-center gap-x-2">
                        <Checkbox isChecked={whichImage === "cool-images"} />
                        <p onClick={handleImageTypeChange} className="text-sm font-normal text-white cursor-pointer">Show Cool Images</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Settings