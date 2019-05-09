module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-irregular-whitespace': 'off',
    'no-console': 'off',
    'nuxt/no-this-in-fetch-data':'off',
    'require-await': 'off',
    'prettier/prettier': 'off',
    'no-unused-expressions':'off',
    'camelcase': 'off',
    'camelcase': 'off',
    'no-sequences' :'off'
  }
}
