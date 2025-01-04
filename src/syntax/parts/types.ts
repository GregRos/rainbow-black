import { smMap, tmMap } from "../../builder/type.js"

export default tmMap
    .set("meta.type.parameters storage.modifier", "#CD00E0")
    .set("meta.type.declaration entity.name", "underline")
    .set("entity.name.type.struct", "#FF00E1")
    .set("entity.type.name.class", ["#54E050", "bold"])
    .set("meta.class.inheritance", "italic bold")
    .set("keyword.type", "#8762FF")
    .set("support.type", "#35C2A3")
    .set("s!method", "#D63C3C")
    .merge(
        smMap
            .set("s!method.declaration", "+u")
            .set("s!type", ["#00D9FF", "+b"])
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
