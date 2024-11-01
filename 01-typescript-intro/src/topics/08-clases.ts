export class Person {

    // Forma tradicional
    
    // public name: string;
    // private address: string;

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }


    // Forma moderna de definir el constructor
    constructor(
        public name: string,
        private address: string = 'No Address' // Valor por defecto
    ) {}
}

// Manera no aconsejada, priorizamos composicion en vez de herencia
// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'New York');
//     }
// }

// const ironman = new Hero('Ironman',45,'Tony');

//  console.log(ironman );
 

// Haciendo composicion
export class Hero {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        this.person = new Person(realName);
    }
}

const tony = new Person('Tony Stark','New York');
const ironman = new Hero('Ironman',45,'Tony',tony);

 console.log(ironman );
 