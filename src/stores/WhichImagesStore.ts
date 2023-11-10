
import { create } from "zustand"
import { produce } from "immer"

type ImageTypes = "cool-images" | "boring-images";

interface Props {
    whichImage: ImageTypes;
    setWhichImage(value: ImageTypes): void;
}

const useWhichImagesStore = create<Props>(set => ({
    whichImage: (localStorage.getItem("image-type") as ImageTypes) || "boring-images",
    setWhichImage: data => set(
        produce((state: Props) => {
            state.whichImage = data
        })
    )
}))

export default useWhichImagesStore