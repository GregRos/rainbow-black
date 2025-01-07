import { smMap, tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"
export default tmMap
    .set("support.function.builtin", c.active_alt)
    .set("punctuation.separator.annotation.python", [c.type_arg, "bold"])
    .merge(
        smMap
            .set(
                ["s!magicFunction.builtin", "s!magicFunction.declaration"],
                c.active_magic
            )
            .set("s!selfParameter", [c.self])
            .set("s!*.typeHint", "+i")
            .set("s!property.declaration:python", "+u")
            .set("s!*.typeHint", "+i")
            .set("s!builtinConstant.typeHint", "+b+i")
            .set("s!class.builtin", [c.alt_object, "+b"])
            .set("s!class.decorator.builtin", c.special_2)
    )
