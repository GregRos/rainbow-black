import { Map } from "immutable"
import type { FontStyle } from "../vscode.types.js"
type Sign = "+" | "-"
type B = `${Sign}b` | ""
type I = `${Sign}i` | ""
type U = `${Sign}u` | ""
type S = `${Sign}s` | ""
export type TmKey = string | string[]
export type FontFlags = `${B}${I}${U}${S}`
export type Color = `#${string}`
export type StyleFormatting = FontFlags | FontStyle
export type SemanticKey = `s!${string}`

export type TmValue = [Color?, FontStyle?, Color?] | Color | FontStyle

export const tmMap = Map<TmKey, TmValue>()

export type SmValue =
    | [Color?, (FontStyle | FontFlags)?]
    | Color
    | FontStyle
    | FontFlags
export type SmKey = SemanticKey | SemanticKey[]
export const smMap = Map<SmKey, SmValue>()

export type TmOrSmKey = TmKey | SmKey
export type TmOrSmValue = TmValue | SmValue
export type TmOrSmMap = Map<TmOrSmKey, TmOrSmValue>
