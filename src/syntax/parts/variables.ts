import { smMap, tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"
export default tmMap
    .set(
        ["variable.object.property", "entity.name.variable.property"],
        c.property_1
    )
    .set("punctuation.curlybrace.open", "bold")
    .set("source variable.parameter", ["#FFFFFF", "italic"])
    .set("variable.parameter.function-call", ["#C8CFFF", "italic"])
    .set("variable.parameter.function", [c.variable, "underline"])
    .set("meta.definition.variable", "underline")
    .set("meta.definition.variable support.constant", "#FBBEEE")
    .set("variable", c.variable)
    .set("meta.function > entity.name.function", "underline")
    .set("meta.function > support.function.magic", "underline")
    .set("support.function.magic", c.active_magic)
    .set("constant.language", [c.keyword_1, ""])
    .set("support.variable.magic", c.property_magic)
    .set("support.constant", "#79C0FF")
    .set("support.variable", "#79C0FF")
    .set("variable.other.property", c.property_1)
    .set(
        ["variable.language.this", "variable.language.special.self"],
        [c.self, "italic"]
    )
    .set("variable.parameter.function.language.special.self", [
        c.self,
        "italic underline"
    ])

    .set(["entity.name.function", "meta.function-call.generic"], c.active_2)
    .set(["entity.name.function.tagged-template"], [c.active_1, "italic"])
    .set(
        [
            "meta.parameters > variable.parameter",
            "meta.parameters > entity.name.function"
        ],
        "underline"
    )
    .merge(
        smMap
            .set("s!parameter", ["#FFFFFF", "-b+i"])
            .set("s!parameter.declaration", "+u")
            .set("s!variable.readonly", "-b")
            .set("s!function", "#d63c3c")
    )
