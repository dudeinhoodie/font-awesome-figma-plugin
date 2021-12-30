const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/ui.tsx',
    code: './src/code.ts',
  },

  devServer: {
    contentBase: './dist',
    writeToDisk: true,
  },

  module: {
    rules: [
      {
        test: /\.ts?x?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : true,
              },
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(png|jpg|gif|webp|svg|zip)$/,
        loader: [{ loader: 'url-loader' }],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '&components': path.resolve(__dirname, 'src/components/'),
    },
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      inlineSource: '.(js)$',
      chunks: ['ui'],
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ],
});
