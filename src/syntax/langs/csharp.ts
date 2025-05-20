import { tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("keyword.cs", c.keyword_1)

    .set("entity.name.variable.parameter.cs", [c.variable, "underline"])
    .set("punctuation.separator.question-mark.cs", c.magic_unit_1)
    .set("source.cs entity.name.type.struct", "bold underline")
    .set("s!xmlDocCommentName", [c.medium_object, "bold"])
    .set("s!xmlDocCommentAttributeName", [c.property_1, ""])
    .set("s!xmlDocCommentAttributeValue", [c.string_3, ""])
    .set("s!xmlDocCommentDelimiter", [c.comment_meta_type])
