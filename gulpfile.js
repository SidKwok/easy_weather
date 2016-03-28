var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minifyjs', function(){
  return gulp.src('src/easyWeather.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});
