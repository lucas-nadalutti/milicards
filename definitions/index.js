
var requireAll = require('require-all')

module.exports = {

    cards: requireAll(__dirname + '/cards'),
    abilities: requireAll(__dirname + '/abilities')

}