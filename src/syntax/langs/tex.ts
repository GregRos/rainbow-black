import { tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("keyword.control.preamble.latex", [c.keyword_1, "bold underline"])
    .set("keyword.control.layout.latex", [c.active_alt])
    .set("keyword.control.include.latex", [c.active_2])
    .set(
        ["support.class.math.block.tex", "support.class.math.block punctuation.definition.string"],
        [c.weak_object, ""]
    )
    .set(
        [
            "constant.other.general.math.tex punctuation.definition.constant.math.tex",
            "constant.other.general.math.tex"
        ],
        [c.weak_object, ""]
    )
    .set(
        [
            "storage.type.function.latex punctuation.definition.function",
            "storage.type.function.latex"
        ],
        [c.active_magic, "underline"]
    )
    .set("support.class.math.block.tex", "italic")
    .set("keyword.control.equation.align.latex", [c.tex_align, "bold underline"])
    .set("keyword.control.equation.newline.latex", [c.tex_align, "bold underline"])
    .set(["punctuation.math"], [c.op_css, ""])
    .set("support.class.math.block.environment.latex", [c.property_1, "italic"])
    .set("punctuation.math.operator.tex", [c.op_css, ""])

    .set(
        ["punctuation.math.begin.bracket.square.tex", "punctuation.math.end.bracket.square.tex"],
        "bold"
    )
    .set("punctuation.math.begin.bracket.round.tex", "")
    .set(
        ["punctuation.math.begin.bracket.curly.tex", "punctuation.math.end.bracket.curly.tex"],
        "bold"
    )
    .set("meta.function.environment.math.latex variable.parameter.function.latex", [
        c.color_value,
        "bold"
    ])
    .set(
        [
            "constant.character.math.tex",
            "constant.character.math.tex punctuation.definition.constant.math.tex"
        ],
        [c.active_1, ""]
    )
    .set("support.function.general.tex", [c.strong_object, ""])
    .set("variable.parameter.function.latex", [c.color_value])
    .set("support.function.section.latex", [c.tex_section, "bold underline"])
    .set("meta.function.section > entity.name.section.latex", [c.string_1, "underline"])
    .set("support.function.be", [c.tex_be, "bold underline"])
