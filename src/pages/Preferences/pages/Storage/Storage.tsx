
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Storage() {
    return (
        <div>
            <p
                className="text-2xl font-medium text-white mb-8"
            >
                Storage
            </p>

            <div className="space-y-10">

                <div className='p-4 rounded-md bg-zinc-950 flex items-center gap-x-5'>
                    <div
                        className='w-40'
                    >
                        <CircularProgressbar
                            text='4%'
                            value={4}
                            strokeWidth={5}
                            styles={buildStyles({
                                textColor: "white",
                                trailColor: "rgba(255,255,255,0.05)",
                                pathColor: "rgba(255,255,255,0.45)"
                            })}
                        />
                    </div>

                    <div className='space-y-1'>
                        <p className='text-sm text-white/90 font-normal'>USAGE : 4GB</p>
                        <p className='text-sm text-white/90 font-normal'>QUOTA : 100GB</p>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/95 uppercase">history</p>
                    <button
                        className="appearance-none w-full block rounded-md bg-zinc-950 py-3.5 px-4 text-left hover:bg-zinc-800
                    transition-colors"
                    >
                        <p
                            className="text-sm text-white font-medium"
                        >
                            Clear Search History
                        </p>

                        <p
                            className="text-xs text-white/50 font-normal mt-1"
                        >
                            Clear Search History
                        </p>
                    </button>

                    <button
                        className="appearance-none w-full block rounded-md bg-zinc-950 py-3.5 px-4 text-left hover:bg-zinc-800
                    transition-colors"
                    >
                        <p
                            className="text-sm text-white font-medium"
                        >
                            Clear Recently Played
                        </p>

                        <p
                            className="text-xs text-white/50 font-normal mt-1"
                        >
                            Clear Recently Played History
                        </p>
                    </button>
                </div>


                <div className="space-y-1.5">
                    <p className="text-sm font-medium text-white/95 uppercase">my musics</p>
                    <button
                        className="appearance-none w-full block rounded-md bg-zinc-950 py-3.5 px-4 text-left hover:bg-zinc-800
                    transition-colors"
                    >
                        <p
                            className="text-sm text-white font-medium"
                        >
                            Delete All My Musics
                        </p>

                        <p
                            className="text-xs text-white/50 font-normal mt-1"
                        >
                            Delete everuthing in My Music ( this will also remove all of your downloaded musics )
                        </p>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Storage