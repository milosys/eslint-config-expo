module.exports = {
  env: { 'react-native/react-native': true },
  extends: [
    '@milosys/eslint-config-react',
  ],
  parserOptions: {
    ecmaFeature: {
      jsx: true,
    },
  },
  plugins: [
    'react-native',
  ],
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
}
