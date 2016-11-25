//gulpfile.js 示例文件

//导入你所需要用的工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    sass = require('gulp-sass');
    cssmin = require('gulp-minify-css'),
    cssver = require('gulp-make-css-url-version');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');
    del = require('del');

// css
gulp.task('css', function(){
    gulp.src('assets/scss/*.scss') //获取该任务需要的文件
      .pipe(sass())                 //该任务调用的模块
      .pipe(gulp.dest('assets/css'));  //将在 src/css 文件夹中生产test.css
    
    return gulp.src('assets/css/s*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('assets/minified'))
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(cssmin())   //执行压缩
        .pipe(gulp.dest('assets/minified'))  //输出文件夹
        .pipe(notify({ message: 'css task ok' }));
});

// js 
gulp.task('js', function() {
    return gulp.src('assets/js/s*.js')
        .pipe(concat('main.js'))   //合并所有js到main.js
        .pipe(gulp.dest('assets/minified'))  //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('assets/minified')) //输出
        .pipe(notify({ message: 'js task ok' }));
});

//clean the file before compress
gulp.task('clean', function(cb) {
    del(['assets/minified/main.css', 'assets/minified/main.js'], cb)
});

// 默认任务
gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js');
});

gulp.task('watch',['watchcss','watchjs']);

//监听文件
gulp.task('watchcss',function(){
    return gulp.watch('assets/scss/style.scss',['css']);
    //监听 src/css/test.scss 文件，修改时自动执行 sass 任务。
});

gulp.task('watchjs',function(){
    return gulp.watch('assets/js/main.js',['js']);
    //监听 src/css/test.scss 文件，修改时自动执行 sass 任务。
});
