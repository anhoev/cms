'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('gulp-webpack');
const clean = require('gulp-clean');
const minifyCss = require('gulp-minify-css');
const run = require('gulp-run');

gulp.task('frontend.lib', function() {
    return run('webpack --config lib.webpack.config.js').exec()
        .pipe(gulp.dest('.'));
});

gulp.task('frontend.app', function() {
    return run('webpack --config webpack.config.js').exec()
        .pipe(gulp.dest('.'));
});

gulp.task('bs', function () {
    return gulp.src('./frontend/styles/bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./frontend/build'));
});

gulp.task('cms-sass', function () {
    return gulp.src('./frontend/styles/cms.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./frontend/build'));
});

gulp.task('frontend_with_css', ['cms-sass', 'frontend.app']);

gulp.task('frontend', () => {
    return gulp.src('./frontend/app.module.js')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('frontend'));
});


gulp.task('clean', function () {
    return gulp.src('app/build/bundle.js.map')
        .pipe(clean({force: true}));
});

gulp.task('font', function () {
    return gulp.src([
        './node_modules/font-awesome/fonts/**.*',
        './node_modules/bootstrap-sass/assets/fonts/**/**.*'
    ])
        .pipe(gulp.dest('./app/build/fonts'));
});

gulp.task('watch', () => {
    gulp.watch([
        'app/app.module.js',
        'app/configs/config.constant.js',
        'app/components/**/*!(.spec.js).js',
        'app/common/**/*!(.spec.js).js',
        'app/**/*.html'
    ], ['webpack']);

    gulp.watch(['app/styles/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['font', 'frontend_with_css']);

