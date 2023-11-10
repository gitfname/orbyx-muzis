

import { ComponentType, lazy, Suspense } from "react"
// import {
//   Recommended, Exclusive, Featured, HotTracks, MoreToExplore, PlayLists, RecentlyPlayed,
//   DJMixes, MoreMusic, MustListen, NewMusics
// } from "../../components/Sections"

const sleep = async (ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, ms);
  })
}

const delayedImport = (ms: number, path: string): Promise<{ default: ComponentType<any> }> => {
  return new Promise(async (resolve, reject) => {
    await sleep(ms)
    try {
      const module = await import(path)
      resolve({
        default: module.default
      })
    } catch (error) {
      reject()
    }
  })
}
const Recommended = lazy(() => import("../../components/Sections/Recommended"))
const Exclusive = lazy(() => import("../../components/Sections/Exclusive"))
const Featured = lazy(() => import("../../components/Sections/Featured"))
const HotTracks = lazy(() => import("../../components/Sections/HotTracks"))
const MoreToExplore = lazy(() => import("../../components/Sections/MoreToExplore"))
const PlayLists = lazy(() => import("../../components/Sections/PlayLists"))
const RecentlyPlayed = lazy(() => import("../../components/Sections/RcentlyPlayed"))
const DJMixes = lazy(() => import("../../components/Sections/DJMixes"))
const MoreMusic = lazy(() => import("../../components/Sections/MoreMusic"))
const MustListen = lazy(() => import("../../components/Sections/MustListen"))
const NewMusics = lazy(() => import("../../components/Sections/NewMusics"))

import Footer from "../../layout-components/Footer"

function HomePage() {

  return (
    <div className="w-full h-max p-4 md:p-6">
      {/* playlists */}
      <Suspense>
        <PlayLists />
      </Suspense>

      {/* recommended */}
      <Suspense>
        <Recommended />
      </Suspense>

      {
        import.meta.env.PROD
        &&
        <div className="my-12 w-full border border-red-400">
          <div id="pos-article-text-card-88416"></div>
        </div>
      }

      {/* featured */}
      <Suspense>
        <Featured />
      </Suspense>

      {/* RJ Exclusive */}
      <Suspense>
        <Exclusive />
      </Suspense>

      {/* HotTracks */}
      <Suspense>
        <HotTracks />
      </Suspense>

      {/* recently played */}
      <Suspense>
        <RecentlyPlayed />
      </Suspense>

      {/* more to explore */}
      <Suspense>
        <MoreToExplore />
      </Suspense>


      {/* new music */}
      <Suspense>
        <NewMusics />
      </Suspense>

      {/* must listen */}
      <Suspense>
        <MustListen />
      </Suspense>


      {/* DJ Mixes */}
      <Suspense>
        <DJMixes />
      </Suspense>

      {/* More Music */}
      <Suspense>
        <MoreMusic />
      </Suspense>

      <div className="mt-20"></div>
      <Footer />

    </div>
    // <div className="w-full h-max p-4 md:p-6">
    //   {/* playlists */}
    //   <Section
    //     text="PlayLists"
    //     items={musics.slice(50, 60)}
    //     slidesPerView={slidesPerView}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           showText={false}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text=""
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />

    //   {/* playlists */}
    //   <Section
    //     text="Recommended"
    //     items={musics.slice(0, 10)}
    //     slidesPerView={slidesPerView}
    //     className="mt-16"
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           showText={false}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text=""
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />

    //   <div className="my-12 w-full border border-red-400">
    //     <div id="pos-article-text-card-88416"></div>
    //   </div>

    //   {/* featured */}
    //   <Section
    //     className="mt-16"
    //     text="Featured"
    //     items={musics.slice(26, 31)}
    //     slidesPerView={2}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           imgClassName="aspect-[9/8]"
    //           id={item.id}
    //           showText={true}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={""}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />

    //   {/* RJ Exclusive */}
    //   <Section
    //     text="RJ Exclusive"
    //     items={musics.slice(10, 22)}
    //     className="mt-16"
    //     slidesPerView={slidesPerView}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           showText={true}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />

    //   {/* HotTracks */}
    //   <Section
    //     text="Hot Tracks"
    //     items={musics.slice(22, 30)}
    //     className="mt-16"
    //     slidesPerView={HotTracksSlidesPerView}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           imgClassName="aspect-[9/10]"
    //           showText={true}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />


    //   {/* recently played */}
    //   <Section
    //     text="Recently Played"
    //     items={musics.slice(30, 40)}
    //     className="mt-16"
    //     slidesPerView={HotTracksSlidesPerView}
    //     showSeeMoreBtn={false}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           showText={false}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />


    //   {/* more to explore */}
    //   <Section
    //     text="More to Explore"
    //     items={musics.slice(40, 52)}
    //     className="mt-16"
    //     slidesPerView={MoreToExploreSlidesPerView}
    //     showSeeMoreBtn={true}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           imgClassName="aspect-[9/11]"
    //           showText={false}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />

    //   {/* new music */}
    //   <Section
    //     text="New Music"
    //     items={musics.slice(52, 62)}
    //     className="mt-16"
    //     slidesPerView={MoreToExploreSlidesPerView}
    //     showSeeMoreBtn={true}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.url}
    //           showText={false}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />


    //   {/* must listen */}
    //   <Section
    //     text="Must Listen"
    //     items={musics.slice(62, 75)}
    //     className="mt-16"
    //     slidesPerView={MoreToExploreSlidesPerView}
    //     showSeeMoreBtn={true}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           imgClassName="aspect-[9/11]"
    //           showText={true}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />


    //   {/* DJ Mixes */}
    //   <Section
    //     text="DJ Mixes"
    //     items={musics.slice(75, 81)}
    //     className="mt-16"
    //     slidesPerView={MoreToExploreSlidesPerView}
    //     showSeeMoreBtn={true}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           imgClassName="aspect-[9/10]"
    //           showText={true}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />


    //   {/* More Music */}
    //   <Section
    //     text="More Music"
    //     items={musics.slice(82, 90)}
    //     className="mt-16"
    //     slidesPerView={MoreToExploreSlidesPerView}
    //     showSeeMoreBtn={true}
    //     renderer={(item: MusicOptions) => (
    //       <ContextMenu
    //         items={[
    //           {
    //             id: "play",
    //             icon: <BsFillPlayFill className="w-5 h-5 fill-white" />,
    //             title: "Play"
    //           },
    //           {
    //             id: "shuffle",
    //             icon: <BsShuffle className="w-5 h-5 fill-white" />,
    //             title: "Shuffle"
    //           },
    //           {
    //             id: "add-to-queue",
    //             icon: <HiOutlineQueueList className="w-5 h-5 stroke-white" />,
    //             title: "Add to Queue"
    //           },
    //           {
    //             isSeparator: true
    //           },
    //           {
    //             id: "follow",
    //             icon: <AiOutlineStar className="w-5 h-5 fill-white" />,
    //             title: "Follow"
    //           },
    //           {
    //             id: "download",
    //             icon: <AiOutlineDownload className="w-5 h-5 fill-white" />,
    //             title: "Download"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "go-to-playlist",
    //             icon: <PiPlaylistFill className="w-5 h-5 fill-white" />,
    //             title: "Go to Playlist"
    //           },
    //           { isSeparator: true },
    //           {
    //             id: "open-in-win-app",
    //             icon: <AiFillWindows className="w-5 h-5 fill-white" />,
    //             title: "Open in Windows App"
    //           },
    //           {
    //             id: "share",
    //             icon: <BsFillShareFill className="w-3.5 h-3.5 fill-white" />,
    //             title: "Share",
    //             items: [
    //               {
    //                 id: "copy-playlist",
    //                 title: "Copy Playlist"
    //               },
    //               {
    //                 id: "copy-url",
    //                 title: "Copy NowListen URI"
    //               }
    //             ]
    //           }
    //         ]}
    //       >
    //         <MusicCard1
    //           id={item.id}
    //           imgClassName="aspect-[9/10]"
    //           showText={true}
    //           icon={<PiPlaylist className="w-5 h-5 fill-white" />}
    //           img={item.img}
    //           song={item.url}
    //           stared={false}
    //           text={item.name}
    //           title={item.name}
    //           colors={item.colors}
    //         />
    //       </ContextMenu>
    //     )}
    //   />

    //   <div className="mt-20"></div>
    //   <Footer />

    // </div>
  )
}

export default HomePage