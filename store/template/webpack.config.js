//Generally a good practice to import webpack
const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'client'),
  entry: {
    app: ['./index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [ "transform-class-properties" ]
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" } 
        ],
      },
    ],
  },
};
