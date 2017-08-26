let findRemoveSync = require('find-remove')
let path = require('path')

module.exports = (req,res,next) => {
    let variable = findRemoveSync(path.join(__dirname, './../store/polymerUI'), {dir: "*", files: "*.*"})
}


