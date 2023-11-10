import { useMediaQuery } from "@chakra-ui/react"
import { MusicCard1, Section } from "../.."
import { musics } from "../../../data/musics"
import { MusicOptions } from "../../../types/MusicOptions"
import { PiPlaylist } from "react-icons/pi"

function Recommended() {

    const [
        isXS, isSM, isMD
    ] = useMediaQuery([
        "(max-width: 639px)",
        "(min-width: 640px) and (max-width: 767px)",
        "(min-width: 768px) and (max-width: 1023px)"
    ])

    const slidesPerView = (
        isXS ? 2.25 : isSM ? 3.2 : isMD ? 3.8 : 4
    )

    return (
        <Section
            text="Recommended"
            items={musics.slice(0, 10)}
            slidesPerView={slidesPerView}
            className="mt-16"
            renderer={(item: MusicOptions) => (

                <MusicCard1
                    id={item.id}
                    showText={false}
                    icon={<PiPlaylist className="w-5 h-5 fill-white" />}
                    img={item.img}
                    song={item.url}
                    stared={false}
                    text=""
                    title={item.name}
                    colors={item.colors}
                    playlist={musics.slice(0, 10)}
                />
            )}
        />
    )
}

export default Recommended