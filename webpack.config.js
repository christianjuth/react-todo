module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry: "./js/client.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: "client.min.js"
  }
}