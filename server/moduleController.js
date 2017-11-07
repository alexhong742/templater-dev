const path = require('path');
var copy = require('recursive-copy');

const src = (include) => {
  return path.join(__dirname, `./../store/options/${include}`)
}

module.exports = {

  assets(req, res, next) {
    if (!req.body.dirSelection.assets) {
      console.log(req.body.dirSelection.assets, "req.body.dirSelection.assets")
      next();
    } else {
      const assetsDir = path.join(__dirname, './../store/polymerUI/client/assets/');
      copy(src('assets'), assetsDir, (err,result) => {
        if (err){console.log('Copy Failed: ' + err)}
        else {
          console.info('Copied ' + result.length + ' asset files');
          next();
        }
      })
    }
  },

  components(req, res, next) {
    if (!req.body.dirSelection.components) {
      console.log('components middleware was hit')
      next();
    } else {
      const componentsDir = path.join(__dirname, './../store/polymerUI/client/components/');
      copy(src('components'), componentsDir, (err,result) => {
        if (err){console.log('Copy Failed: ' + err)}
        else {
          console.info('Copied ' + result.length + ' component files')
          next();
        }
      });
    } 
  },

  style(req, res, next) {
    if (!req.body.dirSelection.style) {
      console.log('style middleware was hit')
      next();
    } else {
      const styleDir = path.join(__dirname, './../store/polymerUI/client/style/');
      copy(src('style'), styleDir, (err,result) => {
        if(err){console.log('Copy Failed: ' + err)}
        else{
          console.info('Copied ' + result.length + ' style files')
        }
        next();
      });
    }
  },
}


// (req,res,next) => {

//   let assetsDir = path.join(__dirname, './../store/polymerUI/client/assets/')
//   let componentsDir = path.join(__dirname, './../store/polymerUI/client/components/')
//   let stylesDir = path.join(__dirname, './../store/polymerUI/client/styles/')
//   function fromd(elem){
//     return path.join(__dirname, `./../store/options/${elem}`)
//   }

//   if(req.body.assets){
//     copy(fromd('assets'), assetsDir, (err,result)=>{
//         console.log(fromd("assets"), 'Assets have been copied')
//         if(err){console.log('Copy Failed: ' + err)}
//         else{console.info('Copied ' + result.length + ' files')}
//         next()
//     })
//   }
//   // if(req.body.components){
//   //   copy(fromd('components'), componentsDir, (err,result)=>{
//   //       console.log(fromd("components"), 'Components have been copied')
//   //       if(err){console.log('Copy Failed: ' + err)}
//   //       else{console.info('Copied ' + result.length + ' files')}
//   //       next()
//   //   })
//   // }
//   // if(req.body.styles){
//   //   copy(fromd('styles'), stylesDir, (err,result)=>{
//   //       console.log(fromd("assets"), 'Styles have been copied')
//   //       if(err){console.log('Copy Failed: ' + err)}
//   //       else{console.info('Copied ' + result.length + ' files')}
//   //       next()
//   //   })
//   // }


// }