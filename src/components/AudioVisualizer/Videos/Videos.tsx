
import { useEffect, useRef, useState } from "react"
import getBaseUrl from "../../../utils/base-url"
import { useAudioVisualizerSettingsStore, useAudioVisualizerStore, useBottomSongControllerStore } from "../../../stores"

function Videos() {

    const isPlaying = useBottomSongControllerStore(selector => selector.isPlaying)
    const isOpen = useAudioVisualizerStore(selector => selector.isOpen)
    const isVideosActive = useAudioVisualizerSettingsStore(selector => selector.showVideo)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [videoSource, setVideoSource] = useState<string | null>(null)
    const videos = [
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-18.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-19.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-1.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-4.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-5.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-6.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-7.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-8.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-9.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-10.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-11.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-12.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-13.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-14.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-15.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-16.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-17.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-20.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-21.mp4",
        import.meta.env.VITE_PUBLIC_VIDEOS_STORAGE + "/video-22.mp4",
    ]

    useEffect(
        () => {
            if (videoRef.current) {
                setVideoSource(videos[0])
                videoRef.current.setAttribute("data-source-index", "0")
                videoRef.current.addEventListener("ended", () => {
                    const index = Number(videoRef.current.getAttribute("data-source-index"))
                    videoRef.current.pause()
                    let sourceIndex
                    if (videos[index + 1]) {
                        sourceIndex = index + 1
                    }
                    else {
                        sourceIndex = 0
                    }
                    videoRef.current.setAttribute("data-source-index", sourceIndex + "")

                    const playOnLoaded = () => {
                        videoRef.current.play()
                        videoRef.current.removeEventListener("canplaythrough", playOnLoaded)
                    }

                    videoRef.current.addEventListener("canplaythrough", playOnLoaded)

                    setVideoSource(videos[sourceIndex])
                })
            }
        },
        []
    )

    useEffect(
        () => {
            if (!videoRef.current) return
            if (isPlaying && isOpen) {
                videoRef && videoRef.current.play()
            }
            else {
                videoRef && videoRef.current.pause()
            }
        },
        [isPlaying, isOpen]
    )

    return (
        isVideosActive
            ?
            <video ref={videoRef} src={videoSource} className="w-96 h-auto rounded-xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20" muted></video>
            :
            null
    )
}

export default Videos