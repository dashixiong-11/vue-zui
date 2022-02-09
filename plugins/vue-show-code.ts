// @ts-nocheck
import path from 'path'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'
import marked from 'marked'

export const vueShowCode = {
    name: 'vue-show-code',
    transform: (code, id) => {
        if (!/vue&type=demo/.test(id)) {
            return
        }
        const path = id.split('?')[0]
        const file = fs.readFileSync(path).toString()
        const parsed = baseParse(file).children.find(n => n.tag === 'demo')
        const title = parsed.children[0].content
        const main = file.split(parsed.loc.source).join('').trim()
        return `export default  (Component) => {
        Component.__sourceCode = ${
            JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
}
