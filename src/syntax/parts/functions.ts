import { tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("meta.parameters > variable.parameter.function", [
        c.variable,
        "underline"
    ])
    .set("meta.definition.variable", "underline")
    .set("meta.definition.variable support.constant", "#FBBEEE")
    .set("meta.function > entity.name.function", "underline")
    .set("meta.function > support.function.magic", "underline")
    .set("support.function.magic", c.active_magic)
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
    .set("s!parameter", [c.variable])
    .set("s!parameter.declaration", "underline")
    .set("s!method.defaultLibrary", [c.active_2])

    .set("source variable.parameter", [c.variable, "underline"])
