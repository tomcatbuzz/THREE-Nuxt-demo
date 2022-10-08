module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no console': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/valid-attribute-name': 'off',
    'vue/valid-model-definition': 'off'
  }
}
