
import { musics } from "../../data/musics";
import { MusicOptions } from "../../types/MusicOptions";

interface getSingeSongDetailsProps {
    id: string;
}

interface getSingleSongDetailsOutPut extends MusicOptions { }

async function getSingleSongDetails({ id }: getSingeSongDetailsProps): Promise<getSingleSongDetailsOutPut | undefined> {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(musics.find(music => music.id === id))
        }, 400)
    })

    // const url = ""

    // const fetchOptions = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer your-token"
    //     },
    //     body: JSON.stringify({})
    // }

    // const res = await fetch(url, fetchOptions)

    // if(res.ok) {
    //     return await res.json()
    // }
    // else {
    //     throw new Error("something went wrong")
    // }
}

export {
    getSingleSongDetails
}

export type {
    getSingleSongDetailsOutPut
}