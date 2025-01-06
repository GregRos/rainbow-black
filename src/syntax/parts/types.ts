import { smMap, tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"
export default tmMap
    .set("meta.type.parameters storage.modifier", c.keyword_1)
    .set("meta.type.declaration entity.name", "underline")
    .set("meta.class.inheritance", "italic bold")
    .set("entity.other.inherited-class", c.type_arg)
    .set("keyword.type", c.keyword_2)
    .set("support.type", c.keyword_2)
    .set("support.type.exception", [c.strong_object, "bold"])
    .set("entity.name.type", [c.type_arg, "bold"])
    .set("variable.other.object.property", c.property_1)

    .set(
        [
            "entity.name.type.class",
            "entity.name.type.interface",
            "entity.name.type.enum",
            "entity.name.type.namespace",
            "entity.name.type.alias",
            "entity.name.type.struct",
            "entity.name.type.delegate",
            "entity.name.type.module",
            "entity.name.type.type-parameter"
        ],
        "bold underline"
    )
    .set(
        [
            "entity.name.variable.enum-member",
            "entity.name.variable.field",
            "entity.name.variable.property"
        ],
        [c.property_1, "underline"]
    )

    .set(
        [
            "meta.definition.method > entity.name.function",
            "meta.definition.function > entity.name.function"
        ],
        [c.active_2, "underline"]
    )
    .merge(
        smMap
            .set("s!method", "#D63C3C")
            .set("s!method.declaration", "+u")
            .set("s!type", ["#00D9FF", "+b"])
            .set("s!*.declaration", "+u")
            .set("s!typeParameter", ["#FF8000", "+b+i"])
            .set("s!property", "#7CF86F")
            .set("s!interface", ["#90ABFF", "+b"])
            .set("s!function.decorator", ["#e900d1", "-b"])
            .set("s!function.builtin", "#C96043")
            .set("s!enum", ["#83DEC2", "+b"])
            .set("s!class.declaration", "+u")
            .set("s!class", ["#54E050", "+b"])
            .set("s!struct", ["#54E050", "+b"])
    )
