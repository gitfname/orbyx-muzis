
import { PiPlaylist } from "react-icons/pi"
import { MusicCard1, Section } from "../.."
import { MusicOptions } from "../../../types/MusicOptions"
import { musics } from "../../../data/musics"
import { useMediaQuery } from "@chakra-ui/react"

function PlayLists() {

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
            text="PlayLists"
            items={musics.slice(50, 60)}
            slidesPerView={slidesPerView}
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
                    playlist={musics.slice(50, 60)}
                />
            )}
        />
    )
}

export default PlayLists