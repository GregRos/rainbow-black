import { tmMap } from "../../baker/parts.js"
import * as c from "../colors.js"
export default tmMap
    .set("meta.definition.variable.scss", "")
    .set("keyword.operator.css", c.op_css)
    .set("entity.other.attribute-name", c.property_1)
    .set(
        [
            "entity.other.attribute-name.class",
            "entity.other.attribute-name.class punctuation.definition.entity"
        ],
        [c.medium_object, "bold underline"]
    )
    .set(
        [
            "entity.other.attribute-name.id",
            "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        [c.strong_object, "bold underline"]
    )
    .set("support.function.misc.scss", c.keyword_4)
    .set("entity.name.tag.reference.scss", [c.alt_object, "bold underline"])
    .set(
        ["entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"],
        [c.alt_object, "italic bold underline"]
    )
    .set("entity.other.attribute-name.pseudo-class.css", [c.css_pseudo_class, "bold"])
    .set("entity.other.attribute-name.pseudo-element.css", [c.css_pseudo_element, "bold"])
    .set("meta.property-name.media-query.scss", [c.variable, "underline"])

    .set("constant.numeric.css", c.light_text)
    .set("support.type.property-name.css", c.main_active)
    .set("support.type.vendored.property-name.css", [c.active_1, "italic"])
    .set("support.constant.property-value.css", c.keyword_1)
    .set("entity.other.attribute-name.placeholder", [c.special_object, "underline"])
    .set("meta.at-rule.extend entity.other.attribute-name.placeholder", "")
    .set("support.function.misc.css", c.active_alt)
    .set("meta.at-rule.function support.function.misc", "underline")
    .set("variable.interpolation.scss variable.scss", "")
    .set("meta.at-rule.mixin entity.name.function", [c.active_magic, "underline"])
    .set(
        [
            "keyword.other.unit.percentage",
            "keyword.other.unit.fr",
            "keyword.other.unit.ch",
            "keyword.other.unit.ex",
            "keyword.other.unit.cap"
        ],
        c.flex_unit_1
    )
    .set(
        [
            "keyword.other.unit.vw",
            "keyword.other.unit.vmin",
            "keyword.other.unit.vmax",
            "keyword.other.unit.vh"
        ],
        c.magic_unit_1
    )
    .set(["keyword.other.unit.rem", "keyword.other.unit.em"], c.hard_unit_2)
    .set("keyword.other.unit.px", c.hard_unit_1)
    .set(["meta.at-rule.include entity.name.function"], [c.active_magic, ""])
    .set(
        ["keyword.control.at-rule.include", "keyword.control.at-rule.extend"],
        [c.active_magic, "bold"]
    )
    .set("meta.property-value.scss variable.scss", "")
    .set("keyword.other.unit", c.magic_unit_2)
    .set("entity.name.tag.css", [c.weak_object, "bold underline"])
    .set("meta.definition.variable.map.scss", c.active_magic)
    .set("meta.property-list.scss variable.scss", [c.variable, ""])
    .set("meta.definition.variable", c.variable)
    .set("keyword.other.important", [c.interjection, "italic"])
    .set("meta.definition.variable.scss", "")
    .set("support.type.property-name.media", c.property_1)
    .set("meta.attribute-selector entity.other.attribute-name", c.css_attr_name)
    .set("meta.attribute-selector.scss", c.css_attr_selector_scss)
    .set("meta.attribute-selector.scss", c.css_attr_name)
    .set("punctuation.terminator.rule", [c.special_1])
    .set("keyword.control.content.scss", [c.active_magic, "bold"])
    .set(["constant.other.color.rgb-value", "support.constant.color"], [c.color_value])
    .set("punctuation.section.property-list.begin.bracket.curly", "bold")
    .set("meta.at-rule.include.scss entity.name.function", [c.css_at_rule_include, ""])
    .set("keyword.operator.scss, keyword.operator.css", c.tex_align)
