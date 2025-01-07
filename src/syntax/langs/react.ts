import { tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("support.class.component", [c.strong_object, "bold"])
    .set(["source.tsx", "source.jsx"], c.light_text)
    .set(
        ["meta.tag > entity.name.tag", "meta.tag > punctuation.definition.tag"],
        [c.medium_object, "bold"]
    )
