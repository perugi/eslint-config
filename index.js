module.exports = {
  rules: {
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": ["error", { props: false }],
    "import/extensions": ["error", "never", { mjs: "always" }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-underscore-dangle": [
      "error",
      {
        enforceInMethodNames: false,
        enforceInClassFields: false,
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
  },
};
