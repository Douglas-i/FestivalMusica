const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require('sass'))
function css(done) {    

    src('src/scss/app.scss'). //Identificar el archivo de SASS    
        pipe(sass()). //Compilarlo
        pipe(dest("build/css")); //Almacenaro en el disco dura
        
    done();//Callback que avisa a gulp cuando llegamos al final
}

exports.css = css;