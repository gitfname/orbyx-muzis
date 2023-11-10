
import { Button } from "@chakra-ui/react"
import { ApplicationRoutes } from "../../routes"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Footer from "../../layout-components/Footer";
import { useEffect } from "react";


const TopBarLinks = [
    {
        id: "trendings",
        title: "Trending",
        link: ApplicationRoutes.pages.library.songs.trending
    },
    {
        id: "featured",
        title: "Featured",
        link: ApplicationRoutes.pages.library.songs.featured
    },
    {
        id: "popular",
        title: "Popular",
        link: ApplicationRoutes.pages.library.songs.popular
    },
    {
        id: "albums",
        title: "Albums",
        link: ApplicationRoutes.pages.library.songs.albums
    },
]

function SongsLibrary() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(
        () => {
            if (location.pathname === ApplicationRoutes.pages.library.songs.home) {
                navigate(ApplicationRoutes.pages.library.songs.trending)
            }
        },
        []
    )

    return (
        <div className="w-full h-full grid grid-rows-[3.6rem_calc(100%-3.6rem)]">

            {/* top bar */}
            <div className="bg-zinc-800 shadow-md shadow-black/10 flex items-center gap-x-2 px-4">
                {
                    TopBarLinks.map(link => (
                        <Button
                            onClick={() => navigate(link.link)}
                            key={link.id}
                            rounded="lg"
                            bgColor={location.pathname === link.link ? "red.600" : "whiteAlpha.100"}
                            color="whiteAlpha.900"
                            fontSize="sm"
                            fontWeight="normal"
                            _hover={{
                                bgColor: "red.700"
                            }}
                        >
                            {link.title}
                        </Button>
                    ))
                }
            </div>


            {/* main section */}
            <div className="overflow-y-auto p-4">
                <Outlet />

                <div className="mt-20"></div>
                <Footer />
            </div>

        </div>
    )
}

export default SongsLibrary