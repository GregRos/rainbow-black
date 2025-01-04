import { tmMap } from "../../builder/type.js"

export default tmMap
    .set("meta.diff.range", ["#D2A8FF", "bold"])
    .set("meta.diff.header", "#79C0FF")
    .set("meta.separator", ["#79C0FF", "bold"])
    .set("meta.output", "#79C0FF")
    .set(
        [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
        ],
        ["#7EE787", , "#04260F"]
    )
    .set(
        ["markup.changed", "punctuation.definition.changed"],
        ["#FFA657", , "#5A1E02"]
    )
    .set(["markup.ignored", "markup.untracked"], ["#161B22", , "#79C0FF"])
