const zipFolder = require('zip-folder');
const path = require('path');
const remover = require('./remover.js');

module.exports = (req,res,next) => {
  try {
    zipFolder(path.join(__dirname, './../store/polymerUI'), './server/templateStore/zippedFile.zip', function(err) {
      if (err) {
        console.log('zipFolder Error!: ', err);
      } else {
        remover(req, res, next);
        console.log('zipped');
      }
    })
   } catch (err) {
      console.log('zipFolder Error!: ', err);
      next();
   };
  };
