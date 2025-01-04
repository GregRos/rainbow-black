export type FontStyle =
    | ""
    | "italic"
    | "bold"
    | "underline"
    | "strikethrough"
    | "italic bold"
    | "italic underline"
    | "italic strikethrough"
    | "bold underline"
    | "bold strikethrough"
    | "underline strikethrough"
    | "italic bold underline"
    | "italic bold strikethrough"
    | "italic underline strikethrough"
    | "bold underline strikethrough"
    | "italic bold underline strikethrough"
/** Colors and styles for the token. */
export interface TmSettings {
    /**
     * Font style of the rule: 'italic', 'bold', 'underline', 'strikethrough' or
     * a combination. The empty string unsets inherited settings.
     */
    fontStyle?: FontStyle
    /** Foreground color for the token. */
    foreground?: string
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
