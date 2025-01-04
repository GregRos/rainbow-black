import { writeFileSync } from "fs"
import bake from "./baker/index.js"
import syntax from "./syntax/index.js"
import workbench from "./workbench/index.js"
const baked = bake(syntax)
const theme = {
    $schema: "vscode://schemas/color-theme",
    type: "dark",
    colors: workbench,
    tokenColors: baked.tm,
    semanticTokenColors: baked.sm,
    semanticHighlighting: true
}
writeFileSync(
    "themes/rainbow-black-color-theme.json",
    JSON.stringify(theme, null, 4)
)
