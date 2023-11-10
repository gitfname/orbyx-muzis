
import { ReactNode } from "react"
import { SidebarNavLink } from "../components";

// icon
import { AiFillHome } from "react-icons/ai"
import { PiBrowsersThin } from "react-icons/pi"
import { CiSearch } from "react-icons/ci"
import { BsCameraVideo, BsCloudDownload, BsFileEarmarkMusic, BsFillHeartFill, BsMusicNote } from "react-icons/bs"
import { HiOutlineMicrophone } from "react-icons/hi"
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "../routes";


interface Props {
    children: ReactNode;
}

function BaseLayout({ children }: Props) {
    return (
        <div onContextMenu={e => e.preventDefault()} className="w-full h-full grid grid-cols-1 lg:grid-cols-[3fr_10fr] overflow-hidden">

            {/* sidebar */}
            <div className="bg-zinc-950 grid grid-cols-1 grid-rows-[4rem_1fr] overflow-y-auto max-lg:hidden">

                <div className="border-b border-b-white/10 grid place-items-center">
                    <Link
                        to={ApplicationRoutes.pages.home}
                        className="text-2xl text-white font-medium"
                    >
                        NowListen
                    </Link>
                </div>

                <div className="overflow-y-auto h-max p-2 flex flex-col gap-y-0.5">
                    <SidebarNavLink
                        href={ApplicationRoutes.pages.home}
                        icon={<AiFillHome className="w-6 h-6 fill-inherit" />}
                        text="Home"
                    />

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.browse}
                        icon={<PiBrowsersThin className="w-6 h-6 fill-inherit" />}
                        text="Browse"
                    />

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.search}
                        icon={<CiSearch className="w-6 h-6 fill-inherit" />}
                        text="Search"
                    />


                    <p className="text-sm text-white/50 font-normal mt-4 mb-2">My Musics</p>

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.songs}
                        icon={<BsMusicNote className="w-5 h-5 fill-inherit" />}
                        text="Songs"
                    />

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.likedSongs}
                        icon={<BsFillHeartFill className="w-5 h-5 fill-inherit" />}
                        text="Liked Songs"
                    />

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.videos}
                        icon={<BsCameraVideo className="w-5 h-5 fill-inherit" />}
                        text="Videos"
                    />

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.artists}
                        icon={<HiOutlineMicrophone className="w-5 h-5 fill-inherit" />}
                        text="Artists"
                    />

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.albums}
                        icon={<BsFileEarmarkMusic className="w-5 h-5 fill-inherit" />}
                        text="Albums"
                    />

                    <SidebarNavLink
                        href={ApplicationRoutes.pages.downloadApp}
                        icon={<BsCloudDownload className="w-5 h-5 fill-inherit" />}
                        text="Download App"
                    />

                    {
                        import.meta.env.PROD
                        &&
                        <div
                            className="w-full border-2 border-red-500 mt-8"
                        >
                            <div id="pos-article-display-88412"></div>
                        </div>
                    }
                </div>

            </div>

            {/* main section */}
            <div className="overflow-y-auto">
                {children}
            </div>

        </div>
    )
}

export default BaseLayout