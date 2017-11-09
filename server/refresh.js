let findRemoveSync = require('find-remove')
let path = require('path')

module.exports = (req,res,next) => {
    try{
        console.log("page refreshed")
        let variable = findRemoveSync(path.join(__dirname, './../store/polymerUI'), {dir: "*", files: "*.*"})
        let zipped = findRemoveSync(path.join(__dirname, './templateStore/'), {dir: "*", files: "*.*"})
    } catch(err) {
        console.log('error with fileRemover ', err);
    }
    next();
}


