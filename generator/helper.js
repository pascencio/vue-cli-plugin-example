const fs = require('fs')

module.exports = function (api) {
    return {
        rename(callback) {
            try {
                const origin = api.resolve('./src/components/HelloWorld.vue')
                const rename = api.resolve('./src/components/HelloWorldExample.vue')

                fs.unlinkSync(origin)
                fs.renameSync(rename, origin)
                callback()
            } catch (e) {
                callback(e)
            }
        },
        updateMain(callback) {
            const tsPath = api.resolve('./src/main.ts')
            const jsPath = api.resolve('./src/main.js')

            const mainPath = fs.existsSync(tsPath) ? tsPath : jsPath
            let content = fs.readFileSync(mainPath, {
                encoding: 'utf8'
            })

            let lines = content.split(/\r?\n/g)

            lines = callback(lines)

            content = lines.join('\n')
            fs.writeFileSync(mainPath, content, {
                encoding: 'utf8'
            })
        }
    }
}