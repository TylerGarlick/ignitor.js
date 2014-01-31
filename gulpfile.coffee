gulp = require "gulp"
gutil = require "gulp-util"
coffee = require "gulp-coffee"


gulp.task "default", ["coffee", "watch"]

coffeeOpts =
  sourceMap: true
  bare: false

gulp.task "coffee", ->
  gulp.src("./src/**/*.coffee")
  .pipe(coffee(coffeeOpts).on("error", gutil.log))
  .pipe(gulp.dest("./lib"))


gulp.task "watch", ->
  gulp.watch "./src/**/*.coffee", ["coffee"]
