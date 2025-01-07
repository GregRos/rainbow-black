import { tmMap, type TmKey, type TmValue } from "../../builder/type.js"
import * as c from "../../colors.js"

const headingNumberToStyle = {
    1: c.active_magic,
    2: c.active_3,
    3: c.active_2,
    4: c.active_1
}

const headingStyles = Object.entries(headingNumberToStyle).map(
    ([key, value]) => {
        const h = `heading.${key}.markdown`
        return [
            [h, `${h} > punctuation.definition.heading.markdown`],
            [value, "bold underline"]
        ] as [TmKey, TmValue]
    }
)
export default tmMap
    .merge(headingStyles)
    .set("text.html.markdown", c.variable)
    .set("punctuation.definition.list.begin.markdown", [
        c.weak_object,
        "underline"
    ])
    .set(["markup.quote"], c.property_1)
    .set("punctuation.definition.quote.begin.markdown", [
        c.property_1,
        "underline"
    ])
    .set("markup.italic", [c.variable, "italic"])
    .set("markup.bold", [c.variable, "bold"])
    .set(["markup.strikethrough"], "strikethrough")
    .set(
        ["markup.inline.raw", "punctuation.definition.raw.markdown"],
        c.string_1
    )
    .set("punctuation.definition.bold.markdown", [
        c.flex_unit_2,
        "strikethrough"
    ])
    .set("meta.image.inline.markdown", "underline")
    .set(["string.other.link.title.markdown"], [c.property_1, "italic"])
    .set("meta.image.inline.markdown", [c.active_magic, "underline"])
    .set("string.other.link.description.markdown", [
        c.super_light_text,
        "italic"
    ])
    .set(
        [
            "meta.image.inline > punctuation.definition.link.description.begin.markdown",
            "meta.image.inline > punctuation.definition.link.description.end.markdown",
            "meta.image.inline > punctuation.definition.metadata.markdown",
            "meta.image.inline > punctuation.definition.link.title.markdown",
            "meta.image.inline > punctuation.definition.link.title"
        ],
        [c.active_magic, "bold"]
    )
    .set(
        [
            "punctuation.definition.link.description.begin.markdown",
            "punctuation.definition.link.description.end.markdown",
            "punctuation.definition.metadata.markdown",
            "punctuation.definition.link.title.markdown",
            "punctuation.definition.link.title"
        ],
        [c.active_3, "bold"]
    )
    .set(["markup.underline.link.markdown"], [c.keyword_1, "underline"])
    .set("fenced_code.block.language.markdown", c.active_magic)
    .set(
        [
            "markup.fenced_code.block.markdown > punctuation.definition.markdown",
            "markup.fenced_code.block.markdown"
        ],
        c.string_2
    )
