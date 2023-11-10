
import { MusicOptions } from "../types/MusicOptions";
import getBaseUrl from "../utils/base-url";
import { useWhichImagesStore } from "../stores";

const musics: Array<MusicOptions> = [
    {
        "id": "music-1",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/1.jpg",
        "name": "music-1",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_1.mp3",
        "colors": [
            "#a90622",
            "#e0695e"
        ]
    },
    {
        "id": "music-2",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/2.jpg",
        "name": "music-2",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_2.mp3",
        "colors": [
            "#9eaab8",
            "#f8fcfd"
        ]
    },
    {
        "id": "music-3",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/3.jpg",
        "name": "music-3",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_3.mp3",
        "colors": [
            "#c02493",
            "#f89bf8"
        ]
    },
    {
        "id": "music-4",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/4.jpg",
        "name": "music-4",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_4.mp3",
        "colors": [
            "#d1b68f",
            "#7e695a"
        ]
    },
    {
        "id": "music-5",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/5.jpg",
        "name": "music-5",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_5.mp3",
        "colors": [
            "#ff100b",
            "#f8c806"
        ]
    },
    {
        "id": "music-6",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/6.jpg",
        "name": "music-6",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_6.mp3",
        "colors": [
            "#10e1f2",
            "#c210a3"
        ]
    },
    {
        "id": "music-7",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/7.jpg",
        "name": "music-7",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_7.mp3",
        "colors": [
            "#d002ca",
            "#d28d2c"
        ]
    },
    {
        "id": "music-8",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/8.jpg",
        "name": "music-8",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_8.mp3",
        "colors": [
            "#ebeaf3",
            "#6c6d69"
        ]
    },
    {
        "id": "music-9",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/9.jpg",
        "name": "music-9",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_9.mp3",
        "colors": [
            "#d7cbbd",
            "#523f3b"
        ]
    },
    {
        "id": "music-10",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/10.jpg",
        "name": "music-10",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_10.mp3",
        "colors": [
            "#bfbfbf",
            "#808080"
        ]
    },
    {
        "id": "music-11",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/11.jpg",
        "name": "music-11",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_11.mp3",
        "colors": [
            "#f0f0f0",
            "#aeaeae"
        ]
    },
    {
        "id": "music-12",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/12.jpg",
        "name": "music-12",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_12.mp3",
        "colors": [
            "#85a4b5",
            "#43576b"
        ]
    },
    {
        "id": "music-13",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/13.jpg",
        "name": "music-13",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_13.mp3",
        "colors": [
            "#0092d7",
            "#bf145a"
        ]
    },
    {
        "id": "music-14",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/14.jpg",
        "name": "music-14",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_14.mp3",
        "colors": [
            "#00b9e2",
            "#e5dc3d"
        ]
    },
    {
        "id": "music-15",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/15.jpg",
        "name": "music-15",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_15.mp3",
        "colors": [
            "#43ace6",
            "#f5ed83"
        ]
    },
    {
        "id": "music-16",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/16.jpg",
        "name": "music-16",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_16.mp3",
        "colors": [
            "#ec4228",
            "#80103f"
        ]
    },
    {
        "id": "music-17",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/17.jpg",
        "name": "music-17",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_17.mp3",
        "colors": [
            "#9f9c97",
            "#645d57"
        ]
    },
    {
        "id": "music-18",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/18.jpg",
        "name": "music-18",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_18.mp3",
        "colors": [
            "#e34f60",
            "#60a2ee"
        ]
    },
    {
        "id": "music-19",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/19.jpg",
        "name": "music-19",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_19.mp3",
        "colors": [
            "#dbcbaa",
            "#728089"
        ]
    },
    {
        "id": "music-20",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/20.jpg",
        "name": "music-20",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_20.mp3",
        "colors": [
            "#d07252",
            "#566173"
        ]
    },
    {
        "id": "music-21",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/21.jpg",
        "name": "music-21",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_21.mp3",
        "colors": [
            "#9649ca",
            "#7da4f9"
        ]
    },
    {
        "id": "music-22",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/22.jpg",
        "name": "music-22",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_22.mp3",
        "colors": [
            "#c7372e",
            "#96a5b8"
        ]
    },
    {
        "id": "music-23",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/23.jpg",
        "name": "music-23",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_23.mp3",
        "colors": [
            "#344ea1",
            "#a1b1c8"
        ]
    },
    {
        "id": "music-24",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/24.jpg",
        "name": "music-24",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_24.mp3",
        "colors": [
            "#fc5006",
            "#50fffa"
        ]
    },
    {
        "id": "music-25",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/25.jpg",
        "name": "music-25",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_25.mp3",
        "colors": [
            "#544a3f",
            "#bbb5a9"
        ]
    },
    {
        "id": "music-26",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/26.jpg",
        "name": "music-26",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_26.mp3",
        "colors": [
            "#b0171e",
            "#c0c0c0"
        ]
    },
    {
        "id": "music-27",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/27.jpg",
        "name": "music-27",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_27.mp3",
        "colors": [
            "#f1b690",
            "#b37556"
        ]
    },
    {
        "id": "music-28",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/28.jpg",
        "name": "music-28",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_28.mp3",
        "colors": [
            "#898f8d",
            "#d1d3d0"
        ]
    },
    {
        "id": "music-29",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/70.jpg",
        "name": "music-29",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_29.mp3",
        "colors": [
            "#fcb702",
            "#fe0406"
        ]
    },
    {
        "id": "music-30",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/30.jpg",
        "name": "music-30",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_30.mp3",
        "colors": [
            "#f6e8d2",
            "#819191"
        ]
    },
    {
        "id": "music-31",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/31.jpg",
        "name": "music-31",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_31.mp3",
        "colors": [
            "#0295eb",
            "#e50d8c"
        ]
    },
    {
        "id": "music-32",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/32.jpg",
        "name": "music-32",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_32.mp3",
        "colors": [
            "#868b91",
            "#4c4f56"
        ]
    },
    {
        "id": "music-33",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/33.jpg",
        "name": "music-33",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_33.mp3",
        "colors": [
            "#91c9ec",
            "#b785a8"
        ]
    },
    {
        "id": "music-34",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/34.jpg",
        "name": "music-34",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_34.mp3",
        "colors": [
            "#d93852",
            "#767087"
        ]
    },
    {
        "id": "music-35",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/35.jpg",
        "name": "music-35",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_35.mp3",
        "colors": [
            "#505050",
            "#b2b2b2"
        ]
    },
    {
        "id": "music-36",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/36.jpg",
        "name": "music-36",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_36.mp3",
        "colors": [
            "#fc326a",
            "#820c26"
        ]
    },
    {
        "id": "music-37",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/37.jpg",
        "name": "music-37",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_37.mp3",
        "colors": [
            "#02c9ff",
            "#06ee6f"
        ]
    },
    {
        "id": "music-38",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/38.jpg",
        "name": "music-38",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_38.mp3",
        "colors": [
            "#d6d6d6",
            "#6b6b6b"
        ]
    },
    {
        "id": "music-39",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/39.jpg",
        "name": "music-39",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_39.mp3",
        "colors": [
            "#06dbcd",
            "#f22a77"
        ]
    },
    {
        "id": "music-40",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/40.jpg",
        "name": "music-40",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_40.mp3",
        "colors": [
            "#385460",
            "#848790"
        ]
    },
    {
        "id": "music-41",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/41.jpg",
        "name": "music-41",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_41.mp3",
        "colors": [
            "#ea9415",
            "#f2e1c3"
        ]
    },
    {
        "id": "music-42",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/42.jpg",
        "name": "music-42",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_42.mp3",
        "colors": [
            "#f8fdf7",
            "#8b8e89"
        ]
    },
    {
        "id": "music-43",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/43.jpg",
        "name": "music-43",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_43.mp3",
        "colors": [
            "#18f0be",
            "#c035c8"
        ]
    },
    {
        "id": "music-44",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/44.jpg",
        "name": "music-44",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_44.mp3",
        "colors": [
            "#c1e0f3",
            "#83a0b2"
        ]
    },
    {
        "id": "music-45",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/45.jpg",
        "name": "music-45",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_45.mp3",
        "colors": [
            "#d5d844",
            "#b24846"
        ]
    },
    {
        "id": "music-46",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/46.jpg",
        "name": "music-46",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_46.mp3",
        "colors": [
            "#fc2b89",
            "#b97428"
        ]
    },
    {
        "id": "music-47",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/47.jpg",
        "name": "music-47",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_47.mp3",
        "colors": [
            "#d30073",
            "#fa64c8"
        ]
    },
    {
        "id": "music-48",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/48.jpg",
        "name": "music-48",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_48.mp3",
        "colors": [
            "#fb6468",
            "#92181b"
        ]
    },
    {
        "id": "music-49",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/49.jpg",
        "name": "music-49",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_49.mp3",
        "colors": [
            "#2935cf",
            "#f6866f"
        ]
    },
    {
        "id": "music-50",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/50.jpg",
        "name": "music-50",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_50.mp3",
        "colors": [
            "#c3edf5",
            "#66576a"
        ]
    },
    {
        "id": "music-51",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/51.jpg",
        "name": "music-51",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_51.mp3",
        "colors": [
            "#929598",
            "#d8dadb"
        ]
    },
    {
        "id": "music-52",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/52.jpg",
        "name": "music-52",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_52.mp3",
        "colors": [
            "#757a80",
            "#3c3f46"
        ]
    },
    {
        "id": "music-53",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/53.jpg",
        "name": "music-53",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_53.mp3",
        "colors": [
            "#b81c1f",
            "#646462"
        ]
    },
    {
        "id": "music-54",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/54.jpg",
        "name": "music-54",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_54.mp3",
        "colors": [
            "#404040",
            "#a5a5a5"
        ]
    },
    {
        "id": "music-55",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/55.jpg",
        "name": "music-55",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_55.mp3",
        "colors": [
            "#c09057",
            "#fefccc"
        ]
    },
    {
        "id": "music-56",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/56.jpg",
        "name": "music-56",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_56.mp3",
        "colors": [
            "#da2d1c",
            "#ff9971"
        ]
    },
    {
        "id": "music-57",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/57.jpg",
        "name": "music-57",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_57.mp3",
        "colors": [
            "#0a0a0a",
            "#4c4d47"
        ]
    },
    {
        "id": "music-58",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/58.jpg",
        "name": "music-58",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_58.mp3",
        "colors": [
            "#01d1cf",
            "#7415fd"
        ]
    },
    {
        "id": "music-59",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/59.jpg",
        "name": "music-59",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_59.mp3",
        "colors": [
            "#a3b2c1",
            "#535760"
        ]
    },
    {
        "id": "music-60",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/60.jpg",
        "name": "music-60",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_60.mp3",
        "colors": [
            "#929292",
            "#ffffff"
        ]
    },
    {
        "id": "music-61",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/61.jpg",
        "name": "music-61",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_61.mp3",
        "colors": [
            "#c21429",
            "#97736b"
        ]
    },
    {
        "id": "music-62",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/62.jpg",
        "name": "music-62",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_62.mp3",
        "colors": [
            "#929292",
            "#ffffff"
        ]
    },
    {
        "id": "music-63",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/63.jpg",
        "name": "music-63",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_63.mp3",
        "colors": [
            "#53637c",
            "#e6ecec"
        ]
    },
    {
        "id": "music-64",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/64.jpg",
        "name": "music-64",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_64.mp3",
        "colors": [
            "#c33218",
            "#f0b059"
        ]
    },
    {
        "id": "music-65",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/65.jpg",
        "name": "music-65",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_65.mp3",
        "colors": [
            "#f68331",
            "#b03f05"
        ]
    },
    {
        "id": "music-66",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/66.jpg",
        "name": "music-66",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_66.mp3",
        "colors": [
            "#90e493",
            "#32b5bd"
        ]
    },
    {
        "id": "music-67",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/67.jpg",
        "name": "music-67",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_67.mp3",
        "colors": [
            "#f3d202",
            "#e00108"
        ]
    },
    {
        "id": "music-68",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/68.jpg",
        "name": "music-68",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_68.mp3",
        "colors": [
            "#c7c7c7",
            "#818181"
        ]
    },
    {
        "id": "music-69",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/69.jpg",
        "name": "music-69",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_69.mp3",
        "colors": [
            "#685243",
            "#af9b8e"
        ]
    },
    {
        "id": "music-70",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/28.jpg",
        "name": "music-70",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_70.mp3",
        "colors": [
            "#5b0cea",
            "#db016b"
        ]
    },
    {
        "id": "music-71",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/71.jpg",
        "name": "music-71",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_71.mp3",
        "colors": [
            "#c4b6b9",
            "#444042"
        ]
    },
    {
        "id": "music-72",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/72.jpg",
        "name": "music-72",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_72.mp3",
        "colors": [
            "#dcd8d7",
            "#4d4745"
        ]
    },
    {
        "id": "music-73",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/73.jpg",
        "name": "music-73",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_73.mp3",
        "colors": [
            "#9615ba",
            "#555ee8"
        ]
    },
    {
        "id": "music-74",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/74.jpg",
        "name": "music-74",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_74.mp3",
        "colors": [
            "#dd967a",
            "#836555"
        ]
    },
    {
        "id": "music-75",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/75.jpg",
        "name": "music-75",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_75.mp3",
        "colors": [
            "#6a01c4",
            "#cd3bf1"
        ]
    },
    {
        "id": "music-76",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/76.jpg",
        "name": "music-76",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_76.mp3",
        "colors": [
            "#9310b6",
            "#5e5aed"
        ]
    },
    {
        "id": "music-77",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/77.jpg",
        "name": "music-77",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_77.mp3",
        "colors": [
            "#02aae5",
            "#2456ab"
        ]
    },
    {
        "id": "music-78",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/78.jpg",
        "name": "music-78",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_78.mp3",
        "colors": [
            "#e5ae36",
            "#124374"
        ]
    },
    {
        "id": "music-79",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/79.jpg",
        "name": "music-79",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_79.mp3",
        "colors": [
            "#9210e3",
            "#1b78c1"
        ]
    },
    {
        "id": "music-80",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/80.jpg",
        "name": "music-80",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_80.mp3",
        "colors": [
            "#c03276",
            "#d1d0d4"
        ]
    },
    {
        "id": "music-81",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/81.jpg",
        "name": "music-81",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_81.mp3",
        "colors": [
            "#b89b2b",
            "#9f9c95"
        ]
    },
    {
        "id": "music-82",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/82.jpg",
        "name": "music-82",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_82.mp3",
        "colors": [
            "#b38176",
            "#dad7de"
        ]
    },
    {
        "id": "music-83",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/83.jpg",
        "name": "music-83",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_83.mp3",
        "colors": [
            "#b83d2b",
            "#fcb687"
        ]
    },
    {
        "id": "music-84",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/84.jpg",
        "name": "music-84",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_84.mp3",
        "colors": [
            "#51e2f9",
            "#178ecb"
        ]
    },
    {
        "id": "music-85",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/85.jpg",
        "name": "music-85",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_85.mp3",
        "colors": [
            "#00daee",
            "#ae00c8"
        ]
    },
    {
        "id": "music-86",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/86.jpg",
        "name": "music-86",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_86.mp3",
        "colors": [
            "#b09489",
            "#e0d6c8"
        ]
    },
    {
        "id": "music-87",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/87.jpg",
        "name": "music-87",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_87.mp3",
        "colors": [
            "#725ea2",
            "#372262"
        ]
    },
    {
        "id": "music-88",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/88.jpg",
        "name": "music-88",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_88.mp3",
        "colors": [
            "#fd0c99",
            "#0e65de"
        ]
    },
    {
        "id": "music-89",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/89.jpg",
        "name": "music-89",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_89.mp3",
        "colors": [
            "#7d7d7d",
            "#3c3c3c"
        ]
    },
    {
        "id": "music-90",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/90.jpg",
        "name": "music-90",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_90.mp3",
        "colors": [
            "#f80002",
            "#f59297"
        ]
    },
    {
        "id": "music-91",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/91.jpg",
        "name": "music-91",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_91.mp3",
        "colors": [
            "#f4f4f4",
            "#b9b9b9"
        ]
    },
    {
        "id": "music-92",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/92.jpg",
        "name": "music-92",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_92.mp3",
        "colors": [
            "#d71061",
            "#d493a5"
        ]
    },
    {
        "id": "music-93",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/93.jpg",
        "name": "music-93",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_93.mp3",
        "colors": [
            "#ea9d40",
            "#96c6e0"
        ]
    },
    {
        "id": "music-94",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/94.jpg",
        "name": "music-94",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_94.mp3",
        "colors": [
            "#19bdd8",
            "#70f8f8"
        ]
    },
    {
        "id": "music-95",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/95.jpg",
        "name": "music-95",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_95.mp3",
        "colors": [
            "#708097",
            "#3b4658"
        ]
    },
    {
        "id": "music-96",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/96.jpg",
        "name": "music-96",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_96.mp3",
        "colors": [
            "#76e109",
            "#97005f"
        ]
    },
    {
        "id": "music-97",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/97.jpg",
        "name": "music-97",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_97.mp3",
        "colors": [
            "#58a4eb",
            "#ff82ee"
        ]
    },
    {
        "id": "music-98",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/98.jpg",
        "name": "music-98",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_98.mp3",
        "colors": [
            "#602c36",
            "#d2f2fd"
        ]
    },
    {
        "id": "music-99",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/99.jpg",
        "name": "music-99",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_99.mp3",
        "colors": [
            "#20c4b3",
            "#6efcef"
        ]
    },
    {
        "id": "music-100",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/100.jpg",
        "name": "music-100",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_100.mp3",
        "colors": [
            "#f62396",
            "#a20949"
        ]
    },
    {
        "id": "music-101",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/101.jpg",
        "name": "music-101",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_101.mp3",
        "colors": [
            "#4692ff",
            "#031a9a"
        ]
    },
    {
        "id": "music-102",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/102.jpg",
        "name": "music-102",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_102.mp3",
        "colors": [
            "#22e2e0",
            "#008796"
        ]
    },
    {
        "id": "music-103",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/103.jpg",
        "name": "music-103",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_103.mp3",
        "colors": [
            "#08c1be",
            "#e0a380"
        ]
    },
    {
        "id": "music-104",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/104.jpg",
        "name": "music-104",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_104.mp3",
        "colors": [
            "#ff7a3f",
            "#a23b1c"
        ]
    },
    {
        "id": "music-105",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/105.jpg",
        "name": "music-105",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_105.mp3",
        "colors": [
            "#e1e1e1",
            "#a1a1a1"
        ]
    },
    {
        "id": "music-106",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/106.jpg",
        "name": "music-106",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_106.mp3",
        "colors": [
            "#8b8c94",
            "#494c53"
        ]
    },
    {
        "id": "music-107",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/107.jpg",
        "name": "music-107",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_107.mp3",
        "colors": [
            "#878a83",
            "#c0c1c4"
        ]
    },
    {
        "id": "music-108",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/108.jpg",
        "name": "music-108",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_108.mp3",
        "colors": [
            "#a31f30",
            "#9d8d80"
        ]
    },
    {
        "id": "music-109",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/109.jpg",
        "name": "music-109",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_109.mp3",
        "colors": [
            "#f8cd19",
            "#fa3a38"
        ]
    },
    {
        "id": "music-110",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/110.jpg",
        "name": "music-110",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_110.mp3",
        "colors": [
            "#d5491c",
            "#78858c"
        ]
    },
    {
        "id": "music-111",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/111.jpg",
        "name": "music-111",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_111.mp3",
        "colors": [
            "#90939a",
            "#4b4b4b"
        ]
    },
    {
        "id": "music-112",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/112.jpg",
        "name": "music-112",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_112.mp3",
        "colors": [
            "#f98c49",
            "#62b6da"
        ]
    },
    {
        "id": "music-113",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/113.jpg",
        "name": "music-113",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_113.mp3",
        "colors": [
            "#a22824",
            "#d0d1cc"
        ]
    },
    {
        "id": "music-114",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/114.jpg",
        "name": "music-114",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_114.mp3",
        "colors": [
            "#c7c5c4",
            "#888685"
        ]
    },
    {
        "id": "music-115",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/115.jpg",
        "name": "music-115",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_115.mp3",
        "colors": [
            "#d83c28",
            "#a08a76"
        ]
    },
    {
        "id": "music-116",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/116.jpg",
        "name": "music-116",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_116.mp3",
        "colors": [
            "#e32948",
            "#ff9f85"
        ]
    },
    {
        "id": "music-117",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/117.jpg",
        "name": "music-117",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_117.mp3",
        "colors": [
            "#494c4f",
            "#a8a3a7"
        ]
    },
    {
        "id": "music-118",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/118.jpg",
        "name": "music-118",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_118.mp3",
        "colors": [
            "#fc4e56",
            "#105477"
        ]
    },
    {
        "id": "music-119",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/119.jpg",
        "name": "music-119",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_119.mp3",
        "colors": [
            "#e51400",
            "#e9efda"
        ]
    },
    {
        "id": "music-120",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/120.jpg",
        "name": "music-120",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_120.mp3",
        "colors": [
            "#cacaca",
            "#909090"
        ]
    },
    {
        "id": "music-121",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/121.jpg",
        "name": "music-121",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_121.mp3",
        "colors": [
            "#b060fb",
            "#240ebb"
        ]
    },
    {
        "id": "music-122",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/122.jpg",
        "name": "music-122",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_122.mp3",
        "colors": [
            "#b12275",
            "#f17dd9"
        ]
    },
    {
        "id": "music-123",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/123.jpg",
        "name": "music-123",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_123.mp3",
        "colors": [
            "#942d5e",
            "#c875ab"
        ]
    },
    {
        "id": "music-124",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/124.jpg",
        "name": "music-124",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_124.mp3",
        "colors": [
            "#ea12de",
            "#30b6f3"
        ]
    },
    {
        "id": "music-125",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/125.jpg",
        "name": "music-125",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_125.mp3",
        "colors": [
            "#43566a",
            "#7196b5"
        ]
    },
    {
        "id": "music-126",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/126.jpg",
        "name": "music-126",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_126.mp3",
        "colors": [
            "#adb7c4",
            "#e0f2ff"
        ]
    },
    {
        "id": "music-127",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/127.jpg",
        "name": "music-127",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_127.mp3",
        "colors": [
            "#d11410",
            "#e0786d"
        ]
    },
    {
        "id": "music-128",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/128.jpg",
        "name": "music-128",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_128.mp3",
        "colors": [
            "#9a8073",
            "#3d433f"
        ]
    },
    {
        "id": "music-129",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/129.jpg",
        "name": "music-129",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_129.mp3",
        "colors": [
            "#9f9387",
            "#635546"
        ]
    },
    {
        "id": "music-130",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/130.jpg",
        "name": "music-130",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_130.mp3",
        "colors": [
            "#a91531",
            "#e0e5ec"
        ]
    },
    {
        "id": "music-131",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/131.jpg",
        "name": "music-131",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_131.mp3",
        "colors": [
            "#53c1d8",
            "#a645c2"
        ]
    },
    {
        "id": "music-132",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/132.jpg",
        "name": "music-132",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_132.mp3",
        "colors": [
            "#47c9d1",
            "#90353f"
        ]
    },
    {
        "id": "music-133",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/133.jpg",
        "name": "music-133",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_133.mp3",
        "colors": [
            "#a3a7a6",
            "#fcffff"
        ]
    },
    {
        "id": "music-134",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/134.jpg",
        "name": "music-134",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_134.mp3",
        "colors": [
            "#03bffe",
            "#bc0546"
        ]
    },
    {
        "id": "music-135",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/135.jpg",
        "name": "music-135",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_135.mp3",
        "colors": [
            "#e02413",
            "#f3b136"
        ]
    },
    {
        "id": "music-136",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/136.jpg",
        "name": "music-136",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_136.mp3",
        "colors": [
            "#06eddd",
            "#feba01"
        ]
    },
    {
        "id": "music-137",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/137.jpg",
        "name": "music-137",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_137.mp3",
        "colors": [
            "#c9037d",
            "#d3596f"
        ]
    },
    {
        "id": "music-138",
        "img": getBaseUrl() + "/" + useWhichImagesStore.getState().whichImage + "/138.jpg",
        "name": "music-138",
        "pubDate": "2023/05/10",
        "url": import.meta.env.VITE_PUBLIC_MUSICS_STORAGE + "/128b_138.mp3",
        "colors": [
            "#c8d1d6",
            "#8a9499"
        ]
    }
]

export {
    musics
}