// КОД ГЛЕБА
var modules = " main-bower-files  ",
    gulp = require('gulp');

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


// КОД НИКИТЫ
// локальный сервер, компилятор и лайв-релоудер
var autoprefixer = require('gulp-autoprefixer'),
    prettify = require('gulp-prettify'),
    minifyCSS = require('gulp-minify-css'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    gutil = require('gulp-util'),
    ftp = require('vinyl-ftp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

// локальный сервер
gulp.task('server', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});

// jade компилятор
gulp.task('jade', function() {
  return gulp.src('./*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('./'))
    .pipe(reload({stream: true}));
});

// less компилятор
gulp.task('less', function() {
  return gulp.src('./less/style.less')
    .pipe(plumber())
    .pipe(less({
      noCache: true,
      style: "expanded",
      lineNumbers: true,
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 15 versions', 'ie 8', 'ie 9'],
      cascade: false
    }))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream: true}));
});

// слежка (лайв-релоудер)
gulp.task('watch', function () {
  gulp.watch('./**/*.jade', ['jade']);
  gulp.watch('./**/*.less', ['less']);
  gulp.watch([
    './js/*.js',
    './*.html',
    './css/*.css'
  ]).on('change', reload);
});

// default task
gulp.task('default', ['server', 'watch']);

