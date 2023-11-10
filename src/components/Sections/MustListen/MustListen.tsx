
import { PiPlaylist } from "react-icons/pi"
import { MusicCard1, Section } from "../.."
import { musics } from "../../../data/musics"
import { MusicOptions } from "../../../types/MusicOptions"
import { useMediaQuery } from "@chakra-ui/react"


function MustListen() {

    const [
        isXS, isSM, isMD
    ] = useMediaQuery([
        "(max-width: 639px)",
        "(min-width: 640px) and (max-width: 767px)",
        "(min-width: 768px) and (max-width: 1023px)"
    ])

    const MoreToExploreSlidesPerView = (
        isXS ? 2.25 : isSM ? 3.2 : isMD ? 3.5 : 4.3
    )

    return (
        <Section
            text="Must Listen"
            items={musics.slice(55, 62)}
            className="mt-16"
            slidesPerView={MoreToExploreSlidesPerView}
            showSeeMoreBtn={true}
            renderer={(item: MusicOptions) => (
                <MusicCard1
                    id={item.id}
                    imgClassName="aspect-[9/11]"
                    showText={true}
                    icon={<PiPlaylist className="w-5 h-5 fill-white" />}
                    img={item.img}
                    song={item.url}
                    stared={false}
                    text={item.name}
                    title={item.name}
                    colors={item.colors}
                    playlist={musics.slice(55, 62)}
                />
            )}
        />
    )
}

export default MustListen