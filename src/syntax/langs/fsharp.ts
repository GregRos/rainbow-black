import { tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("keyword.operator.fsharp", c.op_css)
    .set("support.function.attribute", [c.property_magic, "bold"])
    .set("binding.fsharp > variable.fsharp", "underline") // This is declaration of a binding
    .set("variable.parameter.fsharp > variable.fsharp", "underline") // Disable underline for function parameter due to tokenizer issue
    .set("binding.fsharp > variable.parameter.fsharp", "italic")
    .set("support.function.attribute.fsharp", [c.property_magic, "bold"])
    .set("record.fsharp > variable.parameter.fsharp", "bold")
    .set("source.fsharp variable.parameter.fsharp", "italic")
    .set("s!type:fsharp", [c.fsharp_type, "bold"])
    .set("s!function:fsharp", [c.fsharp_function, ""])
    .set("s!variable.defaultLibrary:fsharp", [c.variable, ""])
    .set("s!member:fsharp", [c.variable, "bold"])
    .set("s!enumMember:fsharp", [c.property_1, "bold"])
