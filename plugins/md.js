// @ts-nocheck
import path from 'path';
import fs from 'fs';
import marked from 'marked';
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 请注意，当前文件的后缀从 .js 改为了 .ts
// 如果你看到这行注释，请确认文件后缀是 .ts
// 然后就可以删掉本注释了!!!!!!!!!!!!!!!!
const mdToJs = str => {
    const content = JSON.stringify(marked(str));
    return `export default ${content}`;
};
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
    return res.send(string);
};
export const md = {
    name: 'md',
    transform: (code, id) => {
        if (!/.md/.test(id))
            return;
        return mdToJs(code);
    },
    configureServer: ({ app }) => {
        app.use(async (req, res, next) => {
            if (/.md/.test(req.url)) {
                // console.log(req._parsedUrl.pathname);
                const filePath = path.join(process.cwd(), req._parsedUrl.pathname);
                const string = mdToJs(fs.readFileSync(filePath).toString());
                res.send = send;
                handler(req, res, string);
            }
            else {
                next();
            }
        });
    },
    /*
            transform: (code, id) => {
                if (!/.md/.test(id)) return
               return mdToJs(code)
            }
    */
    /*
            transforms: [{  // 用于 rollup // 插件
                test: context => context.path.endsWith('.md'),
            }]
    */
};
