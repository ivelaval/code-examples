function crearSuma(a) {
    return funcion(b) {
        return a + b;
    }
}

var sumar5 = crearSuma(5);
var sumar10 = crearSuma(10);
console.log(sumar5(15));
console.log(sumar10(15));

function makeCounter(counter, step) {
    function next() {
        return counter += step;
    }
    return next;
}

var counter2 = makeCounter(10,2);
counter2(); // sumamos dos, 12
console.log(counter2()); // sumamos dos, 14

var counter10 = makeCounter(50, 10);
counter10(); // sumamos 10, 60
console.log(counter10()); // sumamos 10, 70