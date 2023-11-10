
import { Button } from "@chakra-ui/react"
import { Outlet, useNavigate } from "react-router-dom"
import { SideBarLink } from "./components"
import { ApplicationRoutes } from "../../routes"
import { AiOutlineMenu } from "react-icons/ai"
import { MobileMenu } from "../../layout-components/MobileMenu"

function Preferences() {

  const navigate = useNavigate()

  return (
    <div
      className="w-screen h-screen bg-zinc-900 bg-zinc-90 grid max-md:grid-rows-[3.6rem_calc(100%-3.6rem)] grid-cols-1 md:grid-cols-[4.8fr_10fr_1fr] lg:grid-cols-[3.5fr_10fr_1.5fr] overflow-hidden"
    >

      {/* sidebar */}
      <div className="overflow-y-auto px-6 pl-14 max-md:hidden">
        <div className="space-y-4 bg-zinc-950 p-2 py-4 min-h-full">

          <div className="space-y-1.5">
            <p className="text-xs font-medium text-white/40 uppercase pl-3">account</p>
            <SideBarLink href={ApplicationRoutes.pages.preferences.myAccount} text="My Account" />
          </div>

          <div className="w-full border-b border-b-white/10"></div>

          <div className="space-y-1.5">
            <p className="text-xs font-medium text-white/40 uppercase pl-3">app settings</p>
            <SideBarLink href={ApplicationRoutes.pages.preferences.appearance} text="Apperance" />
            <SideBarLink href={ApplicationRoutes.pages.preferences.sidebar} text="Sidebar" />
            <SideBarLink href={ApplicationRoutes.pages.preferences.playback} text="Playback" />
            <SideBarLink href={ApplicationRoutes.pages.preferences.storage} text="Storage" />
          </div>

          <div className="w-full border-b border-b-white/10"></div>

          <div className="space-y-1.5">
            <SideBarLink href="/g" text="Help & Support" />
            <SideBarLink href="/g" text="term of Use" />
            <SideBarLink href="/g" text="Privacy" />
          </div>

        </div>
      </div>

      <div className="bg-zinc-800 shadow-md shadow-black/10 w-full md:hidden flex items-center px-4">
        {/* <Button
          bgColor="whiteAlpha.100"
          _active={{
            bgColor: "whiteAlpha.100"
          }}
          _focus={{
            bgColor: "whiteAlpha.100"
          }}
          _hover={{
            bgColor: "whiteAlpha.200"
          }}
          rounded="md"
        >
          <AiOutlineMenu className="w-4 h-4 fill-white" />
        </Button> */}

        <MobileMenu
          items={[
            {
              id: "mm-account-section",
              text: "APP SETTINGS",
              onlyText: true
            },
            {
              id: "mm-my-account",
              text: "My Account",
              href: ApplicationRoutes.pages.preferences.myAccount
            },
            { isSeparator: true },
            {
              id: "mm-app-settings-section",
              text: "APP SETTINGS",
              onlyText: true
            },
            {
              id: "mm-appearance",
              text: "Appearance",
              href: ApplicationRoutes.pages.preferences.appearance
            },
            {
              id: "mm-sidebare",
              text: "Sidebar",
              href: ApplicationRoutes.pages.preferences.sidebar
            },
            {
              id: "mm-playback",
              text: "Playback",
              href: ApplicationRoutes.pages.preferences.playback
            },
            {
              id: "mm-storage",
              text: "Storage",
              href: ApplicationRoutes.pages.preferences.storage
            }
          ]}
        />
      </div>

      <div className="overflow-y-auto p-4 py-8">
        <Outlet />
      </div>

      <div className="flex pt-8 lg:pl-3 max-md:hidden">
        <Button
          onClick={() => navigate(ApplicationRoutes.pages.home)}
          rounded="full"
          bgColor="whiteAlpha.200"
          _hover={{
            bgColor: "whiteAlpha.200"
          }}
          color="white"
          fontWeight="normal"
        >
          X
        </Button>
      </div>
    </div>
  )
}

export default Preferences