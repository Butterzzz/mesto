const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /\.js$/, // регулярное выражение, которое ищет все js файлы
      use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
      exclude: '/node_modules/' // исключает папку node_modules
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/, // регулярное выражение, которое ищет все изображения
      type: 'asset/resource',
      generator: {
        filename: 'images/[name].[hash][ext]',
      }
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i, // регулярное выражение, которое ищет все файлы шрифтов
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name].[hash][ext]',
      }
    },
    {
      test: /\.css$/, // регулярное выражение, которое ищет все css-файлы
      // при обработке этих файлов нужно использовать
      // MiniCssExtractPlugin.loader и css-loader
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
        'postcss-loader'
      ]
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(), // подключение плагина для очистки dist
    new MiniCssExtractPlugin(), // подключение плагина для объединения css-файлов
  ]
}
