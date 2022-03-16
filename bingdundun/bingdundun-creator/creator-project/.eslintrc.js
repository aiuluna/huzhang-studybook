module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "no-var-requires": false,
    "no-submodule-imports": false,
    "object-literal-sort-keys": false,
    "jsx-no-lambda": false,
    "no-implicit-dependencies": false,
    "no-console": false,
    "interface-name": false,
    "ordered-imports": false,
    "interface-over-type-literal": false,
    "no-shadowed-variable": false,
    "prefer-const": false,
    "no-debugger": false,
    "no-object-literal-type-assertion": false,
    "member-access": false,
    "no-string-literal": false,
    "ban-types": false,
    "no-unused-expression": false,
    "no-bitwise": false,
    "ban-comma-operator": false,
    "variable-name": false,
    "prefer-conditional-expression": false
  },
};