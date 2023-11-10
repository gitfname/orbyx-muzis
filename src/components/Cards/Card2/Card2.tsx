
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { StartElement } from "./components";
import { AudioController } from "../../../utils/AudioController";
import { PlayPauseBtn } from "../..";

const variants = cva(
    `w-full flex items-center justify-between py-3 px-3.5 border-none outline-none bg-transparent
    hover:bg-white/10 transition-colors rounded-xl`
)

interface Props extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof variants> {
    id: string;
    colors: Array<string>;
    start: string | ReactNode;
    title: string;
    subtitle: ReactNode;
    img: string;
    end?: string | ReactNode;
    song: string;
}

type AudioControllerType = AudioController | null

function Card2({
    id, colors, start, title, subtitle, img, end, className, song, ...props
}: Props) {

    return (
        <div
            className={twMerge(variants({ className }))}
            {...props}
        >
            <div className="flex items-center">
                <StartElement>{start}</StartElement>
                <div className="flex items-center gap-x-3">
                    <img
                        alt=""
                        src={img}
                        className="w-12 h-12 rounded-lg object-center object-cover"
                    />
                    <span className="text-sm font-medium text-white">
                        {title}
                    </span>
                </div>
            </div>

            <PlayPauseBtn
                id={id}
                colors={colors}
                img={img}
                name={title}
                song={song}
            />
        </div>
    )
}

export default Card2