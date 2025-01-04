import { smMap, tmMap } from "../../builder/type.js"

export default tmMap
    .set(["variable.other.readwrite.alias", "meta.import variable"], "#9DFF00")
    .set(["meta.import string.quoted"], ["#8F3685", "underline"])
    .set(["meta.brace"], "bold")
    .set(["meta.module-reference"], "#79C0FF")
    .merge(smMap.set("s!module", "+b").set("s!namespace", ["#52f0ac", "+b"]))
