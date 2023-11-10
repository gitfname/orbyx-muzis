import { PiPlaylist } from "react-icons/pi"
import { MusicCard1, Section } from "../.."
import { musics } from "../../../data/musics"
import { MusicOptions } from "../../../types/MusicOptions"
import { useMediaQuery } from "@chakra-ui/react"


function RecentlyPlayed() {

    const [
        isXS, isSM
    ] = useMediaQuery([
        "(max-width: 639px)",
        "(min-width: 640px) and (max-width: 767px)"
    ])

    const HotTracksSlidesPerView = (
        isXS ? 2.25 : isSM ? 3.2 : 3.5
    )

    return (
        <Section
            text="Recently Played"
            items={musics.slice(10, 20)}
            className="mt-16"
            slidesPerView={HotTracksSlidesPerView}
            showSeeMoreBtn={false}
            renderer={(item: MusicOptions) => (
                <MusicCard1
                    id={item.id}
                    showText={false}
                    icon={<PiPlaylist className="w-5 h-5 fill-white" />}
                    img={item.img}
                    song={item.url}
                    stared={false}
                    text={item.name}
                    title={item.name}
                    colors={item.colors}
                    playlist={musics.slice(10, 20)}
                />
            )}
        />
    )
}

export default RecentlyPlayed