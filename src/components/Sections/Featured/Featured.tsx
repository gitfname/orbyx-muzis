
import { PiPlaylist } from "react-icons/pi"
import { MusicCard1, Section } from "../.."
import { musics } from "../../../data/musics"
import { MusicOptions } from "../../../types/MusicOptions"

function Featured() {
    return (
        <Section
            className="mt-16"
            text="Featured"
            items={musics.slice(40, 55)}
            slidesPerView={2}
            renderer={(item: MusicOptions) => (
                <MusicCard1
                    imgClassName="aspect-[9/8]"
                    id={item.id}
                    showText={true}
                    icon={<PiPlaylist className="w-5 h-5 fill-white" />}
                    img={item.img}
                    song={item.url}
                    stared={false}
                    text={""}
                    title={item.name}
                    colors={item.colors}
                    playlist={musics.slice(40, 55)}
                />
            )}
        />
    )
}

export default Featured