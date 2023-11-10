
import { PiPlaylist, PiPlaylistFill } from "react-icons/pi"
import { Card2, Card3, ContextMenu, MusicCard1, PlayLists, Section } from "../../../components"
import { musics } from "../../../data/musics"
import { MusicOptions } from "../../../types/MusicOptions"
import { useMediaQuery } from "@chakra-ui/react"
import { BsFillPlayFill, BsFillShareFill, BsShuffle, BsThreeDots } from "react-icons/bs"
import { AiFillWindows, AiOutlineDownload, AiOutlineHeart, AiOutlineStar } from "react-icons/ai"
import { HiOutlineQueueList } from "react-icons/hi2"
import Footer from "../../../layout-components/Footer"

function Dashboard() {

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
    <div className="w-full h-max min-h-full p-4">

      <Section
        text="My Musics"
        items={musics.slice(0, 12)}
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
            playlist={musics.slice(0, 12)}
          />
        )}
      />

      <Section
        text="My Favorites"
        items={musics.slice(27, 37)}
        slidesPerView={slidesPerView}
        className="mt-20"
        renderer={(item: MusicOptions) => (
          <MusicCard1
            id={item.id}
            showText={false}
            icon={<PiPlaylist className="w-5 h-5 fill-white" />}
            img={item.img}
            song={item.url}
            stared={false}
            imgClassName="aspect-[9/12]"
            text=""
            title={item.name}
            colors={item.colors}
            playlist={musics.slice(50, 60)}
          />
        )}
      />


      <Section
        text="Friends Activites"
        items={musics.slice(60, 70)}
        slidesPerView={0}
        showSeeMoreBtn={true}
        showPrevNextBtn={false}
        className="mt-20"
        customDataContainer={(
          <div
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
          </div>
        )}
        renderer={(item: MusicOptions, index) => (
          <ContextMenu
            items={[
              {
                id: "play",
                icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
                title: "Play"
              },
              {
                id: "shuffle",
                icon: <BsShuffle className="w-5 h-5 fill-white" />,
                title: "Shuffle"
              },
              {
                id: "add-to-queue",
                icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
                title: "Add to Queue"
              },
              {
                isSeparator: true
              },
              {
                id: "follow",
                icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
                title: "Follow"
              },
              {
                id: "download",
                icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
                title: "Download"
              },
              { isSeparator: true },
              {
                id: "go-to-playlist",
                icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
                title: "Go to Playlist"
              },
              { isSeparator: true },
              {
                id: "open-in-win-app",
                icon: <AiFillWindows className="w-5 h-5 fill-white" />,
                title: "Open in Windows App"
              },
              {
                id: "share",
                icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
                title: "Share",
                items: [
                  {
                    id: "copy-playlist",
                    title: "Copy Playlist"
                  },
                  {
                    id: "copy-url",
                    title: "Copy NowListen URI"
                  }
                ]
              }
            ]}
          >
            <Card2
              key={item.id}
              id={item.id}
              song={item.url}
              title={item.name}
              colors={item.colors}
              start={(
                <div className="w-9">
                  <span className="text-xl font-medium text-white/30">{index + 1}</span>
                </div>
              )}
              img={item.img}
              subtitle={null}
            />
          </ContextMenu>
        )}
      />


      <Section
        text="Favorite Artists"
        items={musics.slice(30, 40)}
        slidesPerView={4}
        showPrevNextBtn={false}
        showSeeMoreBtn={false}
        className="mt-20"
        customDataContainer={(
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

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

      <div className="mt-20"></div>
      <Footer />

    </div>
  )
}

export default Dashboard