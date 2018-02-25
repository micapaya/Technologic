// npm init

// npm install --save -dev gulp gulp-sass gulp-autoprefixer gulp-livereload

// telecharger l'extension livereload sur chrome

// ajouter "node_modules/" au fichier .gitignore (le creer si besoin)


const gulp           = require('gulp'),
      sass           = require('gulp-sass'),
      prefix         = require('gulp-autoprefixer'),
      livereload      = require('gulp-livereload'),
      sourcemaps     = require('gulp-sourcemaps');
      path           = require('path');

let cfg = {
    src : 'css',
    dst : 'css'
}

gulp.task('sass', ()=>{
    return gulp.src(path.join(__dirname, cfg.src, 'main.sass'))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.join(__dirname, cfg.dst)))
        .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('index.html', ()=>{livereload()});
  gulp.watch(path.join(__dirname, cfg.src, '**/*.sass'), ['sass']);
});

gulp.task('default', ['sass', 'watch']);
