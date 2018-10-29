const frameworks = require('./frameworks')
module.exports = [{
    type: 'confirm',
    name: 'firstPlugin',
    message: 'This is your first plugin?',
    default: true
}, {
    type: 'list',
    name: 'framework',
    message: 'Which component framework do you use?',
    choices: frameworks.choices()
}];