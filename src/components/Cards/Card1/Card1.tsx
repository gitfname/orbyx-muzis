
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

// icons
import { BsChevronRight } from "react-icons/bs"


const variants = cva(
    `appearance-none w-full rounded-xl border-white/20 bg-white/10 hover:bg-white/20
    transition-colors flex items-center justify-between py-3.5 px-5`
)

interface Props extends HTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> {
    id: string;
    title: string;
    icon: ReactNode | string;
}

function Card1({
    id,
    className,
    title,
    icon,
    ...props
}: Props) {
    return (
        <button
            className={twMerge(variants({ className }))}
            {...props}
        >
            <div className="flex items-center">
                <div className="w-10">
                    {
                        typeof icon === "string"
                            ?
                            <img
                                alt=""
                                loading="lazy"
                                decoding="async"
                                src={icon}
                                className="w-5 h-5 object-center object-cover"
                            />
                            :
                            icon
                    }
                </div>
                <span
                    className="text-sm font-medium text-white"
                >
                    {title}
                </span>
            </div>
            <BsChevronRight className="w-5 h-5 fill-white" />
        </button>
    )
}

export default Card1