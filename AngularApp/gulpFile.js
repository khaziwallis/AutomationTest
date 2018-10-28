"use strict";

var gulp = require('gulp')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var plugins = require('gulp-load-plugins')();

var startStubby = function () {
    gulp.src('').pipe(plugins.shell(['node_modules/stubby/bin/stubby -mw -d mocks.json -l localhost -s 3000']));
};

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 9000
	})
});

gulp.task('browserify', function() {
    return browserify(['./app/app.js'
			,'./app/scripts/HomeController.js'])
        .bundle()
        .pipe(source('finalBuild.js'))
        .pipe(gulp.dest('./public/build/'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.js', ['browseify'])
});

gulp.task('mocks', function () {
    return gulp.src('./api-mocks/**/*.yaml')
        .pipe(plugins.concat('mocks.json'))
        .pipe(plugins.yaml({ space: 2 }))
        .pipe(gulp.dest('./'));
});

gulp.task('stubbed', ['mocks', 'browserify', 'connect', 'watch'], function () {
    startStubby();
});//server:stubbed


gulp.task('default', ['browserify','connect','watch']);
