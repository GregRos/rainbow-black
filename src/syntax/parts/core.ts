import { smMap, tmMap } from "../../builder/type.js"

export default tmMap
    .set("comment", ["#536E5E", "italic"])
    .set("meta.member.access", "#7CF86F")
    .set("meta.type.parameters storage.modifier", "#CD00E0")
    .set("punctuation.definition", ["#8B8B8B", "bold"])
    .set("keyword.operator.expression", "#8762FF")
    .set("keyword.operator", "#F1A9A9")
    .set("keyword", "#8762FF")
    .set(
        [
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
        ],
        "#722fee"
    )
    .merge(smMap.set(["s!builtinConstant"], "#4276ed"))
