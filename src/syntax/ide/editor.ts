import { tmMap } from "../../builder/type.js"

export default tmMap
    .set("ref.matchtext", "#FFFFFF")
    .set("token.info-token", "#6796E6")
    .set("token.warn-token", "#CD9731")
    .set("token.error-token", "#F44747")
    .set("token.debug-token", "#B267E6")
    .set("invalid.broken", ["#FFA198", "italic"])
    .set("invalid.deprecated", ["#FFA198", "italic"])
    .set("invalid.illegal", ["#FFA198", "italic"])
    .set("invalid.unimplemented", ["#FFA198", "italic"])
    .set("carriage-return", ["#F0F6FC", "italic underline"])
    .set("message.error", "#FFA198")
    .set(
        [
            "brackethighlighter.tag",
            "brackethighlighter.curly",
            "brackethighlighter.round",
            "brackethighlighter.square",
            "brackethighlighter.angle",
            "brackethighlighter.quote"
        ],
        "#8B949E"
    )
    .set("brackethighlighter.unmatched", "#FFA198")
