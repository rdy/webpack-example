const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    compress: true,
    port: 4000,
    overlay: true,
    stats: 'minimal',
    proxy: {
      '/**': {
        target: 'http://localhost:3000',
        secure: false,
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
