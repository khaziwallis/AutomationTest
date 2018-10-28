"use strict";

var gulp = require('gulp');//
var connect = require('gulp-connect');// run local dev server
var open = require('gulp-open');//open url in web browser

var browserify = require('browserify'); // bundeler js
var reactify = require('reactify'); // Transform React JSX to plain js
var source = require('vinyl-source-stream'); // allow us to use conventinal text stream with gulp

var concat = require('gulp-concat'); // concats files
var lint = require('gulp-eslint'); // Lint Js Files, inculding jsx

var plugins = require('gulp-load-plugins')();

var startStubby = function () {
    gulp.src('').pipe(plugins.shell(['node_modules/stubby/bin/stubby -mw -d mocks.json -l localhost -s 3000']));
};

var config = {
	port: 9000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/**/*.html',
		dist: './dist',
		js: './src/**/*.js',
		images: './src/images/*',
		mainJs: './src/main.js',
		css: [
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		]
	}
}
gulp.task('connect', function () {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		liveload: true
	});
});

gulp.task('images', function () {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'))
		.pipe(connect.reload());
	// publist favicon
	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('open', ['connect'], function () {
	gulp.src('dist/index.html')
		.pipe(open({
			url: config.devBaseUrl + ':' + config.port + '/'
		}));
});

gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function () {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function () {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', function () {
	return gulp.src(config.paths.js)
		.pipe(lint({
			config: 'eslint.config.json'
		}))
		.pipe(lint.format());
});

gulp.task('watch', function () {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js']);
});

gulp.task('mocks', function () {
    return gulp.src('./api-mocks/**/*.yaml')
        .pipe(plugins.concat('mocks.json'))
        .pipe(plugins.yaml({ space: 2 }))
        .pipe(gulp.dest('./'));
});

gulp.task('stubbed', ['mocks', 'html', 'js', 'css', 'images', 'open', 'watch'], function () {
    startStubby();
});//server:stubbed

gulp.task('default', [ 'html', 'js', 'css', 'images', 'open', 'watch']);
