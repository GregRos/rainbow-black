import { tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"
export default tmMap
    .set("punctuation.section.embedded", "#FF7B72")
    .set("string", c.string_1)
    .set("string punctuation.section.embedded source", "#A5D6FF")
    .set(
        [
            "meta.type.annotation > string.quoted",
            "meta.type.annotation > string.quoted punctuation.definition.string"
        ],
        "#FF7B72"
    )
    .set(
        [
            "meta.field.declaration > string.quoted",
            "meta.field.declaration > meta.definition.property",
            "meta.field.declaration > string.quoted punctuation.definition.string"
        ],
        [c.property_1, "underline"]
    )
    .set(
        ["meta.object-literal.key", "meta.object-literal.key"],
        [c.property_1, "underline"]
    )
    .set("punctuation.separator.key-value", ["#FF7B72", ""])
