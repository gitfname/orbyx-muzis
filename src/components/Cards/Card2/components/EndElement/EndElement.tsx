import { ReactNode } from "react"


interface Props {
    children?: string | ReactNode;
}

function EndElement({ children }: Props) {

    if (!children) return null

    let child

    switch (typeof children) {
        case "string":
            child = (
                <img
                    alt=""
                    src={children}
                    loading="lazy"
                    decoding="async"
                    className="w-5 h-5 object-center object-cover"
                />
            )
            break;

        case "object":
            child = children
            break;
    }

    return child
}

export default EndElement