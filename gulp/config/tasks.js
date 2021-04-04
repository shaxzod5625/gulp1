const fileSystem = require('fs'),
// добавить     ./
path = './gulp/tasks',
arrayPathFils = fileSystem.readdirSync(path).map(cell=> cell = path + '/' + cell)
module.exports = arrayPathFils
