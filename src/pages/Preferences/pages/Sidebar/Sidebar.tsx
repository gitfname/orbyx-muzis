
import { AiOutlineCheck } from "react-icons/ai"
import { SwitchCard } from "../../../../components"

function Sidebar() {
    return (
        <div>
            <p
                className="text-2xl font-medium text-white"
            >
                Sidebar
            </p>

            <div className="mt-8 flex flex-col gap-y-6">
                <div>
                    <p
                        className="text-sm font-medium text-white/90 uppercase mb-1.5"
                    >
                        playlists
                    </p>
                    <SwitchCard text="Show Playlist Images" />
                </div>

                <div>
                    <p
                        className="text-sm font-medium text-white/90 uppercase mb-1.5"
                    >
                        sort playlists by
                    </p>
                    <div className="space-y-1">
                        <SwitchCard
                            text="Playlist Type"
                            type="tick"
                        />
                        <SwitchCard
                            text="Name"
                            type="tick"
                        />
                        <SwitchCard
                            text="Recently Played"
                            type="tick"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar