
import { cva, type VariantProps } from "class-variance-authority"
import { SVGAttributes } from "react"
import { twMerge } from "tailwind-merge"


const variants = cva(
    "w-6 h-6 text-black/95"
)

export interface Props extends SVGAttributes<SVGElement>, VariantProps<typeof variants> {}

function Play1({ className, ...props }: Props) {
    return (
        <svg
            className={twMerge(variants({className}))}
            {...props}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484"
            />
        </svg>
    )
}

export default Play1