/**
 * Funciones, en js todas las funciones retornan undefined(nada) por defecto salvo que se explicite otro valor de retorno.
 * Argumentos orden: obligatorios -> Opcionales -> Por defecto
 * Si son mas de 3 se aconseja pasar un objeto
 */


function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const result: string = addNumbers(1, 2).toString();
console.log({result});

const resultArrow: string = addNumbersArrow(5, 10);
console.log({resultArrow});


function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const multiplyResult: number = multiply(5);
console.log({multiplyResult});


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const superman: Character = {
    name: 'Superman',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(superman, 50);

superman.showHp();