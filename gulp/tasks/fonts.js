module.exports = () =>
    $.gulp.task('fonts', () => //ставим задачу галпу что делать с img
        $.gulp.src($.path.src.fonts) // откуда взять
            .pipe($.gp.ttf2woff2())
            .pipe($.gulp.dest($.path.build.fonts)).on('end', $.bs.reload))
            //куда положить