module.exports = ({ file, options, env }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
    plugins: {
        'postcss-import': { root: file.dirname },
        'postcss-preset-env': options['postcss-preset-env'] ? options['postcss-preset-env'] : false,
        'cssnano':  env === 'production'  ? {} : false
    }
})