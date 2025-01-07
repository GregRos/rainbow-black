import { smMap, tmMap } from "../../baker/parts.js"
import * as c from "../../colors.js"
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
    .set(["keyword.control.flow", "keyword.control.trycatch"], c.keyword_3)
    .merge(smMap.set(["s!variable:typecript", "s!variable:javascript"], "+b"))
