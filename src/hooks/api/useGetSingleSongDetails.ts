
import useSWR from "swr"
import { getSingleSongDetails } from "../../services/api";

interface Props {
    id: string;
}

function useGetSingleSongDetails({ id }: Props) {
    const {
        data, error, isLoading, isValidating, mutate
    } = useSWR(
        "/songs/" + id,
        async () => await getSingleSongDetails({ id }),
        {
            shouldRetryOnError: false,
            errorRetryCount: 0,
            revalidateOnFocus: false
        }
    )

    return {
        songDetails: data,
        songDetailsError: error,
        isSongDetailsLoading: isLoading,
        isSongDetailsValidating: isValidating,
        mutateSongDetails: mutate
    }
}

export default useGetSingleSongDetails