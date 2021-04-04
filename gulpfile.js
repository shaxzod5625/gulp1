global.$ = {
    // require() метод подключающий плагины
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require("browser-sync").create(),

    // browser-sync проверяет файлы и запускает плагины
    path: {// подключаем пути для работы gulp
        // добавить     ./
        tasks: require('./gulp/config/tasks'),
        serverDir: './app/build',
        src: {
            html: './app/src/*.html',
            style: 'app/src/styles/*.*',
            js: './app/src/script/*.js',
            img: 'app/src/images/**/*.{png,jpg,gif}',
            fonts: 'app/src/fonts/**/**/*.*'
        },// ** - любая папка
        /* .{...} - разрешения для этих форматов */
        // *.* любой название файла с любым расширением
        build: { // построенная версия
            html: './app/build/',
            style: 'app/build/styles/',
            js: './app/build/script/',
            img: 'app/build/images/',
            fonts: 'app/build/fonts/'
        },
        watch: { // указываем за чем  нужно следить
            html:  ['./app/src/*.html', './app/src/view/**/*.html' ],
            style: 'app/src/styles/**/*.*',
            js:    './app/src/script/**/*.*',
            img:   'app/src/images/**/*.{png,jpg,gif}',
            fonts: 'app/src/fonts/**/*.*'
        }

    }


}

$.path.tasks.forEach(taskPath => require(taskPath)());
$.gulp.task('default', $.gulp.series($.gulp.parallel('img','html','style','js','fonts','watch','serve')))
$.gulp.task('build', $.gulp.series($.gulp.parallel('img','html','style','js','fonts')))