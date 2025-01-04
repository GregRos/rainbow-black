import { tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"

export default tmMap
    .set("string.regexp keyword.other", c.variable)
    .set("meta.group.regexp", "italic")
    .set(["meta.assertion", "meta.group.assertion.regexp"], c.special3)
    .set("keyword.control.anchor.regexp", c.active3)
    .set("variable.other.regexp", [c.variable, "underline"])
    .set(["source.regexp", "string.regexp"], c.regexp)
    .set(
        [
            "string.regexp.character-class",
            "constant.other.character-class.regexp"
        ],
        c.special2
    )
    .set("keyword.operator.quantifier.regexp", c.active_alt)
    .set("constant.other.character-class.range.regexp", c.special_x1)
    .set(
        [
            "string.regexp.character-class",
            "string.regexp constant.character.escape",
            "string.regexp source.ruby.embedded",
            "string.regexp string.regexp.arbitrary-repitition"
        ],
        c.special3
    )
    .set("string.regexp constant.character.escape", [c.active1, "bold"])
    .set(["meta.assertion", "meta.group.assertion.regexp"], c.special3)
