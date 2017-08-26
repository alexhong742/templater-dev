const fs = require('fs');

const sassRule = {
  test: "/\\.scss$/",
  use: [
    { loader: "style-loader" }, 
    { loader: "css-loader" }, 
    { loader: "sass-loader" }
  ],
};

const imageLoaderRule = {
  test: "/\\.(gif|png|jpe?g|svg)$/i",
  loaders: [
    {
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[ext]'
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {
        query: {
          mozjpeg: {
            progressive: true,
          },
          gifsicle: {
            interlaced: true,
          },
          optipng: {
            optimizationLevel: 7,
          },
        }
      },
    }
  ]
};

// OPTIONS: outputFileName: string, useSass: boolean, webpackImageLoader: boolean
// -------------------------------------------------------------------------------

function webpackParser(options) {
  fs.readFile('./webpackTemplate.js', 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('./webpack.config.js', data, (writeErr) => {
      if (writeErr) throw writeErr;
      fs.readFile('./webpack.json', 'utf8', (err2, data1) => {
        if (err2) throw err;
        const webpackSettings = JSON.parse(data1);
        webpackSettings.output.filename = options.outputFileName || webpackSettings.output.filename;
        if (options.useSass) webpackSettings.module.rules[1] = sassRule;
        if (options.webpackImageLoader) webpackSettings.module.rules.push(imageLoaderRule)
        fs.appendFile('./webpack.config.js', JSON.stringify(webpackSettings, null, 1), (err1) => {
          if (err1) throw err1;
          console.log('filelistAsync complete');
        });
      });
    });
  });
}

module.exports = webpackParser;
