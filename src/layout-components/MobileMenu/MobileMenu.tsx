

import {
    Button
} from "@chakra-ui/react"
import { SidebarNavLink } from "../../components"
import { BsCameraVideo, BsCloudDownload, BsFileEarmarkMusic, BsFillHeartFill, BsMusicNote } from "react-icons/bs"
import { ApplicationRoutes } from "../../routes"
import { HiOutlineMicrophone } from "react-icons/hi"
import { CiSearch } from "react-icons/ci"
import { PiBrowsersThin } from "react-icons/pi"
import { AiFillHome, AiOutlineMenu } from "react-icons/ai"
import { ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"


interface Props {
    items: Array<{
        id?: string;
        text?: string;
        href?: string;
        onClick?(id: string): void;
        icon?: ReactNode;
        onlyText?: boolean;
        isSeparator?: boolean;
    }>
}

function MobileMenu({ items }: Props) {

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return (
        <>
            <Button
                onClick={onOpen}
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
            </Button>

            <div
                className={twMerge(
                    `fixed top-0 left-0 w-full h-full z-[999] pointer-events-none bg-transparent`,
                    isOpen ? "pointer-events-auto" : ""
                )}
            >

                {/* overlay */}
                <div
                    className={twMerge(`
                absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-200`,
                        isOpen ? "opacity-60" : ""
                    )}
                    onClick={onClose}
                />


                {/* sidemenu */}
                <div
                    className={twMerge(
                        `w-72 bg-zinc-900 h-full absolute top-0 left-0 z-10 -translate-x-full transition-transform
                        will-change-transform duration-300 overflow-y-auto pb-6`,
                        isOpen ? "translate-x-0" : ""
                    )}
                >

                    <div className="w-full flex justify-end p-3.5">
                        <Button
                            onClick={onClose}
                            bgColor="whiteAlpha.100"
                            color="white"
                            fontWeight="normal"
                            _active={{
                                bgColor: "whiteAlpha.100"
                            }}
                            _hover={{
                                bgColor: "whiteAlpha.200"
                            }}
                            size="sm"
                            _focus={{
                                bgColor: "whiteAlpha.100"
                            }}
                            rounded="md"
                        >
                            X
                        </Button>
                    </div>

                    <div className="overflow-y-auto p-2 flex flex-col gap-y-0.5">
                        {
                            items?.map((item, index) => (
                                item.isSeparator
                                ?
                                <div className="w-full border-b border-b-white/10 my-2"></div>
                                :
                                item.onlyText
                                    ?
                                    index > 0
                                        ?
                                        <p className="text-sm text-white/50 font-normal mt-6 mb-2">{item.text}</p>
                                        :
                                        <p className="text-sm text-white/50 font-normal mb-2">{item.text}</p>
                                    :
                                    item?.onClick
                                        ?
                                        <button
                                            className="appearance-none"
                                            onClick={() => item.onClick(item.id)}
                                        >
                                            <SidebarNavLink
                                                href={item.href}
                                                icon={item.icon}
                                                text={item.text}
                                            />
                                        </button>
                                        :
                                        <SidebarNavLink
                                            href={item.href}
                                            icon={item.icon}
                                            text={item.text}
                                        />
                            ))
                        }
                    </div>

                </div>

            </div>

        </>
    )
}

export default MobileMenu