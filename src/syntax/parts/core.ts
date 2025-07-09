import { smMap, tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("comment", [c.comment, "italic"])
    .set(
        ["constant.language.null", "constant.language.undefined"],
        c.alt_object
    )
    .set("constant.language", c.keyword_3)
    .set("constant.numeric", c.light_text)
    .set("keyword.symbol", "bold")
    .set("meta.attribute", c.property_1)
    .set("meta.type.parameters storage.modifier", c.keyword_1)
    .set("punctuation.definition", [c.punctuation, "bold"])
    .set("keyword.operator.expression", c.keyword_1)
    .set("keyword.operator", c.keyword_1)
    .set("meta.scope.case-pattern", c.shell_option_1)
    .set("variable.language.super", c.keyword_3)

    .set(["keyword", "storage.modifier", "keyword.control"], [c.keyword_2, ""])
    .set(
        [
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
        ],
        c.keyword_1
    )
    .set(
        ["punctuation.separator.comma", "storage.type.function.arrow"],
        [c.punctuation, ""]
    )
    .set("s!property", [c.property_1, ""])
    .merge(smMap.set(["s!builtinConstant"], c.keyword_3))
