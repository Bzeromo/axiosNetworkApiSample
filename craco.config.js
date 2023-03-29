const path = require('path');

module.exports = {
    babel: {
        "presets": ["@emotion/babel-preset-css-prop"],
    },
    Webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@hoo': path.resolve(__dirname, 'src/hooks'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@pages': path.resolve(__dirname, 'src/pages'),
        }
    }
};