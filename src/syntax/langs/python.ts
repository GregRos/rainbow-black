import { smMap, tmMap } from "../../builder/type.js"
export default tmMap
    .set("support.function.builtin", "#FB70F9")
    .set("meta.scope.case-pattern", ["#C8FF00", "bold"])
    .merge(
        smMap
            .set(
                ["s!magicFunction.builtin", "s!magicFunction.declaration"],
                "#c562ff"
            )
            .set("s!selfParameter", "#9ce5ff")
            .set("s!property.declaration:python", "+u")
            .set("s!variable.typeHint", ["#ff8000", "+b"])
            .set("s!function.defaultLibrary", "#f66595")
            .set("s!variable.defaultLibrary", ["#80fb92", "+b"])
            .set("s!class.builtin", ["#ffea00", "+b"])
            .set("s!class.decorator.builtin", "#e900d1")
            .set("s!*.typeHint", "italic")
    )

/*
,
      "class.builtin": {
        "bold": true,
        "foreground": "#ffea00"
      },
      "class.decorator.builtin": {
        "bold": false,
        "foreground": "#e900d1"
      },
      "variable.defaultLibrary": {
        "bold": true,
        "foreground": "#80fb92"
      }
       {
        "scope": "support.function.builtin", // python
        "settings": {
          "foreground": "#FB70F9"
        }
      },
            {
        "scope": "meta.scope.case-pattern", // python
        "settings": {
          "foreground": "#C8FF00",
          "fontStyle": "bold"
        }
      },*/
