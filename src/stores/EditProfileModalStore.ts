
import { create } from "zustand"
import { produce } from "immer"


interface Props {
    isOpen: boolean;
    setIsOpen(value: boolean): void;
}

const useEditProfileModalStore = create<Props>(set => ({
    isOpen: false,
    setIsOpen: data => set(
        produce((state: Props) => {
            state.isOpen = data
        })
    )
}))
export default useEditProfileModalStore