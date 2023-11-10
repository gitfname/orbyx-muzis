
import { Button } from "@chakra-ui/react"
import Footer from "../../layout-components/Footer"
import getBaseUrl from "../../utils/base-url"
import { ContextMenu, MusicCard1, Section } from "../../components"
import { MusicOptions } from "../../types/MusicOptions"
import { musics } from "../../data/musics"
import { GiSettingsKnobs } from "react-icons/gi"
import { BsFillShareFill, BsThreeDots } from "react-icons/bs"
import { AiFillWindows } from "react-icons/ai"
import { useEditProfileModalStore } from "../../stores"
import { useNavigate } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"

function Me() {

    const setIsEditProfileModalOpen = useEditProfileModalStore(selector => selector.setIsOpen)
    const navigate = useNavigate()

    return (
        <div
            className="w-full min-h-full h-max p-4"
        >

            <img
                alt=""
                loading="lazy"
                src={getBaseUrl() + "/mr-taha.jpg"}
                className="w-64 h-64 object-center object-cover rounded-full block mx-auto"
            />

            <p className="text-3xl md:text-4xl text-white font-medium text-center mt-5">Taha Star</p>

            <div className="mt-5 flex flex-wrap items-center gap-3.5 justify-center">
                <span
                    className="text-xs text-white/60 font-normal"
                >
                    @tahadavari
                </span>

                <span
                    className="text-xs text-white/60 font-normal"
                >
                    89 Following
                </span>

                <span
                    className="text-xs text-white/60 font-normal"
                >
                    79K Followers
                </span>

                <span
                    className="text-xs text-white/60 font-normal"
                >
                    0 Playlists
                </span>
            </div>

            <div className="flex items-center gap-x-3 mt-7">
                <Button
                    onClick={() => setIsEditProfileModalOpen(true)}
                    bgColor="red.600"
                    color="whiteAlpha.900"
                    _hover={{
                        bgColor: "red.700"
                    }}
                    fontSize="sm"
                    fontWeight="normal"
                    rounded="full"
                    size='sm'
                    paddingInline="7"
                >
                    Edit Profile
                </Button>

                <Button
                    onClick={() => navigate(ApplicationRoutes.pages.preferences.myAccount)}
                    bgColor="whiteAlpha.200"
                    padding={0}
                    rounded="full"
                    _hover={{
                        bgColor: "whiteAlpha.300"
                    }}
                >
                    <GiSettingsKnobs className="w-4 h-4 fill-white" />
                </Button>

                <ContextMenu
                    menu={true}
                    context={true}
                    items={[
                        {
                            id: "view",
                            title: "View"
                        },
                        { isSeparator: true },
                        {
                            id: "open-in-desktopn-app",
                            title: "Open in Desktop App",
                            icon: <AiFillWindows className="w-4 h-4 fill-white" />
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
                    <Button
                        bgColor="whiteAlpha.200"
                        padding={0}
                        rounded="full"
                        _hover={{
                            bgColor: "whiteAlpha.300"
                        }}
                    >
                        <BsThreeDots className="w-4 h-4 fill-white" />
                    </Button>
                </ContextMenu>
            </div>

            <Section
                text="Artists"
                items={[...musics.slice(27, 29), musics[30], musics[40], musics[83], musics[85], musics[62], musics[87], musics[88], musics[54]]}
                slidesPerView={4}
                className="mt-12"
                showPrevNextBtn={false}
                showSeeMoreBtn={false}
                customDataContainer={(
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

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

export default Me