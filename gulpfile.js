var gulp = require('gulp'),
	babel = require('gulp-babel'),
	jade = require('gulp-jade'),
	watch = require('gulp-watch'),
	postCss = require('gulp-postcss');

var processors = [
	require('postcss-import'),
	require('postcss-nested'),
	require('postcss-simple-vars')
];

gulp.task('js', function(){
	 gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./build/'));
});

gulp.task('css', function(){
	return gulp.src('./src/**/site.css')
        .pipe(postCss(processors))
        .pipe(gulp.dest('./build/'));
});

gulp.task('jade', function(){
	return gulp.src('./src/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./build/'));
});

gulp.task('content', function(){
	return gulp.src('./src/**/content/*.*')
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function(){
	gulp.start('js');
	gulp.start('css');
	gulp.start('jade');
	gulp.start('content');

	watch('./src/**/*.js', function(){
		gulp.start('js');
	});

	watch('./src/**/*.css', function(){
		gulp.start('css');
	});

	watch('./src/**/*.jade', function(){
		gulp.start('jade');
	});

	watch('./src/content/**/*.*', function(){
		gulp.start('content');
	});
});
