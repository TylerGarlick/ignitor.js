"use strict";

var gulp = require('gulp')
  , gutil = require("gulp-util")
  , mocha = require("gulp-mocha")
  , util = require('util')
  , exec = require('child_process').exec
  ;

function clear() {
  exec('clear', function (error, stdout, stderr) {
    util.puts(stdout);
  });
}

var paths = {
  tests: "./test/**/*.js"
};


gulp.task('default', ['watch']);

gulp.task('test', ['run-tests', 'watch-tests']);

gulp.task('run-tests', function () {
  gulp.src(paths.tests)
    .pipe(
      mocha({
        ui: 'bdd',
        reporter: 'min',
        require: require('expect.js'),
        colors: true,
        growl: true,
        recursive: true
      }))
    .on('error', function (err) {
      if (err.stack && !/tests? failed/.test(err.stack)) {
        console.error(err.stack);
      }
    });
});

gulp.task('console-clear', function () {
  exec('clear', function (error, stdout, stderr) {
    util.puts(stdout);
  });
});

gulp.task('watch-tests', function () {
  return gulp.watch('./test/**/*.js', ['console-clear', 'run-tests']);
});

