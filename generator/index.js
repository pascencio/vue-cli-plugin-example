const debug = require('debug')('vue-cli-plugin-example:generator')
const frameworks = require('../frameworks')

module.exports = (api, options) => {
    const helper = require('./helper')(api)
    const code = options.framework
    const version = frameworks.version(code)
    const template = frameworks.template(code)

    let pkg = {
        'dependencies': {},
    };

    pkg.dependencies[code] = version

    api.extendPackage(pkg);

    api.render(`./template/${template}`, { ...options
    });

    api.onCreateComplete(() => {
        debug('framework code: ', code)
        debug('framework version: ', version)
        debug('plugin options: ', options)
        helper.rename((error) => {
            if (!error) {
                helper.updateMain((lines) => {
                    debug('lines: ', JSON.stringify(lines))
                    const vueImportIndex = lines.findIndex(line => line.match(/^import Vue/))

                    lines.splice(vueImportIndex + 1, 0, 'import \'./plugins/example\'')

                    return lines
                });
            }
        });
    });
}