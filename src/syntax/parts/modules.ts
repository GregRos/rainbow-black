import { smMap, tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set(["variable.other.readwrite.alias", "meta.import variable"], c.imported)
    .set(["meta.import string.quoted"], [c.package_name, "underline"])
    .set(["meta.brace"], "bold")
    .set(["meta.module-reference"], c.moduleReference)
    .merge(smMap.set("s!module", "+b").set("s!namespace", [c.namespace, "+b"]))
