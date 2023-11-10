
import { useBottomSongControllerStore } from "../../stores"
import { AudioControllerAudio } from "../../utils/AudioController"
import { toMMSS } from "../../utils/SeccondToMMSS"


function SongTime() {
    const currentTime = useBottomSongControllerStore(selector => selector.currentTime)
    const duration = useBottomSongControllerStore(selector => selector.duration)
    return (<div className="flex items-center">
        <p className="text-xs text-white/90 font-normal w-14 leading-none text-center">{toMMSS(parseInt(currentTime?.toFixed(0)))}</p>
        <input
            type="range"
            min={0}
            max={duration}
            value={parseInt(currentTime.toFixed(0))}
            className="custom-range"
            onChange={(e) => {
                if (AudioControllerAudio) AudioControllerAudio.currentTime = parseInt(e.target.value)
            }}
        />
        <p className="text-xs text-white/90 font-normal w-14 leading-none text-center">{toMMSS(parseInt(duration?.toFixed(0)))}</p>
    </div>)
}

export default SongTime