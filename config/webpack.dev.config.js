const path = require('path');
const {
  merge
} = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devConfig = {
  mode: 'development', // dev mode
  entry: path.join(__dirname, "../example/src/app.js"),
  output: {
    path: path.join(__dirname, "../example/src/"),
    filename: "bundle.js", // 使用webpack-dev-sevrer启动开发服务时，并不会实际在`src`目录下生成bundle.js，打包好的文件是在内存中的，但并不影响我们使用。
  },
  module: {
    rules: [{
        test: /\.css$/,
        exclude: /\.min\.css$/,
        use: ['style-loader', 'css-loader?modules'],
      },
      {
        test: /\.min\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.join(__dirname, '../example/src/index.html'),
      inject: 'body',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../example/src/'),
    compress: true,
    host: '127.0.0.1', // use ip instead localhost
    port: 10010,
    open: true
  },
};
module.exports = merge(devConfig, baseConfig);