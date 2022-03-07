// @ts-nocheck
import path from 'path'
import fs from 'fs'
import marked from 'marked'

const mdToJs = str => {
    const content = JSON.stringify(marked(str))
    return `export default ${content}`
}

function send(body) {
    let chunk = body;
    if (chunk) {
        chunk = Buffer.from(chunk, 'utf-8');
        this.setHeader('Content-Length', chunk.length);
    }
    this.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    this.statusCode = 200;
    this.end(chunk, 'utf8');
}

const handler = (req, res, string) => {
    return res.send(string)
}

export const md = {
    name: 'md',
    transform: (code, id) => {
        if (!/.md/.test(id)) return
        return mdToJs(code)
    },
    configureServer: ({app}) => {
        app.use(async (req, res, next) => {
            if (/.md/.test(req.url)) {
                // console.log(req._parsedUrl.pathname);
                const filePath = path.join(process.cwd(), req._parsedUrl.pathname)
                const string = mdToJs(fs.readFileSync(filePath).toString());
                res.send = send;
                handler(req, res, string);
            } else {
                next()
            }
        })
    },
}