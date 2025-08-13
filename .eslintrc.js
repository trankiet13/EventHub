// module.exports = {
//   root: true,
//   extends: '@react-native',
// };
module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-internal-modules': ['error', {
      allow: ['react-native', 'react', '**/src/**']
    }]
  }
}

