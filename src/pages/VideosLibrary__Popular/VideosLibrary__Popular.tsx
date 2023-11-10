
import { PiPlaylist } from "react-icons/pi"
import { Card3, MusicCard1, Section, ViewBy } from "../../components"
import getBaseUrl from "../../utils/base-url"
import { AiOutlineHeart } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { useState } from "react"


const trendingSongs = [
  {
    id: "hot-track-1",
    title: "song-1-title",
    text: "song-1",
    signer: "song-1-signer",
    img: getBaseUrl() + "/images/82.jpg"
  },
  {
    id: "hot-track-2",
    title: "song-2-title",
    text: "song-2",
    signer: "song-2-signer",
    img: getBaseUrl() + "/images/83.jpg"
  },
  {
    id: "hot-track-3",
    title: "song-3-title",
    text: "song-3",
    signer: "song-3-signer",
    img: getBaseUrl() + "/images/84.jpg"
  },
  {
    id: "hot-track-4",
    title: "song-4-title",
    text: "song-4",
    signer: "song-4-signer",
    img: getBaseUrl() + "/images/85.jpg"
  },
  {
    id: "hot-track-5",
    title: "song-5-title",
    text: "song-5",
    signer: "song-5-signer",
    img: getBaseUrl() + "/images/86.jpg"
  },
  {
    id: "hot-track-6",
    title: "song-6-title",
    text: "song-6",
    signer: "song-6-signer",
    img: getBaseUrl() + "/images/87.jpg"
  },
  {
    id: "hot-track-7",
    title: "song-7-title",
    text: "song-7",
    signer: "song-7-signer",
    img: getBaseUrl() + "/images/88.jpg"
  },
  {
    id: "hot-track-8",
    title: "song-8-title",
    text: "song-8",
    signer: "song-8-signer",
    img: getBaseUrl() + "/images/89.jpg"
  },
  {
    id: "hot-track-9",
    title: "song-9-title",
    text: "song-9",
    signer: "song-9-signer",
    img: getBaseUrl() + "/images/90.jpg"
  },
  {
    id: "hot-track-10",
    title: "song-10-title",
    text: "song-10",
    signer: "song-10-signer",
    img: getBaseUrl() + "/images/91.jpg"
  },
  {
    id: "hot-track-11",
    title: "song-11-title",
    text: "song-11",
    signer: "song-11-signer",
    img: getBaseUrl() + "/images/92.jpg"
  },
  {
    id: "hot-track-12",
    title: "song-12-title",
    text: "song-12",
    signer: "song-12-signer",
    img: getBaseUrl() + "/images/93.jpg"
  }
]

function VideosLibrary__Popular() {

  const [view, setView] = useState<"list" | "grid">("list")

  return (
    <div className="w-full min-h-full h-max sm:p-4">

      <ViewBy
        initialView={view}
        onViewChange={view => setView(view)}
      />

      {/* playlists */}
      <Section
        text="Popular Videos"
        items={trendingSongs}
        slidesPerView={4}
        showSeeMoreBtn={false}
        showPrevNextBtn={false}
        customDataContainer={(
          <div className={`w-full grid ${view === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" : "grid-cols-1 gap-2"}`}>
          </div>
        )}
        renderer={(item) => (
          <>
            {
              view === "list"
                ?
                <Card3
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  song=""
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
                      <span className="text-xs cursor-pointer text-white/80 font-normal hover:text-white hover:underline">{item.signer}</span>
                    </div>
                  )}
                />
                :
                <MusicCard1
                  id=""
                  showText={false}
                  icon={<PiPlaylist className="w-5 h-5 fill-white" />}
                  img={item.img}
                  song=""
                  stared={false}
                  text=""
                  title={item.text}
                  colors={item.colors}
                />
            }
          </>
        )}
      />
    </div>
  )
}

export default VideosLibrary__Popular