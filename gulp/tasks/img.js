module.exports = () =>
    $.gulp.task('img', () => //ставим задачу галпу что делать с img
        $.gulp.src($.path.src.img) // откуда взять
            .pipe($.gp.webp())
            .pipe($.gulp.dest($.path.build.img)).on('end', $.bs.reload))
            //куда положить