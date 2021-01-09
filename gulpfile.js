"use strict";

const gulp = require("gulp"); // Procurar no node_modules o gulp
const sass = require("gulp-sass"); // Procurar no node_modules o gulp-sass

sass.compiler = require("node-sass"); // Necessário para funcionar gulp-sass

gulp.task('default', watch); //Atribuímos WATCH à função padrão do gulp.

gulp.task('sass', compilaSass); //Atribuimos a função compilaSass à tarefa nomeada como sass.

function compilaSass() {
    return gulp
        .src("assets/scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Converte Sass para CSS com gulp-sass
        .pipe(gulp.dest("assets/css"))
};

function watch() {
    gulp.watch("assets/scss/**/*.scss", compilaSass)
}