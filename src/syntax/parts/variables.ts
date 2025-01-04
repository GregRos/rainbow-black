import { smMap, tmMap } from "../../builder/type.js"

export default tmMap
    .set("source variable.parameter", ["#FFFFFF", "italic"])
    .set("variable.parameter.function-call", ["#C8CFFF", "italic"])
    .set("variable.parameter.function", ["#9179EF", "bold"])
    .set("meta.definition.variable", "underline")
    .set("meta.definition.variable support.constant", "#FBBEEE")
    .set("variable", "#FFFFFF")
    .set("variable.other.constant", "#71BC3C")
    .set("variable.other", "#FFFFFF")
    .set("constant.language", ["#619DFC", ""])
    .set("support.constant", "#79C0FF")
    .set("support.variable", "#79C0FF")
    .set("variable.other.property", "#FFCE9D")
    .set("entity.name.function", "#FF0000")
    .merge(
        smMap
            .set("s!parameter", ["#FFFFFF", "-b+i"])
            .set("s!parameter.declaration", "+u")
            .set("s!variable.readonly", "-b")
            .set("s!function", "#d63c3c")
    )
