
function tarea(done){
    console.log('Mi primer tarea');

    done(); //Para informar que la tarea termino de ejecutarse
}

exports.primerTarea = tarea; //Node js

/**
    Se ejecuta con npx gulp primerTarea
**/