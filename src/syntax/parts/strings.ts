import { tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("punctuation.section.embedded", c.string_special_token)
    .set("string", c.string_1)
    .set("string punctuation.section.embedded source", c.string_special_token)

    .set(
        [
            "meta.type.annotation > string.quoted",
            "meta.type.annotation > string.quoted punctuation.definition.string"
        ],
        [c.string_1, "bold"]
    )
    .set("meta.type.annotation > constant.numeric", [c.light_text, "bold"])
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
    .set("punctuation.separator.key-value", [c.active_1, ""])
    .set("constant.character.escape", c.string_special_token)
