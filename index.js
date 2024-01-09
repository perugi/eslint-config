module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  // Make sure this is last, so it gets the chance to override the other configurations.
  extends: ["airbnb-base", "prettier"],
};
