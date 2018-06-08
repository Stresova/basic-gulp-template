// подключение пакетов
const gulp = require('gulp'); // запускает gulp
const autoprefixer = require('gulp-autoprefixer'); // проставляет вендорные префиксы
const rename = require('gulp-rename'); // переименовывает файлы
const minifycss = require('gulp-cssmin'); // минимизирует css
const tinypng = require('gulp-tinypng'); // минимизирует css


// задача
gulp.task('css', function(){
    return gulp.src("src/css/**/*.css")
        .pipe(autoprefixer({
           browsers: ["cover 99.5%", "iOS 7"] 
        }))
        .pipe(gulp.dest("app/css/"));
});

gulp.task('tinypng', function(){
    return gulp.src(["src/img/*.png", "src/img/*.jpg"])
        .pipe(tinypng("21wZqiLXaYukyrt5dwaTQh5tlZp2AEHi"))
        .pipe(gulp.dest("app/img/"));
});

// API Key 21wZqiLXaYukyrt5dwaTQh5tlZp2AEHi

gulp.task('cssmin', function(){
    return gulp.src("app/css/style.css") // берём файл из папки src/css
        .pipe(minifycss()) // минимизируем css
        .pipe(rename("style.min")) // переименовываем файл
        .pipe(gulp.dest("app/css/")); // сохраняем изменённый файл в папку проекта app/css/
});

// gulp.task - вызов галпа для выполнения задачи
// 'cssmin' - название задачи, которую необходимо выполнить
// ** - ищет во всех файлах с указанным расширением

gulp.task("watch", ["css", "cssmin"], function(){
    gulp.watch("src/css/**/*.css", ["css"]);
    gulp.watch("app/css/style.css", ["cssmin"]);    
});

// watch - встроенная функция gulp, которая не требует инициализации require, следит за изменениями в файлах
// "src/css/**/*.css", ["css"] - следит за изменениями файлов в папке css
// "src/css/**/*.css", ["css"] - следит за изменениями файлов в папке cssmin
// перестать следить Ctrl+C и Enter