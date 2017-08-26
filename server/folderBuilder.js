const path = require('path')
var copy = require('recursive-copy');
module.exports = (req,res,next) => {

let froms = path.join(__dirname, './../store/template')
let tos = path.join(__dirname, './../store/polymerUI')
copy(froms, tos, function(error, results) {
    if (error) {
        console.error('Copy failed: ' + error);
    } else {
        console.info('Copied ' + results.length + ' files');
    }
    next()
 });
}
