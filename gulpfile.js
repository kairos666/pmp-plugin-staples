let gulp        = require('gulp'),
    merge       = require('merge2'),
    ts          = require('gulp-typescript'),
    tsProject   = ts.createProject('./ts/tsconfig.json');

gulp.task('ts-compiling', function () {
    let tsResult = tsProject.src()
        .pipe(tsProject());

    return merge([
        tsResult.js.pipe(gulp.dest('js/')),
        tsResult.dts.pipe(gulp.dest('js/'))
    ]);
});