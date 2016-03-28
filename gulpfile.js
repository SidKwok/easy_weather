var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

gulp.task('minifyjs', function(){
  return gulp.src('src/easyWeather.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('lint', function() {
  return gulp.src('src/easyWeather.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'lint task ok' }));
});
