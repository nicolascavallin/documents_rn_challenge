module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["error", "double"],
    "react/jsx-indent": ["warn", 2, { indentLogicalExpressions: false }],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    // this is for sorting imports
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "internal",
          },
          {
            pattern: "@theme/**",
            group: "internal",
          },
          {
            pattern: "@theme",
            group: "internal",
          },
          {
            pattern: "@components/**",
            group: "internal",
          },
          {
            pattern: "@screens/**",
            group: "internal",
          },
          {
            pattern: "@assets/**",
            group: "internal",
          },
          {
            pattern: "@context/**",
            group: "internal",
          },
          {
            pattern: "@utils/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
};
