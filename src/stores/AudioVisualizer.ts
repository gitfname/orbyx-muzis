
import { create } from "zustand"
import { produce } from "immer"


interface Props {
    isOpen: boolean;
    img: string;
    name: string;
    colors: Array<string>;
    setImg(value: string): void;
    setIsOpen(value: boolean): void;
    setName(value: string): void;
    setColors(data: Array<string>): void;
}

const useAudioVisualizerStore = create<Props>(set => ({
    isOpen: false,
    img: "",
    name: "",
    colors: [],
    setIsOpen: value => set(
        produce((state: Props) => {
            state.isOpen = value
        })
    ),
    setImg: value => set(
        produce((state: Props) => {
            state.img = value
        })
    ),
    setName: value => set(
        produce((state: Props) => {
            state.name = value
        })
    ),
    setColors: data => set(
        produce((state: Props) => {
            state.colors = data
        })
    )
}))

export default useAudioVisualizerStore