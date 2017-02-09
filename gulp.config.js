/**
 * Created by songyechun on 16/12/1.
 */
module.exports = function () {
    var src = './src/';
    var build = './dist/';
    var config = {
        src: src,
        build: build,
        index: src + 'index.html',
        css: [src + '**/*.css'],
        appJs: [src + 'app/**/*.js'],
        commonJs: [src + 'common/**/*.js'],
        componentsJs: [src + 'components/**/*.js'],
        jsOrder: [
            '**/app.js',
            '**/app.*.js',
            '**/module.js',
            '**/router.js',
            '**/index.js',
            '**/*.js'
        ],
        cssOrder: [
            '**/app.css',
            '**/*.module.css',
            '**/*.css'
        ]
    };
    return config;
}();