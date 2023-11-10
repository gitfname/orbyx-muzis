
import { ComponentWithAs, Switch, SwitchProps } from "@chakra-ui/react";
import { cva, type VariantProps } from "class-variance-authority"
import { ReactNode, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { twMerge } from "tailwind-merge"

interface Props {
    text: string;
    onChange?(value: boolean): void;
    defaultValue?: boolean;
    checkedNode?: ReactNode;
    unCheckedNode?: ReactNode;
    type?: "switch" | "tick"
}

function SwitchCard({ text, onChange, defaultValue, checkedNode, unCheckedNode, type = "switch" }: Props) {

    const [isChecked, setIsChecked] = useState(defaultValue || false)

    const handleOnValueChange = (value: boolean) => {
        setIsChecked(value)
        console.log(value)
        onChange?.(value)
    }

    return (
        <button
            className="appearance-none w-full bg-zinc-950 rounded-md py-3.5 px-4 flex items-center justify-between border border-white/10
            cursor-pointer hover:bg-zinc-800 transition-colors"
            onClick={() => handleOnValueChange(!isChecked)}
        >
            <span
                className="text-sm text-white font-normal"
            >
                {text}
            </span>

            <div
                onClick={e => e.stopPropagation()}
            >
                {
                    checkedNode || unCheckedNode
                        ?
                        checkedNode && isChecked
                            ?
                            checkedNode
                            :
                            unCheckedNode && !isChecked
                            &&
                            unCheckedNode
                        :
                        type === "switch"
                            ?
                            < Switch
                                isChecked={isChecked}
                                colorScheme="red"
                                onChange={e => {
                                    handleOnValueChange(e.target.checked)
                                }}
                            />
                            :
                            type === "tick"
                                &&
                                isChecked
                                ?
                                <AiOutlineCheck className="w-5 h-5 fill-white" />
                                :
                                <div className="h-5"></div>


                }
            </div>
        </button>
    )
}

export default SwitchCard