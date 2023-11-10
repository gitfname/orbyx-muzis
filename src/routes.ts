
export const ApplicationRoutes = {
    pages: {
        home: "/",
        browse: "/browse",
        search: "/search",
        songs: "/songs",
        likedSongs: "/liked-songs",
        videos: "/videos",
        artists: "/artists",
        albums: "/albums",
        downloadApp: "/download-app",
        singleSong: "/songs/:id",
        _singleSong: (id: string) => "/songs/"+id,
        login: "/auth/login",
        signup: "/auth/signup",
        forgotPassword: "/auth/recover",
        verifyEmail: "/auth/verify-email",
        library: {
            songs: {
                home: "/library/songs",
                trending: "/library/songs/trending",
                featured: "/library/songs/featured",
                popular: "/library/songs/popular",
                albums: "/library/songs/albums"
            },
            videos: {
                home: "/library/videos",
                trending: "/library/videos/trending",
                featured: "/library/videos/featured",
                popular: "/library/videos/popular",
                latest: "/library/videos/latest"
            }
        },
        adminPanel: {
            dashboard: "/dashboard"
        },
        preferences: {
            root: "/preferences",
            myAccount: "/preferences/my-account",
            appearance: "/preferences/appearance",
            sidebar: "/preferences/sidebar",
            playback: "/preferences/playback",
            storage: "/preferences/storage"
        },
        me: "/me",
        settings: "/settings"
    }
}