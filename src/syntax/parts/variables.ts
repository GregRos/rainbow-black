import { smMap, tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set(["variable.object.property", "entity.name.variable.property"], c.property_1)
    .set("punctuation.curlybrace.open", "bold")

    .set("variable", c.variable)

    .set("constant.language.boolean", [c.keyword_1])
    .set(["constant.language.infinity", "constant.language.nan"], [c.alt_object, "italic"])
    .set("support.variable.magic", c.property_magic)
    .set("support.constant", "#79C0FF")
    .set("support.variable", "#79C0FF")
    .set("variable.other.property", c.property_1)
    .set(["variable.language.this", "variable.language.special.self"], [c.self, ""])
    .set("variable.parameter.function-call", [c.variable_function_call, "italic"])

    .merge(
        smMap

            .set("s!variable.readonly", "-b")
            .set("s!function", c.active_2)
            .set("s!property.defaultLibrary", [c.property_builtin])
            .set("s!variable.defaultLibrary", [c.namespace, "+b"])
    )
