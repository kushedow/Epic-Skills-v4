
var modules = " main-bower-files  ";



//////////////////////////////
///
///
///


var gulp = require('gulp');

// описание тасков

gulp.task('bower', function() {

 	setTimeout( function(){gulp.start("stand")} , 1000);
 	setTimeout( function(){gulp.start("deliver")} , 2000); 	
 	setTimeout( function(){gulp.start("die")} , 3000);
 
    
});

gulp.task('stand', function() {

	 	var terminal = require('child_process').spawn('bash');
	    terminal.stdin.write("npm link "+modules);
	    terminal.stdin.end();
	 

});


gulp.task('die', function() {

	    var terminal = require('child_process').spawn('bash');
	    terminal.stdin.write("rm -rf node_modules");   
	    terminal.stdin.end();
 
});

  

gulp.task('deliver', function() {

  var mainBowerFiles = require('main-bower-files');

   return gulp.src(mainBowerFiles())
    .pipe(gulp.dest("./js"));

});



