const path = require('path');
const fs = require('fs');
const vars = require('./utils/templates/webpackVars.js');

module.exports = {
  packageParser(req, res, next) {
    console.log("packageparser")
    // if (!req.body.packageJson.name && !req.body.packageJson.author) next();
    fs.readFile(path.join(__dirname, './../store/polymerUI/package.json'), 'utf8', (err, data) => {
      const options = req.body.packageJson;
      if (err) throw err;
      const pkg = JSON.parse(data);
      if (options.name) pkg.name = options.name;
      if (options.author) pkg.author = options.author;
      const pkgJson = JSON.stringify(pkg, null, 1);
      fs.writeFile(path.join(__dirname, './../store/polymerUI/package.json'), pkgJson, (error) => {
        if (error) throw error;
        next();
      });
    });
  },

  webpackParser(req, res, next) {
    console.log('hello')
    const options = req.body.webpackConfig;
    fs.readFile(path.join(__dirname, './utils/templates/webpackTemplate.js'), 'utf8', (err, data) => {
      if (err) throw err;
      fs.writeFile(path.join(__dirname, './../store/polymerUI/webpack.config.js'), data, (writeErr) => {
        if (writeErr) throw writeErr;
        fs.readFile(path.join(__dirname, './utils/templates/webpack.json'), 'utf8', (err2, data1) => {
          if (err2) throw err;
          const webpackSettings = JSON.parse(data1);
          webpackSettings.output.filename = options.outputFileName || webpackSettings.output.filename;
          if (options.useSass) webpackSettings.module.rules[1] = vars.sassRule;
          if (options.fileLoader) webpackSettings.module.rules.push(vars.imageLoaderRule);
          // TODO: Check out a way to prettify the output. Currently output is not well formatted
          fs.appendFile(path.join(__dirname, './../store/polymerUI/webpack.config.js'), JSON.stringify(webpackSettings, null, 1), (err1) => {
            if (err1) throw err1;
            console.log('filelistAsync complete');
            next();
          });
        });
      });
    });
  },

};
