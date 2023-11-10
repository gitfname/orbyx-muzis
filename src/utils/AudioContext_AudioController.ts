

interface Opts {
    onLoaded?(): void;
}

class AudioContextAudioController {
    private audioContext: AudioContext;
    private sourceNode: AudioBufferSourceNode | null;
    private buffer: AudioBuffer | null;
    private gainNode: GainNode;
    private playedTimes: number;

    public currentTime: number;
    public duration: number;
    public audioFilePath: string;
    public isLoaded: boolean;
    public isLoading: boolean;
    public isPlaying: boolean;
    public isStoped: boolean;
    public onAudioLoaded: () => void;

    constructor(file: string, opts: Opts) {
        this.audioContext = new AudioContext();
        this.sourceNode = null;
        this.buffer = null;
        this.gainNode = this.audioContext.createGain()
        this.playedTimes = 0

        this.currentTime = 0;
        this.duration = 0;
        this.isLoaded = false
        this.isLoading = false
        this.isPlaying = false
        this.isStoped = false
        this.onAudioLoaded = opts.onLoaded

        this.audioFilePath = file

        this.fetchNewAudio(this.audioFilePath, false)
    }

    public play(): void {
        if (this.isPlaying) return
        if (this.playedTimes == 0) {
            this.sourceNode.start(0, this.currentTime);
            this.setIsPlaying(true)
            this.setIsStoped(false)
        }
        else {
            this.fetchNewAudio(this.audioFilePath, false)
            return
        }
        this.setPlayedTimes(this.playedTimes + 1)
    }

    public pause(): void {
        if (!this.isPlaying) return
        if (this.sourceNode) {
            this.currentTime = Number(this.audioContext.currentTime.toFixed(4));
            this.sourceNode.stop();
            this.setIsPlaying(false)
        }
    }

    public stop(): void {
        if (this.isStoped) return
        if (this.sourceNode) {
            this.sourceNode.stop();
            this.currentTime = 0;
            this.setIsStoped(true)
        }
    }

    private onLoaded() {
        this.onAudioLoaded?.()
    }

    private setIsLoaded(data: boolean): void {
        this.isLoaded = data
    }

    private setIsLoading(data: boolean): void {
        this.isLoading = data
    }

    private setIsPlaying(data: boolean): void {
        this.isPlaying = data
    }

    private setIsStoped(data: boolean): void {
        this.isStoped = data
        if(data) {
            this.setIsPlaying(false)
        }
    }

    private setPlayedTimes(value: number): void {
        this.playedTimes = value
    }

    public destroy() {
        this.sourceNode.disconnect()
        this.stop()
    }

    public goToPosition(second: number) {
        this.pause()
        this.currentTime = second
        this.fetchNewAudio(this.audioFilePath, false)
    }

    public fetchNewAudio(audioFile: string, shouldStop: boolean): void {
        this.setIsLoaded(false)
        this.setIsLoading(true)
        this.setPlayedTimes(0)

        if (shouldStop && this.sourceNode) {
            this.stop();
        }

        fetch(audioFile)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
            .then(decodedAudio => {
                this.setIsLoaded(true)
                this.setIsLoading(false)

                this.buffer = decodedAudio;
                this.duration = this.buffer.duration;

                this.sourceNode = this.audioContext.createBufferSource();
                this.sourceNode.buffer = this.buffer;
                this.sourceNode.connect(this.gainNode)
                this.gainNode.connect(this.audioContext.destination)

                this.onLoaded()
            })
            .catch(error => console.error('Error decoding audio:', error));
    }
}

export default AudioContextAudioController