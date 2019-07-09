/**
 * Dev config
 * Hot reload when svg change
 */
var gulp        = require('gulp');
var path        = require('path');
var svgmin      = require('gulp-svgmin')
var browserSync = require('browser-sync').create();

var reload = function(e){
	console.log('reload')
	// minify svg
	console.log(path.basename(e.path));
	gulp.src(e.path)
	  .pipe(svgmin())
//  .pipe(svgmin({
//    plugins: [{
//      minifyStyles: false
//    }]
//  }))
//	 .pipe(svgmin({
//            js2svg: {
//                pretty: true
//            }
//        }))
  .pipe(gulp.dest('./out'));
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
    gulp.watch(
        ["./coordination-diffusion/*.svg",
      "./solid-earth/*.svg",
      "./pave-logo/*.svg",
      "./schema-gouvernance/*.svg", 
      "./systeme-terre/*.svg"])
    .on('change', reload)
});