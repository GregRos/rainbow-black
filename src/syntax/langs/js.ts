import { smMap, tmMap } from "../../builder/type.js"
import * as c from "../../colors.js"
export default tmMap
    .set("keyword.operator.expression.typeof", [c.keyword_1, "bold"])

    .merge(smMap.set(["s!variable:typecript", "s!variable:javascript"], "+b"))
