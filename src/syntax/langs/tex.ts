import { tmMap } from "../../builder/type.js"

export default tmMap
    .set("support.class.math.block.tex", ["#FF0000", "bold"])
    .set("constant.other.math.tex", ["#C1E0C6", ""])
    .set("keyword.control.equation.align.latex", ["#FFFFFF", "bold underline"])
    .set("keyword.control.equation.newline.latex", [
        "#FFFFFF",
        "bold underline"
    ])
    .set("punctuation.math", "#FF0000")
    .set("support.class.math.block.environment.latex", ["#BDFDC7", "italic"])
    .set("punctation.math", ["#FF0000", ""])
    .set("punctuation.math.operator.tex", ["#72FD6B", ""])
    .set("punctuation.math.begin.bracket.square.tex", ["#AB3939", "bold"])
    .set("constant.other.general.math.tex", ["#F5F8DB", ""])
    .set("support.class.math.block punctuation.definition.string", [
        "#726AFF",
        "bold"
    ])
    .set("support.function.be.latex", ["#F7A6F7", "bold underline"])
    .set(
        [
            "punctuation.definition.arguments.begin.latex",
            "punctuation.definition.arguments.end.latex"
        ],
        ["#F7A6F7", "bold"]
    )
    .set(
        [
            "punctuation.math.begin.bracket.square.tex",
            "punctuation.math.end.bracket.square.tex"
        ],
        ["#AB3939", "bold"]
    )
    .set("puncutation.math.begin.bracket.round.tex", "")
    .set(
        [
            "punctuation.math.begin.bracket.curly.tex",
            "punctuation.math.end.bracket.curly.tex"
        ],
        ["#AB3939", "bold"]
    )
    .set(
        "meta.function.environment.math.latex variable.parameter.function.latex",
        ["#EE8686", "bold"]
    )
    .set("constant.character.math.tex", ["#72FD6B", ""])
    .set("support.function.general.tex", ["#D63C3C", ""])
    .set(
        "support.function.general.tex, punctuation.definition.function",
        "#D63C3C"
    )
    .set("support.function.section.latex", ["#FF81E8", "bold underline"])
    .set("entity.name.section", ["#FF81E8", "bold underline"])

/*
      {
        "scope": "support.function.section",
        "settings": {
          "foreground": "#FF81E8",
          "fontStyle": "bold underline"
        }
      },
            {
        "scope": "entity.name.section",
        "settings": {
          "foreground": "#FF81E8",
          "fontStyle": "bold underline"
        }
      },
      */
