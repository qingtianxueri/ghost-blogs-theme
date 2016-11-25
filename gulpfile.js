//gulpfile.js 示例文件

//导入你所需要用的工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    sass = require('gulp-sass');

// scss 任务
gulp.task('css',function(){
  return gulp.src('assets/scss/style.scss') //获取该任务需要的文件
      .pipe(sass())                  //该任务调用的模块
      .pipe(gulp.dest('assets/css'));   //将在 src/css 文件夹中生产test.css
});

// 默认任务
gulp.task('default',['sass','watch1']);

//监听文件
gulp.task('watch1',function(){
    return gulp.watch('src/css/test.scss',['sass']);
    //监听 src/css/test.scss 文件，修改时自动执行 sass 任务。
});
