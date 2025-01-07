import { TokenColorSetting } from "vscode-typed-theme-generator"
export type FontStyle = TokenColorSetting["fontStyle"]
/** Colors and styles for the token. */
export interface TmSettings extends TokenColorSetting {
    background?: string
}
/** Colors for syntax highlighting */
export interface TmStyle {
    /** Description of the rule. */
    name?: string
    /** Scope selector against which this rule matches. */
    scope: string | string[]
    /** Colors and styles for the token. */
    settings: TmSettings
}

export type SmSettings = {
    foreground?: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strikethrough?: boolean
}
