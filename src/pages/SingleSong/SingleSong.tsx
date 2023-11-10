import { useParams } from "react-router-dom"
import { useGetSingleSongDetails } from "../../hooks/api"
import { Card2, PlayPauseBtn, Section } from "../../components"
import { musics } from "../../data/musics"
import { MusicOptions } from "../../types/MusicOptions"
import Footer from "../../layout-components/Footer"
import { AiOutlineStar } from "react-icons/ai"
import { BsThreeDots } from "react-icons/bs"
import { Button } from "@chakra-ui/react"


function SingleSong() {

    const { id } = useParams()
    const { songDetails } = useGetSingleSongDetails({ id })

    return (
        <div
            className="w-full h-max min-h-full p-4"
        >

            <div
                className="w-full grid grid-cols-1 max-sm:place-items-center sm:grid-cols-[5fr_10fr] gap-8"
            >
                <img
                    alt=""
                    src={songDetails?.img}
                    className="w-full aspect-square object-center object-cover rounded-xl"
                />
                <div className="flex flex-col justify-center">
                    <p
                        className="text-2xl sm:text-4xl font-medium text-white"
                    >
                        {songDetails?.name}
                    </p>
                    <p
                        className="text-lg font-medium text-white/90 mt-2 max-sm:text-sm max-sm:text-white/50"
                    >
                        {songDetails?.pubDate}
                    </p>
                </div>
            </div>

            <div className="mt-12 flex items-center gap-x-2.5">
                {
                    songDetails
                        ?
                        <PlayPauseBtn
                            id={id}
                            colors={songDetails.colors}
                            img={songDetails.img}
                            name={songDetails.name}
                            song={songDetails.url}
                            className="!w-11 !h-11"
                            iconClassName="w-6 h-6"
                        />
                        :
                        null
                }
                <Button
                    bgColor="whiteAlpha.300"
                    _hover={{
                        bgColor: "whiteAlpha.400"
                    }}
                    rounded="full"
                    padding={0}
                    size="sm"
                    className="active:scale-95"
                >
                    <AiOutlineStar className="w-5 h-5 fill-white" />
                </Button>

                <Button
                    bgColor="whiteAlpha.300"
                    _hover={{
                        bgColor: "whiteAlpha.400"
                    }}
                    rounded="full"
                    padding={0}
                    size="sm"
                    className="active:scale-95"
                >
                    <BsThreeDots className="w-5 h-5 fill-white" />
                </Button>
            </div>

            <Section
                text="More"
                items={musics.slice(0, 8)}
                slidesPerView={0}
                showSeeMoreBtn={false}
                showPrevNextBtn={false}
                className="mt-16"
                customDataContainer={(
                    <div
                        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                    </div>
                )}
                renderer={(item: MusicOptions, index) => (
                    <Card2
                        key={item.id}
                        id={item.id}
                        title={item.name}
                        song={item.url}
                        colors={item.colors}
                        start={(
                            <div className="w-9">
                                <span className="text-xl font-medium text-white/30">{index + 1}</span>
                            </div>
                        )}
                        img={item.img}
                        subtitle={null}
                    />
                )}
            />

            <div className="mt-20"></div>
            <Footer />

        </div>
    )
}

export default SingleSong