import { smMap, tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"
export default tmMap
    .set("meta.type.parameters storage.modifier", c.keyword_1)
    .set("meta.type.declaration entity.name", "underline")
    .set("meta.class.inheritance", "italic bold")
    .set("entity.other.inherited-class", [c.type_arg, "bold"])
    .set("keyword.type", [c.keyword_2, "bold"])
    .set("storage.type", [c.keyword_1])
    .set("meta.function.decorator support.type", [c.active_magic, "bold"])
    .set("support.type", [c.alt_object, "bold"])
    .set(
        ["support.type.builtin", "support.type.primitive"],
        [c.alt_object, "bold"]
    )
    .set("support.type.exception", [c.strong_object, "bold"])
    .set("entity.name.type", [c.type_arg, "bold"])
    .set(
        ["variable.other.object.property", "support.variable.property"],
        c.property_1
    )

    .set(
        [
            "meta.class > entity.name.type.class",
            "meta.interface > entity.name.type.interface",
            "meta.enum > entity.name.type.enum",
            "meta.namespace > entity.name.type.namespace",
            "meta.type.declaration > meta.entity.name.type.alias",
            "entity.name.type.struct",
            "entity.name.type.delegate",
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
            .set("s!method", c.active_2)
            .set("s!type", [c.weak_object, "+b"])
            .set("s!*.declaration", "+u")
            .set("s!typeParameter", ["#FF8000", "+b+i"])
            .set("s!property", c.property_1)
            .set("s!interface", [c.medium_object, "+b"])
            .set("s!function.decorator", [c.active_magic, "-b"])
            .set("s!function.builtin", c.active_magic)
            .set("s!enum", ["#83DEC2", "+b"])
            .set("s!class", [c.strong_object, "bold"])
            .set("s!struct", ["#54E050", "+b"])
    )
