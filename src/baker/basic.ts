import { seq } from "doddle"
import type { TmOrSmKey } from "../builder/type.js"
import type { FontStyle } from "../vscode.types.js"

export type ParsedColor = {
    type: "color"
    value: string
}

export type ParsedFontStyle = {
    type: "font-style"
    value: FontStyle
}

export type ParsedFontFlags = {
    type: "font-flags"
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strikethrough?: boolean
}

type ParsedSmScope = {
    type: "sm"
    value: string
}

type ParsedTmScope = {
    type: "tm"
    value: string
}

export type ParsedScopes = {
    sm: string[]
    tm: string[]
}

const signRegexp = /^([+-])(\w)/g
function parseFontFlags(token: string): ParsedFontFlags {
    const obj: ParsedFontFlags = { type: "font-flags" }
    const fullNames = {
        b: "bold",
        i: "italic",
        u: "underline",
        s: "strikethrough"
    }
    token.replaceAll(signRegexp, (_, sign, option) => {
        obj[fullNames[option]] = sign === "+"
        return ""
    })
    if (Object.keys(obj).length === 0) {
        return undefined
    }
    return obj
}
const fontStyleNames = new Set(["bold", "italic", "underline", "strikethrough"])
function parseValue(
    token: string
): ParsedColor | ParsedFontStyle | ParsedFontFlags {
    if (token.startsWith("#")) {
        return { type: "color", value: token }
    }
    const fontFlags = parseFontFlags(token)
    if (fontFlags !== undefined) {
        return fontFlags
    }
    const names = token.split(" ").map(x => x.trim())
    for (const name of names) {
        if (!fontStyleNames.has(name)) {
            throw new Error(`Invalid font style: ${name}`)
        }
    }
    return { type: "font-style", value: token as FontStyle }
}

export function combineValues(values: string[]) {
    const parsedValues = values.map(parseValue)
    const colors = parsedValues.filter(x => x.type === "color") as ParsedColor[]
    const fontStyles = parsedValues.filter(
        x => x.type === "font-style"
    ) as ParsedFontStyle[]
    const fontFlags = parsedValues.filter(
        x => x.type === "font-flags"
    ) as ParsedFontFlags[]
    if (colors.length > 2) {
        throw new Error(`Expected up to 2 colors, got: ${colors.join(", ")}`)
    }
    if (fontStyles.length > 1) {
        throw new Error(
            `Expected up to 1 font style, got: ${fontStyles.join(", ")}`
        )
    }
    if (fontFlags.length > 1) {
        throw new Error(
            `Expected up to 1 font flags, got: ${fontFlags.join(", ")}`
        )
    }
    const result = {} as any
    if (colors.length > 0) {
        result.foreground = colors[0].value
    }
    if (colors.length > 1) {
        result.background = colors[1].value
    }
    if (fontStyles.length === 1) {
        result.fontStyle = fontStyles[0].value
    }
    if (fontFlags.length === 1) {
        6
        Object.assign(result, fontFlags[0])
    }
    delete result.type
    return result
}

const smScopeRegexp = /^s!([*a-zA-Z0-9.:-]+)$/
const tmScopeValid = /^[*a-zA-Z0-9 .-]+$/

export function parseScopes(scopes: TmOrSmKey) {
    const arrified = Array.isArray(scopes) ? scopes : [scopes]
    const split = seq(arrified)
        .concatMap(x => x.split(","))
        .map(x => x.trim())
    const r = split
        .map(x => {
            const asSm = x.match(smScopeRegexp)
            if (asSm) {
                const [, value] = asSm

                return { type: "sm", value }
            }
            if (!tmScopeValid.test(x)) {
                throw new Error(`Invalid textmate scope: ${x}`)
            }
            return { type: "tm", value: x }
        })
        .groupBy(x => x.type)
        .toRecord(([k, v]) => [
            k as "tm" | "sm",
            v
                .map(x => x.value)
                .toArray()
                .pull()
        ])
        .pull()
    return {
        tm: r.tm ?? [],
        sm: r.sm ?? []
    } as ParsedScopes
}
