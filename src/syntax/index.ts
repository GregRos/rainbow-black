import diff from "./ide/diff.js"
import editor from "./ide/editor.js"
import csharp from "./langs/csharp.js"
import css from "./langs/css.js"
import fsharp from "./langs/fsharp.js"
import githubActions from "./langs/github-actions.js"
import js from "./langs/js.js"
import jsdoc from "./langs/jsdoc.js"
import json from "./langs/json.js"
import markdown from "./langs/markdown.js"
import python from "./langs/python.js"
import shell from "./langs/shell.js"
import tex from "./langs/tex.js"
import toml from "./langs/toml.js"
import yaml from "./langs/yaml.js"

import core from "./parts/core.js"
import modules from "./parts/modules.js"
import regexp from "./parts/regexp.js"
import strings from "./parts/strings.js"
import types from "./parts/types.js"
import variables from "./parts/variables.js"
export default diff.merge(
    editor,
    jsdoc,
    csharp,
    fsharp,
    css,
    js,
    githubActions,
    tex,
    markdown,
    json,
    yaml,
    toml,
    shell,
    python,
    core,
    modules,
    types,
    regexp,
    strings,
    variables
)
