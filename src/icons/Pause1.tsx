
import { cva, type VariantProps } from "class-variance-authority"
import { SVGAttributes } from "react"
import { twMerge } from "tailwind-merge"


const variants = cva(
    "w-6 h-6 text-black/95"
)

export interface Props extends SVGAttributes<SVGElement>, VariantProps<typeof variants> { }

function Pause1({ className, ...props }: Props) {
    return (
        <svg
            className={twMerge(variants({className}))}
            {...props}
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                d="M6.75 3A2.75 2.75 0 0 0 4 5.75v16.5A2.75 2.75 0 0 0 6.75 25h3a2.75 2.75 0 0 0 2.75-2.75V5.75A2.75 2.75 0 0 0 9.75 3h-3ZM5.5 5.75c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v16.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25V5.75ZM18.25 3a2.75 2.75 0 0 0-2.75 2.75v16.5A2.75 2.75 0 0 0 18.25 25h3A2.75 2.75 0 0 0 24 22.25V5.75A2.75 2.75 0 0 0 21.25 3h-3ZM17 5.75c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v16.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25V5.75Z"
            />
        </svg>
    )
}

export default Pause1