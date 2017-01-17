var gulp = require('gulp'),
    sass = require('gulp-sass');
    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');
    del = require('del');

// css combine and compress
gulp.task('css', function(){
    gulp.src('assets/scss/*.scss')                      //get scss files
      .pipe(sass())
      .pipe(gulp.dest('assets/css'));                   //output folder

    return gulp.src('assets/css/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('assets/minified'))
        .pipe(rename({suffix: '.min'}))                 //rename the css file that compressed
        .pipe(cssmin())                                 //compress
        .pipe(gulp.dest('assets/minified'))             //output folder
});

// js
gulp.task('js', function() {
    return gulp.src('assets/js/*.js')
        .pipe(concat('main.js'))                        //combine all js to main.js
        .pipe(gulp.dest('assets/minified'))             //output folder
        .pipe(rename({suffix: '.min'}))                 //rename the js file that compressed
        .pipe(uglify())                                 //compress
        .pipe(gulp.dest('assets/minified'))             //output folder
});

//clean the file before compress
gulp.task('clean', function(cb) {
    del(['assets/minified/main.css', 'assets/minified/main.js'], cb)
});

// default task
gulp.task('build', ['clean','css', 'js'], function() {
});

gulp.task('watch',['watchcss','watchjs']);

//watch file
gulp.task('watchcss',function(){
    return gulp.watch('assets/scss/s*.scss',['css']);    //watch assets/scss/s*.scss, run css task
});

gulp.task('watchjs',function(){
    return gulp.watch('assets/js/s*.js',['js']);        //watch assets/js/s*.js, run js task.
});
