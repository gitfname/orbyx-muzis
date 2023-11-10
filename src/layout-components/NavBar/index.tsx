
// import { MobileMenu } from "../MobileMenu"
import { Button, Input } from "@chakra-ui/react"
import { MobileMenu } from "../MobileMenu"
import { useNavigate } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"
import { IoSettingsOutline } from "react-icons/io5"
import { ContextMenu, ProfileImageSmall } from "../../components"
import { BsCameraVideo, BsCloudDownload, BsFileEarmarkMusic, BsFillHeartFill, BsFillPlayFill, BsFillShareFill, BsMusicNote, BsShuffle } from "react-icons/bs"
import { HiOutlineMicrophone, HiOutlineQueueList } from "react-icons/hi2"
import { AiFillHome, AiFillWindows, AiOutlineDownload, AiOutlineStar } from "react-icons/ai"
import { PiBrowsersThin, PiPlaylistFill } from "react-icons/pi"
import getBaseUrl from "../../utils/base-url"
import { CiSearch } from "react-icons/ci"

function NavBar() {

    const navigate = useNavigate()

    return (
        <div className="w-full flex items-center justify-between px-4 md:px-8 h-full">

            <div className="lg:hidden">
                <MobileMenu
                    items={[
                        {
                            id: "mm-home",
                            text: "Home",
                            href: ApplicationRoutes.pages.home,
                            icon: <AiFillHome className="w-6 h-6 fill-inherit" />
                        },
                        {
                            id: "mm-browse",
                            text: "Browse",
                            href: ApplicationRoutes.pages.browse,
                            icon: <PiBrowsersThin className="w-6 h-6 fill-inherit" />
                        },
                        {
                            id: "mm-search",
                            text: "Search",
                            href: ApplicationRoutes.pages.search,
                            icon: <CiSearch className="w-6 h-6 fill-inherit" />
                        },
                        {
                            id: "mm-mymusics-section",
                            onlyText: true,
                            text: "My Musics"
                        },
                        {
                            id: "mm-songs",
                            text: "Songs",
                            href: ApplicationRoutes.pages.songs,
                            icon: <BsMusicNote className="w-5 h-5 fill-inherit" />
                        },
                        {
                            id: "mm-liked-songs",
                            text: "Liked Songs",
                            href: ApplicationRoutes.pages.likedSongs,
                            icon: <BsFillHeartFill className="w-5 h-5 fill-inherit" />
                        },
                        {
                            id: "mm-videos",
                            text: "Videos",
                            href: ApplicationRoutes.pages.videos,
                            icon: <BsCameraVideo className="w-5 h-5 fill-inherit" />
                        },
                        {
                            id: "mm-artists",
                            text: "Artists",
                            href: ApplicationRoutes.pages.artists,
                            icon: <HiOutlineMicrophone className="w-5 h-5 fill-inherit" />
                        },
                        {
                            id: "mm-albums",
                            text: "Albums",
                            href: ApplicationRoutes.pages.albums,
                            icon: <BsFileEarmarkMusic className="w-5 h-5 fill-inherit" />
                        },
                        {
                            id: "mm-download-app",
                            text: "Download App",
                            href: ApplicationRoutes.pages.downloadApp,
                            icon: <BsCloudDownload className="w-5 h-5 fill-inherit" />
                        },
                    ]}
                />
            </div>

            <Input
                placeholder="Search for Artists, Songs or Podcasts..."
                bgColor="whiteAlpha.200"
                rounded="lg"
                fontSize="sm"
                borderColor="whiteAlpha.300"
                maxWidth="md"
                color="whiteAlpha.800"
                className="max-sm:hidden"
            />

            <Button
                onClick={() => navigate(ApplicationRoutes.pages.settings)}
                bgColor="whiteAlpha.200"
                padding={0}
                _hover={{
                    bgColor: "whiteAlpha.300"
                }}
                _active={{
                    bgColor: "whiteAlpha.300"
                }}
                rounded="md"
            >
                <IoSettingsOutline className="w-5 h-5 stroke-white/90" />
            </Button>

            <ContextMenu
                context={true}
                menu={true}
                header={
                    <div
                        className="w-full h-16 p-2 mb-2 flex items-center gap-x-3 cursor-default"
                    >
                        <img
                            alt=""
                            src={getBaseUrl() + "/mr-taha.jpg"}
                            className="w-10 h-10 rounded-full object-center object-cover"
                        />
                        <div className="flex flex-col gap-y-0.5">
                            <span className="text-sm font-normal text-white">@tahadavari</span>
                            <span className="text-xs font-normal text-white/60">tahadavari1381@gmail.com</span>
                        </div>
                    </div>
                }
                items={[
                    {
                        id: "profile",
                        title: "Profile",
                        onClick: () => navigate(ApplicationRoutes.pages.me)
                    },
                    {
                        id: "prefrences",
                        title: "Prefrences",
                        onClick: () => navigate(ApplicationRoutes.pages.preferences.myAccount)
                    },
                    {
                        isSeparator: true
                    },
                    {
                        id: "download-app",
                        title: "Download App"
                    },
                    {
                        id: "audio-visualizer-settings",
                        title: "Visualizer Settings",
                        onClick: () => navigate(ApplicationRoutes.pages.settings)
                    },
                    {
                        isSeparator: true
                    },
                    {
                        id: "logout",
                        title: "Log out"
                    }
                ]}
            >
                <img
                    alt=""
                    src={getBaseUrl() + "/mr-taha.jpg"}
                    className="w-10 h-10 rounded-full object-center object-cover"
                />
            </ContextMenu>

        </div>
    )
}

export default NavBar