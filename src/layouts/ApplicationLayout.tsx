
import { ReactNode } from "react"
import NavBar from "../layout-components/NavBar"

interface Props {
    children: ReactNode
}

function ApplicationLayout({children}: Props) {
  return (
    <div
        className="w-full h-screen overflow-hidden grid
        grid-cols-1 grid-rows-[4rem_calc(100%-4rem)] bg-zinc-900"
    >

        {/* navbar */}
        <div className="border-b border-b-white/10">
            <NavBar />
        </div>


        {/* main section */}
        <div className="overflow-y-auto">
            {children}
        </div>

    </div>
  )
}

export default ApplicationLayout