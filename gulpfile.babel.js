'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import webpack from 'gulp-webpack';
import clean from 'gulp-clean';
import minifyCss from 'gulp-minify-css';

gulp.task('webpack', () => {
    return gulp.src('./app/app.module.js')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('app'));
});

gulp.task('frontend', () => {
    return gulp.src('./frontend/app.module.js')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('frontend'));
});

gulp.task('custom', () => {
    return gulp.src('./backend/app/form/test.js')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('backend/app/form'));
});

gulp.task('clean', function () {
    return gulp.src('app/build/bundle.js.map')
        .pipe(clean({force: true}));
});

gulp.task('config', function () {
    return gulp.src('./backend/config/**.*')
        .pipe(gulp.dest('./backend/src/'));
});

gulp.task('font', function () {
    return gulp.src([
            './node_modules/font-awesome/fonts/**.*',
            './node_modules/bootstrap-sass/assets/fonts/**/**.*'
        ])
        .pipe(gulp.dest('./app/build/fonts'));
});

gulp.task('angular-sass', function () {
    return gulp.src('./frontend/styles/angular.scss')
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

gulp.task('sass', function () {
    return gulp.src('./frontend/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./frontend/build'));
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

gulp.task('build', ['config', 'font', 'sass', 'webpack', 'clean']);
