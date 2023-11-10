import { PiPlaylist } from "react-icons/pi"
import { Card3, MusicCard1, Section, ViewBy } from "../../components"
import getBaseUrl from "../../utils/base-url"
import { AiOutlineHeart } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { useState } from "react"
import { MusicOptions } from "../../types/MusicOptions"
import { musics } from "../../data/musics"


function SongsLibrary__Trending() {

  const [view, setView] = useState<"list" | "grid">("list")

  return (
    <div className="w-full min-h-full h-max sm:p-4">

      <ViewBy
        initialView={view}
        onViewChange={view => setView(view)}
      />

      {/* playlists */}
      <Section
        text="Trending Songs"
        items={musics.slice(20, 33)}
        slidesPerView={4}
        showSeeMoreBtn={false}
        showPrevNextBtn={false}
        customDataContainer={(
          <div className={`w-full grid ${view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "grid-cols-1 gap-2"}`}>
          </div>
        )}
        renderer={(item: MusicOptions) => (
          <>
            {
              view === "list"
                ?
                <Card3
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.name}
                  song={item.url}
                  rightSide={(
                    <div className="flex items-center gap-x-2.5">
                      <button className="py-1 px-2.5 hover:bg-white/10 rounded transition-all
                  opacity-0 group-hover:opacity-100">
                        <BsThreeDots className="w-4 h-4 fill-white" />
                      </button>
                      <AiOutlineHeart className="w-5 h-5 fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-white font-normal ml-3">3:49</span>
                    </div>
                  )}
                  subtitle={(
                    <div>
                      <span className="text-xs cursor-pointer text-white/80 font-normal hover:text-white hover:underline">Signer</span>
                    </div>
                  )}
                />
                :
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
                />
            }
          </>
        )}
      />
    </div>
  )
}

export default SongsLibrary__Trending