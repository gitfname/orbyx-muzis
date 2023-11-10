
import data from "../data/data.json"
import { extractColors } from "extract-colors"

const res = []

async function main() {
    for (const item of data) {
        const colors = await extractColors(item.img)
        res.push({
            ...item,
            colors: colors.slice(0, 2).map(color => color.hex)
        })
    }

    console.log(JSON.stringify(res))
}

export default main()