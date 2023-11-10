
import { AiOutlineDownload, AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { HiOutlineQueueList } from "react-icons/hi2"
import { BsChevronRight, BsFillPlayFill, BsShuffle } from "react-icons/bs";

import { Menu, MenuPositioner, Portal, MenuContent, MenuItem, MenuContextTrigger, MenuSeparator, MenuTriggerItem, MenuTrigger } from "@ark-ui/react"
import { ReactNode } from "react"


interface NestedItemmOptions {
    id?: string;
    title?: string;
    icon?: ReactNode;
    onClick?(id: string): void;
    isSeparator?: boolean;
}

interface ItemOptions {
    id?: string;
    title?: string;
    icon?: ReactNode;
    onClick?(id: string): void;
    isSeparator?: boolean;
    items?: Array<NestedItemmOptions>;
}

interface Props {
    children: ReactNode;
    items: Array<ItemOptions>;
    context?: boolean;
    menu?: boolean;
    header?: ReactNode;
}

function ContextMenu({ children, items, header, context, menu }: Props) {

    return (
        <Menu>
            {
                menu && context
                    ?
                    <MenuTrigger>
                        <MenuContextTrigger>
                            {children}
                        </MenuContextTrigger>
                    </MenuTrigger>
                    :
                    menu
                        ?
                        <MenuTrigger>
                            {children}
                        </MenuTrigger>
                        :
                        <MenuContextTrigger>
                            {children}
                        </MenuContextTrigger>
            }

            <Portal>
                <MenuPositioner className="z-50">
                    <MenuContent className="w-64 bg-zinc-800 rounded p-1 py-2.5">

                        {
                            header
                            &&
                            <MenuItem id="header" className="cursor-pointer">
                                {header}
                            </MenuItem>
                        }

                        {
                            items?.map(item => (
                                item.isSeparator
                                    ?
                                    <MenuSeparator className="my-0.5 border-white/20" />
                                    :
                                    item.items?.length > 0
                                        ?
                                        <Menu>
                                            <MenuTriggerItem>
                                                <div className="flex items-center p-2 px-3 rounded hover:bg-white/5 transition-colors relative">
                                                    {
                                                        item?.icon
                                                            ?
                                                            <div className="w-7">
                                                                {item.icon}
                                                            </div>
                                                            :
                                                            null
                                                    }
                                                    <span className="text-xs text-white/90 font-medium">{item.title}</span>
                                                    <BsChevronRight className="w-3.5 h-3.5 fill-white absolute top-1/2 right-2 -translate-y-1/2" />
                                                </div>
                                            </MenuTriggerItem>
                                            <Portal>
                                                <MenuPositioner className="z-50">
                                                    <MenuContent className="w-64 bg-zinc-800 rounded p-1 py-2.5">
                                                        {
                                                            item.items.map(innerItem => (
                                                                <MenuItem onClick={() => item?.onClick?.(innerItem.id)} key={innerItem.id} id={innerItem.id} className="cursor-pointer">
                                                                    <div className="flex items-center p-2 px-3 rounded hover:bg-white/5 transition-colors">
                                                                        {
                                                                            innerItem?.icon
                                                                                ?
                                                                                <div className="w-7">
                                                                                    {innerItem.icon}
                                                                                </div>
                                                                                :
                                                                                null
                                                                        }
                                                                        <span className="text-xs text-white/90 font-medium">{innerItem.title}</span>
                                                                    </div>
                                                                </MenuItem>
                                                            ))
                                                        }
                                                    </MenuContent>
                                                </MenuPositioner>
                                            </Portal>
                                        </Menu>
                                        :
                                        <MenuItem onClick={() => item?.onClick?.(item.id)} key={item.id} id={item.id} className="cursor-pointer">
                                            <div className="flex items-center p-2 px-3 rounded hover:bg-white/5 transition-colors">
                                                {
                                                    item?.icon
                                                        ?
                                                        <div className="w-7">
                                                            {item.icon}
                                                        </div>
                                                        :
                                                        null
                                                }
                                                <span className="text-xs text-white/90 font-medium">{item.title}</span>
                                            </div>
                                        </MenuItem>
                            ))
                        }
                    </MenuContent>
                </MenuPositioner>
            </Portal>
        </Menu>
    )
}

export default ContextMenu
