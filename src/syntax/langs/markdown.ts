import { tmMap } from "../../builder/type.js"

export default tmMap
    .set("punctuation.definition.list.begin.markdown", "#FFA657")
    .set(["markup.heading", "markup.heading entity.name"], ["#79C0FF", "bold"])
    .set("markup.quote", "#7EE787")
    .set("markup.italic", ["#E6EDF3", "italic"])
    .set("markup.bold", ["#E6EDF3", "bold"])
    .set(["markup.underline"], "underline")
    .set(["markup.strikethrough"], "strikethrough")
    .set("markup.inline.raw", "#79C0FF")
    .set(
        [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
        ],
        ["#FFA198", , "#490202"]
    )
