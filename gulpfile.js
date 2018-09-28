/**
 * Dev config
 * Hot reload when svg change
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var reload = function(){
	console.log('reload')
	browserSync.reload()
}


// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            browser: "firefox"
        }  });
    browserSync.reload()
    gulp.watch("*.svg").on('change', reload)
});