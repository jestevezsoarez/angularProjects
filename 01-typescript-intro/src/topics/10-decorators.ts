/* Un decorador es una simple funcion. Se puede adjuntar a las clases, propiedades y metodos
    Para que no de error en tsconfig.json hay que poner "experimentalDecorators": true,
*/

function classDecorator<T extends { new (...args: any[] ): {}}>(
    constructor: T
) {
     return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
     }
}



@classDecorator
export class SuperClass { // Hago export de la clase para convertirla a un modulo

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo');        
    }
}


console.log(SuperClass); // imprimo la definicion de la clase

const myClass = new SuperClass();
console.log(myClass); // imprimo la instancia de la clase

