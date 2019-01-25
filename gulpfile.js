var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hooray  -  you creared a Gulp task.")
});

gulp.task('html', function(){
    console.log("Imagine somehing useful being done to your HTML here.")
});

gulp.task('styles', function(){
    console.log("Imagine somehing SASS or PostCSS running here.")
});

gulp.task('watch', function(){

    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css' function(){
        gulp.start('styles')
    });
});