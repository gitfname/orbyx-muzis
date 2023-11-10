
import { PowerAudio } from "poweraudio"
import { Viz } from "poweraudio/build/Viz";
import { useEffect, useState } from "react";
import { useAudioVisualizerSettingsStore, useAudioVisualizerStore } from "../../../../stores";


interface Props {
  audio: HTMLAudioElement | null;
}

function Visualizer1({ audio }: Props) {
  const [prevPowerAudioContainer, setPrevPowerAudioContainer] = useState(0);
  const [powerAudioInstance, setPowerAudioInstance] = useState<Viz>(null);
  const isPowerAudioActive = useAudioVisualizerSettingsStore(selector => selector.PowerAudio)

  const destroyPowerAudio = () => {
    if (powerAudioInstance) {
      powerAudioInstance.stage.destroy()
    }
  }

  const destroyPowerAudioContainer = () => {
    console.log("destroyPowerAudioContainer - before")
    const powerAudioContainer = document.getElementById("power-audio-container-" + prevPowerAudioContainer)
    console.log("destroyPowerAudioContainer - after")
    if (powerAudioContainer) {
      powerAudioContainer.remove()
    }
    console.log("destroyPowerAudioContainer -finish")
  }

  const DestroyAndCreatePowerAudioContainer = (index: number) => {
    destroyPowerAudio()
    destroyPowerAudioContainer()
    const newContainer = document.createElement("div")
    newContainer.setAttribute("id", "power-audio-container-" + index)
    newContainer.classList.add("w-screen", "h-screen", "absolute", "top-0", "left-0")
    document.getElementById("before-power-audio-container").after(newContainer)
  }

  useEffect(
    () => {
      if(!isPowerAudioActive) {
        destroyPowerAudio()
        destroyPowerAudioContainer()
      }
    },
    [isPowerAudioActive]
  )

  useEffect(
    () => {
      if (audio && isPowerAudioActive) {
        let prevPowerAudioIndex = prevPowerAudioContainer
        prevPowerAudioIndex++
        if (prevPowerAudioIndex > 0) {
          DestroyAndCreatePowerAudioContainer(prevPowerAudioIndex)
          setPrevPowerAudioContainer(prevPowerAudioIndex)
          setPowerAudioInstance(new PowerAudio.Viz({
            container: "#power-audio-container-" + prevPowerAudioIndex,
            source: audio
          }));
        }
      }
    },
    [audio]
  )

  return (
    <>
      <div id="before-power-audio-container" className="appearance-none -z-50 opacity-0 pointer-events-none absolute top-0 left-0"></div>

      <div
        id={"power-audio-container-" + prevPowerAudioContainer}
        className="w-screen h-screen absolute top-0 left-0"
      >
      </div>
    </>
  )
}

export default Visualizer1