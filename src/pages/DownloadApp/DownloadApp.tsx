import { Button } from "@chakra-ui/react"
import { AiFillAndroid, AiFillApple, AiFillWindows } from "react-icons/ai"
import { ApplicationRoutes } from "../../routes"
import { Link } from "react-router-dom"

function DownloadApp() {
    return (
        <div className="w-full min-h-screen h-max bg-zinc-950">

            <div
                className="w-11/12 rounded-full border border-white/10 bg-white/5 px-8 py-3
            absolute top-5 left-1/2 -translate-x-1/2 flex flex-col max-md:items-center justify-center gap-y-3"
            >
                <Link
                    to={ApplicationRoutes.pages.home}
                    className="text-xl text-white font-medium"
                >
                    NowListen
                </Link>

                <div className="md:absolute left-1/2 top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center md:gap-x-4">
                    <Link
                        to={ApplicationRoutes.pages.home}
                        className="text-sm text-white font-medium p-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        Home
                    </Link>

                    <Link
                        to={ApplicationRoutes.pages.browse}
                        className="text-sm text-white font-medium p-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        Browse
                    </Link>

                    <Link
                        to={ApplicationRoutes.pages.songs}
                        className="text-sm text-white font-medium p-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        Songs
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center pt-44 md:pt-32">
                <p className="text-2xl sm:text-4xl font-semibold text-center text-white">
                    Download NowListen Apps
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-3 gap-y-8 mt-12">

                    <div className="flex flex-col items-center">
                        <Button
                            bgColor="white"
                            color="blackAlpha.800"
                            fontSize="sm"
                            leftIcon={<AiFillWindows className="w-5 h-5 fill-black" />}
                        >
                            Downlaod for Windows
                        </Button>
                        <p className="text-xs text-white/60 font-normal text-center mt-2">Windows 8 (64 bit) higher hie is required</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Button
                            bgColor="white"
                            color="blackAlpha.800"
                            fontSize="sm"
                            leftIcon={<AiFillApple className="w-5 h-5 fill-black" />}
                        >
                            Downlaod for MacOS
                        </Button>
                        <p className="text-xs text-white/60 font-normal text-center mt-2">macOS 10.9+ is required</p>
                    </div>

                    <div>
                        <Button
                            bgColor="white"
                            color="blackAlpha.800"
                            fontSize="sm"
                            leftIcon={<AiFillAndroid className="w-5 h-5 fill-black" />}
                        >
                            Downlaod for Android
                        </Button>
                    </div>

                    <div>
                        <Button
                            bgColor="white"
                            color="blackAlpha.800"
                            fontSize="sm"
                            leftIcon={<AiFillApple className="w-5 h-5 fill-black" />}
                        >
                            Downlaod for IOS
                        </Button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DownloadApp