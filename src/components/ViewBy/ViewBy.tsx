
import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiFillQqSquare, AiOutlineMenu } from "react-icons/ai"
import { Bs4Square, BsSquareFill } from "react-icons/bs";
import { PiSquaresFour, PiSquaresFourFill } from "react-icons/pi";

interface Props {
    onViewChange: (view: "list" | "grid") => void;
    initialView: "list" | "grid"
}

function ViewBy({
    onViewChange, initialView
}: Props) {

    const [view, setView] = useState<"list" | "grid">(initialView)

    useEffect(() => onViewChange?.(view), [view])

    return (
        <div className="flex items-center justify-end gap-x-3">
            <Button
                onClick={() => setView("grid")}
                bgColor={view === "grid" ? "whiteAlpha.900" : "whiteAlpha.100"}
                size="sm"
                padding={0}
                rounded="full"
                borderWidth="1px"
                borderColor="whiteAlpha.500"
                fill={view === "grid" ? "black" : "white"}
                _hover={{
                    bgColor: "whiteAlpha.900",
                    fill: "black"
                }}
            >
                <PiSquaresFourFill className="w-4 h-4 fill-inherit" />
            </Button>

            <Button
                onClick={() => setView("list")}
                bgColor={view === "list" ? "whiteAlpha.900" : "whiteAlpha.100"}
                size="sm"
                padding={0}
                rounded="full"
                borderWidth="1px"
                borderColor="whiteAlpha.500"
                fill={ view === "list" ? "black" : "white"}
                _hover={{
                    bgColor: "whiteAlpha.900",
                    fill: "black"
                }}
            >
                <AiOutlineMenu className="w-4 h-4 fill-inherit" />
            </Button>
        </div>
    )
}

export default ViewBy