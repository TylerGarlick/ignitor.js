var Gulp = require('gulp'),
  Traceur = require('gulp-traceur'),
  SourceMaps = require('gulp-sourcemaps'),
  Changed = require('gulp-changed'),
  Del = require('del');

var paths = {
  dist: 'dist',
  src: 'src/**/*.js'
};

Gulp.task('clean', function (fn) {
  Del(['dist/**/*'], fn);
});

Gulp.task('watch', function () {
  Gulp.watch(paths.src, ['compile']);
});

Gulp.task('compile', ['clean'], function () {
  return Gulp.src('src/**/*.js')
    .pipe(Changed(paths.dist))
    .pipe(SourceMaps.init())
    .pipe(Traceur({ modules: 'instantiate' }))
    .pipe(SourceMaps.write())
    .pipe(Gulp.dest(paths.dist));
});

Gulp.task('default', ['compile', 'watch']);

