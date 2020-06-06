export const presets = ['module:metro-react-native-babel-preset'];
export const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        'test/*': './test/',
      },
    },
  ],
];
