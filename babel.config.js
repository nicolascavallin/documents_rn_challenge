module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        alias: {
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@theme": "./src/theme",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
