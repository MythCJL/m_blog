module.exports = {
    parser: 'babel-eslint',

    extends: 'airbnb',

    env: {
      'browser': true,
      'node': true,
    },

    plugins: [
      'react',
      'import',
      'jsx-a11y',
    ],

    rules: {
      'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
      'import/extensions': [0],
    },

}
