import { smMap, tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"
export default tmMap
    .set("comment", ["#536E5E", "italic"])
    .set("constant.numeric", c.light_text)
    .set("meta.attribute", c.property_1)
    .set("meta.type.parameters storage.modifier", c.keyword_1)
    .set("punctuation.definition", ["#8B8B8B", "bold"])
    .set("keyword.operator.expression", "#8762FF")
    .set("keyword.operator", "#F1A9A9")
    .set(["keyword", "storage.modifier", "keyword.control"], [c.keyword_2, ""])
    .set(
        [
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
        ],
        c.keyword_1
    )
    .set(["constant.other.reference.link", "string.other.link"], "#A5D6FF")
    .merge(smMap.set(["s!builtinConstant"], "#4276ed"))
