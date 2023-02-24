const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

//Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function css(done) {    

    src('src/scss/**/*.scss'). //Identificar el archivo de SASS    
        pipe(plumber()).
        pipe(sass()). //Compilarlo        
        pipe(dest("build/css")); //Almacenaro en el disco dura
        
    done();//Callback que avisa a gulp cuando llegamos al final
}

function imagenes(done) {
    const opciones = {
        optmizacionLevel: 3
    }

    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    
    done();
}

function versionWebp(done) {
    
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));

    done();
}

function dev(done) {
    watch("src/scss/**/*.scss", css);
    done();
}

exports.css = css;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, dev);