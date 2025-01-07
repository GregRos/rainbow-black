import { smMap, tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("keyword.operator.expression.typeof", [c.keyword_1, "bold"])
    .set(
        [
            "punctuation.terminator.statement.ts",
            "punctuation.terminator.statement.js"
        ],
        [c.light_text, "bold"]
    )
    .set(
        [
            "keyword.operator.spread",
            "keyword.generator.asterisk",
            "keyword.operator.rest"
        ],
        c.active_1
    )
    .set(
        [
            "keyword.control.flow",
            "keyword.control.trycatch",
            "keyword.control.loop"
        ],
        c.keyword_3
    )
    .set("meta.object-literal.key > constant.numeric", [c.property_typish])
    .set(
        [
            "meta.object-literal.key > string.quoted",
            "meta.object-literal.key > punctuation.definition.string"
        ],
        [c.property_typish, "underline"]
    )
    .set("meta.method.declaration.ts > storage.type.ts", [
        c.active_magic,
        "underline"
    ])
    .set("meta.type.parameters > keyword.operator.assignment", [
        c.active_1,
        "bold"
    ])
    .merge(
        smMap
            .set(["s!variable:typecript", "s!variable:javascript"], "+b")
            .set("s!typeParameter:typescript", [c.type_arg, "+i"])
    )
