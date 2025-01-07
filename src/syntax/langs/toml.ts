import { smMap, tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"

export default tmMap
    .set("support.type.property-name.toml", [c.property_1, ""])
    .set(
        ["support.type.property-name.array.toml"],
        [c.strong_object, "bold underline"]
    )
    .set("support.type.property-name.table.toml", [
        c.medium_object,
        "bold underline"
    ])
    .merge(smMap.set("s!tomlArrayKey", "-b-u"))
