import { smMap, tmMap } from "../../builder/type.js"

export default tmMap
    .set("support.type.property-name.toml", "#ECECA1")
    .set(
        ["support.type.property-name.array.toml"],
        ["#A8FDBC", "bold underline"]
    )
    .set("support.type.property-name.table.toml", ["#57CD5D", "bold"])
    .merge(smMap.set("s!tomlArrayKey", ["#7d71f9", "-b-u"]))
