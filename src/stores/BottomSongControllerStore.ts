
import { create } from "zustand"
import { produce } from "immer"
import { MusicOptions } from "../types/MusicOptions";

interface BottomSongControllerStoreOptions {
    file?: string;
    isPlaying?: boolean;
    isLoading: boolean;
    duration: number;
    isLoaded?: boolean;
    audio?: HTMLAudioElement,
    name?: string;
    currentTime: number;
    isHidden: boolean;
    isPlayList: boolean;
    playList: Array<MusicOptions>;
    setIsPlayList(value: boolean): void;
    setPlayList(data: Array<MusicOptions>);
    setIsHidden(data: boolean): void
    setIsLoading(data: boolean): void;
    setFile(file: string): void,
    setIsPlaying(value: boolean): void,
    setDuration(value: number): void,
    setIsLoaded(value: boolean): void,
    setAudio(audio: HTMLAudioElement): void,
    setSongName(value: string): void;
    setCurrentTime(value: number): void;
}

const useBottomSongControllerStore = create<BottomSongControllerStoreOptions>(set => ({
    duration: 1,
    file: undefined,
    isPlaying: undefined,
    isLoaded: undefined,
    audio: undefined,
    name: undefined,
    isLoading: false,
    currentTime: 0,
    isHidden: false,
    isPlayList: false,
    playList: [],
    setIsHidden: data => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.isHidden = data
        })
    ),
    setIsPlayList: value => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.isPlayList = value
        })
    ),
    setPlayList: data => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.playList = data
        })
    ),
    setDuration: (value) => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.duration = value
        })
    ),
    setFile: file => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.file = file
        })
    ),
    setIsPlaying: value => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.isPlaying = value
        })
    ),
    setIsLoaded: value => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.isLoaded = value
        })
    ),
    setAudio: audio => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.audio = audio
        })
    ),
    setSongName: value => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.name = value
        })
    ),
    setCurrentTime: value => set(
        produce((state: BottomSongControllerStoreOptions) => {
            state.currentTime = value
        })
    ),
    setIsLoading: data => set(
            produce((state: BottomSongControllerStoreOptions) => {
                state.isLoading = data
            })
        )
}));

export {
    useBottomSongControllerStore
}

export type {
    BottomSongControllerStoreOptions
}