const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: [path.resolve('./')],
        extensions: ['.ios.js', '.android.js', '.js', '.tsx', '.ts', '.json'],
        alias: {
          '@mockData': './resources/jsonData',
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@constants': './src/constants',
          '@mockData':'./resources/jsonData'
        },
      },
    ],
  ],
};
