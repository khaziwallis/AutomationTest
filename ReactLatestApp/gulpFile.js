"use strict";

var gulp = require('gulp')
var source = require('vinyl-source-stream')
var plugins = require('gulp-load-plugins')();

var startStubby = function () {
    gulp.src('').pipe(plugins.shell(['node_modules/stubby/bin/stubby -mw -d mocks.json -l localhost -s 3000']));
};

gulp.task('mocks', function () {
    return gulp.src('./api-mocks/**/*.yaml')
        .pipe(plugins.concat('mocks.json'))
        .pipe(plugins.yaml({ space: 2 }))
        .pipe(gulp.dest('./'));
});

gulp.task('onlystubbed', ['mocks'], function () {
    startStubby();
});//server:stubbed
