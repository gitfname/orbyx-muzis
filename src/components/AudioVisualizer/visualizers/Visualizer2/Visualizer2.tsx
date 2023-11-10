
import { ReactNode, useEffect, useRef, useState } from "react"
import HALO from "vanta/dist/vanta.halo.min"

interface Props {
    audio: HTMLAudioElement | null;
    isOpen: boolean;
    colors: Array<string>;
    children: ReactNode;
}

function Visualizer2({ audio, isOpen, colors, children }: Props) {
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(
        () => {
            if (audio) {
                if (isOpen) {
                    const effect = HALO({
                        el: containerRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        size: 1.40
                    })

                    setVantaEffect(effect)

                    setTimeout(() => {
                        effect.setOptions({
                            baseColor: colors[1]
                        })
                    }, 2000);
                }
                else {
                    if (vantaEffect) {
                        vantaEffect.destroy()
                    }
                }
            }
        },
        [isOpen]
    )

    return (
        <div ref={containerRef} className="w-screen h-screen">
            {children}
        </div>
    )
}

export default Visualizer2