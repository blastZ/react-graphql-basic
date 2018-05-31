const webpack = require('webpack');
const  htmlPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'split'
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlPlugin({
      inject: true,
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(argv.mode),
        "GITHUB_ACCESS_KEY": JSON.stringify(`7d530aa97e96c0d85aae1b9b6fb4f60155446d6a`)
      }
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8888,
    historyApiFallback: true
  }
})