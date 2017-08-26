module.exports = {
  sassRule: {
    test: "/\\.scss$/",
    use: [
      { loader: "style-loader" }, 
      { loader: "css-loader" }, 
      { loader: "sass-loader" }
    ],
  },
  imageLoaderRule: {
    test: "/\\.(gif|png|jpe?g|svg)$/i",
    loaders: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        },
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
          },
        },
      },
    ],
  },
};
