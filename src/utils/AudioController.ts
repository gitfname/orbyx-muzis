
import { useBottomSongControllerStore } from "../stores"

let audio: HTMLAudioElement | null = new Audio()
let prevInstance: HTMLAudioElement

interface AudioControllerProps {
    file: string;
    onFileLoaded?(audio: HTMLAudioElement): void;
}

interface AudioControllerOutPut {
    audio: HTMLAudioElement;
    duration: number;
    filePath: string;
    musicName: string;
    onFileLoaded?(audio: HTMLAudioElement): void;
    play(): void;
    puae(): void;
}

class AudioController {

    public audio: HTMLAudioElement;
    public duration: number | undefined;
    public filePath: string;
    public musicName: string;
    public onFileLoaded?(audio: HTMLAudioElement): void;

    constructor({ file, onFileLoaded }: AudioControllerProps) {
        audio = null
        if (prevInstance) {
            prevInstance.pause()
        }
        this.audio = new Audio(file)
        this.audio.setAttribute("crossorigin", "anonymous")
        audio = this.audio
        this.duration = undefined
        this.filePath = file
        this.musicName = file.split(".")[0]
        this.onFileLoaded = onFileLoaded

        useBottomSongControllerStore.getState().setIsHidden(false)
        useBottomSongControllerStore.getState().setIsLoading(true)

        audio.addEventListener("loadstart", this.onLoadingDataStart.bind(this))
        audio.addEventListener("canplay", this.onLoadedData.bind(this))
        audio.addEventListener("play", this.onPlay.bind(this))
        audio.addEventListener("pause", this.onPause.bind(this))
        audio.addEventListener("timeupdate", this.onTimeUpdate.bind(this))

        useBottomSongControllerStore.getState().setFile(this.filePath)
        useBottomSongControllerStore.getState().setAudio(this.audio)

        prevInstance = this.audio
    }

    onLoadingDataStart() {
        useBottomSongControllerStore.getState().setIsLoaded(false)
    }

    onLoadedData() {
        useBottomSongControllerStore.getState().setIsLoaded(true)
        useBottomSongControllerStore.getState().setIsPlaying(false)
        useBottomSongControllerStore.getState().setIsLoading(false)
        useBottomSongControllerStore.getState().setDuration(this.audio.duration)

        this.duration = this.audio.duration

        if (this.onFileLoaded) this.onFileLoaded(this.audio)
    }

    onPlay() {
        console.log("onPlay");

        useBottomSongControllerStore.getState().setIsPlaying(true)
    }

    onPause() {
        console.log("onPause");
        useBottomSongControllerStore.getState().setIsPlaying(false)
    }

    onTimeUpdate() {
        // console.log("update");
        useBottomSongControllerStore.getState().setCurrentTime(this.audio.currentTime)
    }

    setCurrentTime(time: number) {
        this.audio.currentTime = time
    }

    play() {
        this.audio.play()
        useBottomSongControllerStore.getState().setIsPlaying(true)
    }

    pause() {
        this.audio.pause()
        useBottomSongControllerStore.getState().setIsPlaying(false)
    }
}

export {
    AudioController,
    audio as AudioControllerAudio
}

export type {
    AudioControllerProps,
    AudioControllerOutPut
}