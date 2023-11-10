import { SwitchCard } from "../../../../components"

function Playback() {
    return (
        <div>
            <p
                className="text-2xl font-medium text-white"
            >
                Playback
            </p>

            <div className="mt-8 flex flex-col gap-y-10">

                <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/95 uppercase">music stream quality</p>
                    <p className="text-sm font-normal text-white/50">
                        Normal streaming quality for MP3s and Podcasts is about 96kbs, and High is 256kbs
                    </p>

                    <div className="space-y-1 !mt-3">
                        <SwitchCard text="Normal" type="tick" />
                        <SwitchCard text="High" type="tick" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/95 uppercase">music download quality</p>
                    <p className="text-sm font-normal text-white/50">
                        Normal download quality for MP3s and Podcasts is about 96kbs, and High is 256kbs
                    </p>

                    <div className="space-y-1 !mt-3">
                        <SwitchCard text="Normal" type="tick" />
                        <SwitchCard text="High" type="tick" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/95 uppercase">video download quality</p>
                    <p className="text-sm font-normal text-white/50">
                        Normal download quality for downloaded Videos is about 720p, and High is 1080p
                    </p>

                    <div className="space-y-1 !mt-3">
                        <SwitchCard text="Normal" type="tick" />
                        <SwitchCard text="High" type="tick" />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/95 uppercase">now playing sidebar</p>
                    <p className="text-sm font-normal text-white/50">
                       When this is enabled, you will see the lyrics of the song while playing in the now playing sidebar.
                    </p>

                    <SwitchCard text="Synced lyrics" />
                </div>

                <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/95 uppercase">playlist</p>

                    <SwitchCard text="Add to Top of Playlist" />
                </div>

            </div>
        </div>
    )
}

export default Playback