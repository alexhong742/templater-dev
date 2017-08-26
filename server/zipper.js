const zipFolder = require('zip-folder');
const path = require('path');
const remover = require('./remover.js');

module.exports = (req,res,next) => {
  zipFolder(path.join(__dirname, './../store/polymerUI'), './server/templateStore/zippedFile.zip', function(err) {
    if (err) {
      console.log('oh no!', err);
    } else {
      remover();
      console.log('zipped');
    }
    next();
  });
};
