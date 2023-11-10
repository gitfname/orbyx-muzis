
import { ReactNode, useMemo } from "react";
import { NavLink } from "react-router-dom"


interface Props {
  text: string;
  href: string;
  icon: ReactNode;
}

function SidebarNavLink({ text, href, icon }: Props) {
  return useMemo(
    () => (
      href
        ?
        <NavLink
          to={href}
          className={({ isActive }) => `text-sm font-normal text-white/50 fill-white/60 flex items-center
        py-3 px-3.5 hover:bg-white/5 rounded-sm hover:text-white
        ${isActive ? "!text-white !fill-white !bg-white/10" : ""}`}
        >
          {
            icon
            &&
            <div className="w-11">
              {icon}
            </div>
          }
          {text}
        </NavLink>
        :
        <button
          className="text-sm font-normal text-white/50 fill-white/60 flex items-center
        py-3 px-3.5 hover:bg-white/5 rounded-sm hover:text-white"
        >
          {
            icon
            &&
            <div className="w-11">
              {icon}
            </div>
          }
          {text}
        </button>
    ),
    [text]
  )
}

export default SidebarNavLink