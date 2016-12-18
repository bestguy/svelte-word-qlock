const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, './src/index')
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'Qlock.js'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.less/, loader: 'style-loader!css-loader!postcss-loader!less-loader' },
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      postcss: [
        autoprefixer({ browsers: ['last 2 versions'] })
      ]
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};
