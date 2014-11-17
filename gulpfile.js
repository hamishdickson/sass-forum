/**
 * Created by hamishdickson on 17/11/2014.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src('public/stylesheets/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
    gulp.watch('public/stylesheets/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
