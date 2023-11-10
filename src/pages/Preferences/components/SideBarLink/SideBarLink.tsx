
import { NavLink } from "react-router-dom"
import { twMerge } from "tailwind-merge";


interface Props {
    href: string;
    text: string;
}

function SideBarLink({ href, text }: Props) {
    return (
        <NavLink
            to={href}
            className={({ isActive }) => twMerge(`block w-full text-sm text-white/60 font-medium bg-transparent
            p-2 px-4 rounded transition-colors hover:bg-white/5`,
                isActive ? "bg-red-700 text-white hover:bg-red-700" : ""
            )}
        >
            {text}
        </NavLink>
    )
}

export default SideBarLink