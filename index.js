module.exports = {
  rules: {
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": ["error", { props: false }],
    "import/extensions": ["error", "never", { mjs: "always" }],
  },
};
