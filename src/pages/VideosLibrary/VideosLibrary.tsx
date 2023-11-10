
import { Button } from "@chakra-ui/react"
import { ApplicationRoutes } from "../../routes"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Footer from "../../layout-components/Footer";
import { useEffect } from "react";


const TopBarLinks = [
    {
        id: "trendings",
        title: "Trending",
        link: ApplicationRoutes.pages.library.videos.trending
    },
    {
        id: "featured",
        title: "Featured",
        link: ApplicationRoutes.pages.library.videos.featured
    },
    {
        id: "popular",
        title: "Popular",
        link: ApplicationRoutes.pages.library.videos.popular
    },
    {
        id: "latest",
        title: "Latest",
        link: ApplicationRoutes.pages.library.videos.latest
    },
]

function VideosLibrary() {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(
        () => {
            if (location.pathname === ApplicationRoutes.pages.library.videos.home) {
                navigate(ApplicationRoutes.pages.library.videos.trending)
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

export default VideosLibrary