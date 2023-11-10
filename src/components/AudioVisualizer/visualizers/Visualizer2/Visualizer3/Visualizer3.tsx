
import { Wave } from "@foobar404/wave";
import { useEffect, useRef, useState } from "react";


interface Props {
    audio: HTMLAudioElement | null;
    colors: Array<string>;
    diameter: number;
}

function Visualizer3({ audio, colors, diameter }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [wave, setWave] = useState<Wave | null>(null)

    useEffect(
        () => {
            if (audio) {
                if (!canvasRef.current) return
                const wave = new Wave(audio, canvasRef.current);
                wave.addAnimation(new wave.animations.Glob({
                    fillColor: { gradient: ["rgb(25,25,25)", "rgb(85,85,85)"] },
                    lineWidth: 1,
                    lineColor: "#fff",
                    count: 48,
                    diameter: diameter
                }))
                setWave(wave)
            }
        },
        [audio]
    )

    useEffect(
        () => {
            if (wave) {
                (wave as any)._activeAnimations[0]._options.fillColor.gradient = colors
            }
        },
        [colors, wave]
    )

    return (
        <canvas
            width={650}
            height={650}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10"
            ref={canvasRef}
        ></canvas>
    )
}

export default Visualizer3