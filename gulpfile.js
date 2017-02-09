/**
 * Created by songyechun on 16/12/1.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./gulp.config');
var order = require('gulp-order');
var inject = require('gulp-inject');
var watch = require('gulp-watch');

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './',
            index: 'src/index.html'
        }
    });
});

gulp.task('default', ['inject', 'browser-sync', 'watch']);

// 使用gulp-inject动态插入css和js
gulp.task('inject', function () {
    var appJs = gulp.src(config.appJs, {read: false}).pipe(order(config.jsOrder));
    var css = gulp.src(config.css, {read: false}).pipe(order(config.cssOrder));
    var componantJs = gulp.src(config.componentsJs, {read: false}).pipe(order(config.jsOrder));
    return gulp
        .src(config.index)
        .pipe(inject(componantJs, {addPrefix: '../src', relative: true, name: 'componants'}))
        .pipe(inject(appJs, {addPrefix: '../src', relative: true}))
        .pipe(inject(css, {addPrefix: '../src', relative: true}))
        .pipe(gulp.dest(config.src))
        .pipe(browserSync.reload({stream: true}));
});

// 自动执行插入文件
gulp.task('watch', function () {
    watch('src/**/*.js', function () {
        gulp.run('inject');
    });
    watch('src/**/*.css', function () {
        gulp.run('inject');
    });
});
