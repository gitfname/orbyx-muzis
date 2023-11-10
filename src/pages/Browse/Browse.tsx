
import { PiPlaylistFill } from "react-icons/pi"
import { Card1, Card2, ContextMenu, Section } from "../../components"
import Footer from "../../layout-components/Footer"
import { BsCameraVideo, BsFillPlayFill, BsFillShareFill, BsHeart, BsMusicNote, BsShuffle } from "react-icons/bs"
import { HiOutlineMicrophone } from "react-icons/hi"
import { MusicOptions } from "../../types/MusicOptions"
import { musics } from "../../data/musics"
import { HiOutlineQueueList } from "react-icons/hi2"
import { AiFillWindows, AiOutlineDownload, AiOutlineStar } from "react-icons/ai"

// import {
//     NewVideos, Podcasts, Featured, NewAlbums
// } from "../../components/Sections/"

import { Suspense, lazy } from "react"

const NewVideos = lazy(() => import("../../components/Sections/NewVideos"))
const Podcasts = lazy(() => import("../../components/Sections/Podcasts"))
const Featured = lazy(() => import("../../components/Sections/Featured"))
const NewAlbums = lazy(() => import("../../components/Sections/NewAlbums"))


const categories = [
    {
        id: "cat-1",
        title: "New Music",
        img: <BsMusicNote className="w-5 h-5 fill-white" />
    },
    {
        id: "cat-2",
        title: "Music Videos",
        img: <BsCameraVideo className="w-5 h-5 fill-white" />
    },
    {
        id: "cat-3",
        title: "Latest Podcasts",
        img: <HiOutlineMicrophone className="w-5 h-5 fill-transparent stroke-white" />
    },
    {
        id: "cat-4",
        title: "Recommended for You",
        img: <BsHeart className="w-5 h-5 fill-white" />
    }
]

function Browse() {

    return (
        <div
            className="w-full h-max p-4 md:p-6"
        >
            <Section
                text=""
                items={categories}
                slidesPerView={2.3}
                showSeeMoreBtn={false}
                showPrevNextBtn={false}
                customDataContainer={(
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                    </div>
                )}
                renderer={(item) => (
                    <Card1
                        key={item.id}
                        id={item.id}
                        icon={item.img}
                        title={item.title}
                    />
                )}
            />


            {/* new videos */}
            <Suspense>
                <NewVideos />
            </Suspense>

            {/* top artists of this month */}
            <Section
                text="Top Artists of This Mongth"
                items={musics.slice(40, 52)}
                slidesPerView={0}
                showSeeMoreBtn={false}
                showPrevNextBtn={false}
                className="mt-16"
                customDataContainer={(
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
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

            {/* podcasts */}
            <Suspense>
                <Podcasts />
            </Suspense>

            {/* new albums */}
            <Suspense>
                <NewAlbums />
            </Suspense>

            {/* fetured musics */}
            <Suspense>
                <Featured />
            </Suspense>

            <div className="mt-20"></div>
            <Footer />

        </div>
    )
}

export default Browse