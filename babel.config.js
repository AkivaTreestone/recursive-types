// ONLY USE BABEL FOR UNIT TESTING

module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript'
    ],
};