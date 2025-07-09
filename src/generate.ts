import { writeFileSync } from "fs"
import { cloneDeep } from "lodash-es"
import type { VsCodeTheme } from "vscode-typed-theme-generator"
import bake from "./baker/index.js"
import syntax from "./syntax/index.js"
import workbench from "./workbench/index.js"
const baked = bake(syntax)
const theme: VsCodeTheme = {
    $schema: "vscode://schemas/color-theme",
    name: "rainbow-black",
    colors: workbench,
    tokenColors: baked.tm,
    semanticTokenColors: baked.sm,
    semanticHighlighting: true
}
writeFileSync(
    "themes/rainbow-black-color-theme.json",
    JSON.stringify(theme, null, 4)
)
function writeBlogTheme() {
    const obj = cloneDeep(theme)
    for (const key of [
        "colors",
        "semanticTokenColors",
        "semanticHighlighting"
    ]) {
        delete obj[key]
    }
    writeFileSync(
        "themes/rainbow-black.shiki.json",
        JSON.stringify(obj, null, 4)
    )
}
writeBlogTheme()
await new Promise(resolve => setTimeout(resolve, 10000000))
