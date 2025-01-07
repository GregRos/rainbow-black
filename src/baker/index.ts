import { combineValues, parseScopes } from "./basic.js"
import type { TmOrSmMap } from "./parts.js"

export default function bake(mp: TmOrSmMap) {
    const tmScopeList = [] as any[]
    const smScopeRecord = {} as Record<string, any>
    for (const [key, value] of mp.entries()) {
        const scopes = parseScopes(key)
        const valueToParse = Array.isArray(value) ? value : [value]
        const combined = combineValues(valueToParse)
        if (scopes.sm.length > 0) {
            for (const smScope of scopes.sm) {
                smScopeRecord[smScope] = combined
            }
        } else {
            tmScopeList.push({
                scope: scopes.tm,
                settings: combined
            })
        }
    }
    return {
        tm: tmScopeList,
        sm: smScopeRecord
    }
}
