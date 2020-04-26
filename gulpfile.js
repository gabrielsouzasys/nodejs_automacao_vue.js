const browserify = require ('browserify');
const gulp       = require ('gulp');
const source     = require ('vinyl-source-stream');

gulp.task('compilar', function(){
    return browserify('./source/app_gulp_compilar.js')
        .bundle()
        .pipe(source('app_compilado.js'))
        .pipe(gulp.dest('./public/'));

});

gulp.task('watch', function(){
    gulp.watch('./src/*.js', gulp.series('browserify'));
});