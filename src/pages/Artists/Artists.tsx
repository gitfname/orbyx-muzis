
import { MusicCard1, Section } from "../../components"
import { musics } from "../../data/musics"
import { MusicOptions } from "../../types/MusicOptions"
import getBaseUrl from "../../utils/base-url"

function Artists() {
    return (
        <div className="w-full min-h-full h-max p-4 md:p-6">

            <Section
                text="Artists"
                items={musics.slice(30, 45)}
                slidesPerView={4}
                showPrevNextBtn={false}
                showSeeMoreBtn={false}
                customDataContainer={(
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        
                    </div>
                )}
                renderer={(item: MusicOptions) => (
                    <MusicCard1
                        id={item.id}
                        imgClassName="rounded-full"
                        imgOverlatClassName="rounded-full"
                        showText={false}
                        icon={null}
                        img={item.img}
                        song={item.url}
                        stared={false}
                        text=""
                        title={item.name}
                        colors={item.colors}
                    />
                )}
            />

        </div>
    )
}

export default Artists