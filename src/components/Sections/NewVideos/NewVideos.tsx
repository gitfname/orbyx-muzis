
import { PiPlaylist } from "react-icons/pi"
import { MusicCard1, Section } from "../.."
import { musics } from "../../../data/musics"
import { MusicOptions } from "../../../types/MusicOptions"

function NewVideos() {
    return (
        <Section
            text="New Videos"
            items={musics.slice(90, 102)}
            slidesPerView={2.3}
            className="mt-16"
            renderer={(item: MusicOptions) => (
                <MusicCard1
                    id={item.id}
                    imgClassName="aspect-[20/16]"
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

export default NewVideos