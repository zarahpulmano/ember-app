module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    "no-console": 0,
    "no-unused-vars": 0
  },
  globals: {
      "$": false,
      "sinon": false,
      "server": false,
      "Promise": false
  },
};
