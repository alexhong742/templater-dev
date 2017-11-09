const path = require('path')
var copy = require('recursive-copy');

module.exports = (req,res,next) => {

  let source = path.join(__dirname, './../store/template')
  let destination = path.join(__dirname, './../store/polymerUI')

  copy(source, destination, function(error, results) {
    if (error) {
    console.error('Copy failed: ' + error);
    } else {
    console.info('Copied in template controller' + results.length + ' files');
    next()
    }
    
  });
}