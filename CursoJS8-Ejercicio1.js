// Crea un archivo JS que contenga las siguientes líneas

//- Una función sin parámetros que devuelva siempre "true"

function verdad (){
    console.log("True");
}

verdad ()
verdad ()

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const promesa = (isTime) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
        if (isTime) {
            resolve (1);
        } else {
            reject (0);
        }
    }, 5000)
    })
}

console.time("Timer")

promesa (true).then (() => {
    console.timeLog("Timer");
    console.log("Hola soy promesa");
})

//- Una función generadora de índices pares automáticos*/

function* generaIn(){
    let i = 0;
    while (true) {
        i = i + 2;
        if (i === 20){
            return i
        }
        yield i
    }
}

const gen = generaIn ();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
