
require('ignore-styles');
require('url-loader');
require('file-loader');
require('@babel/register')({
ignore: [ /(node_modules)/ ],
presets: ['@babel/preset-env', '@babel/preset-react'],
plugins: [
    // 'syntax-dynamic-import',
    // 'dynamic-import-node',
    "babel-plugin-dynamic-import-node-babel-7",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-syntax-dynamic-import",
    'react-loadable/babel'
]
});
require('./server');
