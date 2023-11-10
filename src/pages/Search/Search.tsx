import { BsMusicNote } from "react-icons/bs"
import { Section } from "../../components"


const categories = [
    {
        id: "cat-1",
        title: "PARTY",
        color: "party"
    },
    {
        id: "cat-2",
        title: "MOOD",
        color: "mood"
    },
    {
        id: "cat-3",
        title: "SUMMER",
        color: "summer"
    },
    {
        id: "cat-4",
        title: "POP",
        color: "pop"
    },
    {
        id: "cat-5",
        title: "TRENDING",
        color: "trending"
    },
    {
        id: "cat-6",
        title: "HIP HOP",
        color: "hip-hop"
    },
    {
        id: "cat-7",
        title: "CHILL",
        color: "chill"
    },
    {
        id: "cat-8",
        title: "GYM",
        color: "gym"
    },
    {
        id: "cat-9",
        title: "LOVE",
        color: "love"
    },
    {
        id: "cat-10",
        title: "FOOD",
        color: "food"
    },
    {
        id: "cat-11",
        title: "DECADES",
        color: "decades"
    },
    {
        id: "cat-12",
        title: "ARTISTS",
        color: "artists"
    },
    {
        id: "cat-13",
        title: "TREDITIONAL",
        color: "treditional"
    },
    {
        id: "cat-14",
        title: "FOCUS",
        color: "focus"
    },
    {
        id: "cat-15",
        title: "OCCASIONS",
        color: "occasions"
    },
    {
        id: "cat-16",
        title: "VIDEOS",
        color: "videos"
    }
]

function Search() {
    return (
        <div className="w-full h-max p-4 md:p-6">

            <Section
                text="Browse All"
                items={categories}
                slidesPerView={0}
                showSeeMoreBtn={false}
                showPrevNextBtn={false}
                customDataContainer={(
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                    </div>
                )}
                renderer={(item) => (
                    <div className={"aspect-video rounded-xl grid place-items-center " + item.color}>
                        <p className="text-xl font-medium text-white">{item.title}</p>
                    </div>
                )}
            />

        </div>
    )
}

export default Search