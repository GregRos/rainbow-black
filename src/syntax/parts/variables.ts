import { smMap, tmMap } from "../../baker/parts.js"
import * as c from "../../colors.js"
export default tmMap
    .set(
        ["variable.object.property", "entity.name.variable.property"],
        c.property_1
    )
    .set("punctuation.curlybrace.open", "bold")
    .set("source variable.parameter", [c.variable, "underline"])
    .set("variable.parameter.function-call", ["#C8CFFF"])
    .set("meta.parameters > variable.parameter.function", [
        c.variable,
        "underline"
    ])
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
        [c.self, ""]
    )
    .set(
        "meta.function.parameters > variable.parameter.function.language.special.self",
        [c.self, "underline"]
    )

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
            .set("s!parameter", [c.variable])
            .set("s!parameter.declaration", "underline")
            .set("s!variable.readonly", "-b")
            .set("s!function", c.active_2)
            .set("s!method.defaultLibrary", [c.active_magic])
            .set("s!property.defaultLibrary", [c.property_magic])
            .set("s!variable.defaultLibrary", [c.namespace, "+b"])
            .set("s!function.local", [c.active_1, "+i"])
    )
