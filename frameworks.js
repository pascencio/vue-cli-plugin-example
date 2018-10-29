const frameworks = {
    'vuetify': {
        name: 'Vuetify',
        version: '^1.3.0',
        template: 'vuetify',
    },
    'bootstrap-vue': {
        name: 'Bootstrap Vue',
        version: '^2.0.0-rc.11',
        template: 'bootstrap',
    }
};

function findByCode(code) {
    return frameworks[code];
}

function isObject(obj) {
    return typeof obj === 'object'
}

module.exports.choices = function () {
    return Object.keys(frameworks).map(key => {
        return {
            name: frameworks[key].name,
            value: key,
        }
    });
};

module.exports.template = function (code) {
    const framework = findByCode(code)
    return typeof framework === 'object' ? framework.template : undefined;
}

module.exports.version = function (code) {
    const framework = findByCode(code)
    return isObject(framework) ? framework.version : undefined;
}