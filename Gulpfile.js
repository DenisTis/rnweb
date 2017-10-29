var gulp = require('gulp');
var gulpPo2Mo = require('gulp-po2mo');

gulp.task('po2mo', function(){
	gulp.src('languages/**/*.po')
		.pipe(gulpPo2Mo())
		.pipe(gulp.dest('./languages'));
});

gulp.task('default', function(){
	gulp.watch('languages/**/*.po', ['po2mo']);
});