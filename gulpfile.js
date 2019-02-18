//编译scss文件为css文件
var gulp = require('gulp');
var sass = require('gulp-sass');
var pump = require('pump');
gulp.task('kede', function () {
	return gulp.src('./src/sass/*.scss').pipe(sass({
		outputStyle: 'expanded'
	})).pipe(gulp.dest('./src/css/'))
});
// gulp.task('jt',function(){
//     gulp.watch('./src/sass/index.scss',gulp.series('kede'))
// })
// gulp.task('kede',function(){
// 		return	pump([gulp.src('./src/sass/index.scss'),
// 		sass({outputStyle:'expanded'}),
// 		gulp.dest('./src/css/')
// 	])
// })
// gulp.task('jt',function(){

// 		gulp.watch('./src/sass/index.scss',gulp.series('kede'))

// })
//压缩html
// var  gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify', () => {
	return gulp.src('./src/index.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('./dist/'));
});

//压缩css
// let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
	return gulp.src('./src/css/*.css')
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(gulp.dest('./dist/css'));
});
// //引入gulp，gulp-babel的npm模块；
// var babel = require('gulp-babel');


//压缩js
// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// gulp.task('jsmin', function () {
//     //压缩src/js目录下的所有js文件
//     //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
// 	gulp.src('./src/js/*.js')
// 		.pipe(babel())
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist/js/'));
// });
// var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
/////新建一个‘script’任务   /////用于压缩js文件
gulp.task('script', function () {
	/////找到文件
	gulp.src('./src/js/*.js')
		//////把ES6代码转成ES5代码
		.pipe(babel())
		/////压缩文件
		.pipe(uglify())
		/////另存压缩后文件
		.pipe(gulp.dest('dist/js'));
});
//浏览器同步修改
// var gulp = require('gulp');
var browserSync = require("browser-sync");
// 静态服务器
gulp.task('server', () => {
	browserSync({
		// 服务器路径
		// server:'./src/',
		// 代理服务器，必须绑定到当前服务器路径一致
		proxy: 'http://localhost:12345',
		// // 端口
		port: 888,
		// 监听文件修改，自动刷新
		files: ['./src/**/*.html', './src/css/*.css', './src/api/*.php', './src/index.html', './src/js/*.js']
	});
	// 监听sass文件修改，并自动编译
	gulp.watch('./src/sass/*.scss', gulp.series('kede'))
})
//监听的文件修改，页面html对应修改。通过brower-sync服务只能看到页面修改