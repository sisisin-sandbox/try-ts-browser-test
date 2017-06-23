const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options:{
          configFileName: './tsconfig.dev.json'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  }
};
