module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [
    {
      env: {
        node: true,
        "jest/globals": true,
      },
      files: [".eslintrc.js", ".eslintrc.cjs"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "eol-last": ["error", "always"],
    quotes: ["error", "double"],
    "no-console": "off",
    "linebreak-style": ["error", "windows"],
  },
};
