
import { PiPlaylist } from "react-icons/pi"
import { MusicCard1, Section } from "../.."
import { musics } from "../../../data/musics"
import { MusicOptions } from "../../../types/MusicOptions"
import { useMediaQuery } from "@chakra-ui/react"


function NewAlbums() {

    const [
        isXS, isSM, isMD, isLG
    ] = useMediaQuery([
        "(max-width: 639px)",
        "(min-width: 640px) and (max-width: 767px)",
        "(min-width: 768px) and (max-width: 1023px)",
        "(min-width: 1024px)"
    ])

    const slidesPerView = (
        isXS ? 2.25 : isSM ? 3.2 : isMD ? 3.8 : 4
    )

    return (
        <Section
            text="New Albums"
            items={musics.slice(18, 28)}
            slidesPerView={slidesPerView}
            className="mt-16"
            renderer={(item: MusicOptions) => (
                <MusicCard1
                    id={item.id}
                    showText={true}
                    icon={<PiPlaylist className="w-5 h-5 fill-white" />}
                    img={item.img}
                    song={item.url}
                    stared={false}
                    text={item.name}
                    title={item.name}
                    colors={item.colors}
                />
            )}
        />
    )
}

export default NewAlbums