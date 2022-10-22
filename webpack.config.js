const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/app/app.tsx',
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
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
          },
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
      '&models': path.resolve(__dirname, 'src/models/'),
      '&features': path.resolve(__dirname, 'src/features/'),
      '&widgets': path.resolve(__dirname, 'src/widgets/'),
      '&shared': path.resolve(__dirname, 'src/shared/'),
      '&pages': path.resolve(__dirname, 'src/pages/'),
      '&entities': path.resolve(__dirname, 'src/entities/'),
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
