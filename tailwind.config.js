const mode = process.env.NODE_ENV === 'production'
module.exports = {
  purge: {
    enabled: mode,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
      './src/**/*.tsx',
    ],
  },
  theme: {},
  variants: {},
  plugins: [],
}
