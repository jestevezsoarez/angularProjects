export interface Passenger {
    name: string;
    children?: string[]; // puede ser que el pasajero viaje solo, entonces hijos es opcional
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth']
}

const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0; // Si children es undefined entonces children vale 0
    // Desestructuro el nombre
    const {name} = passenger;
    console.log(`${name} tiene ${howManyChildren} hijos`);
    
}


printChildren(passenger1);
printChildren(passenger2);