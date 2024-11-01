/* Interfaces - Sirven para tipar los objetos. Sino no podria decir que una propiedad de un objeto, por ejemplo
                el name tendria que ser solo string.

                const strider = {
                    name:string: 'Strider'  <---- Eso esta mal y no se puede hacer
                };

                La interface al ser transpilada a js no tiene representacion fisica (0 lineas de codigo js)
*/

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const skills = ['Bash','Counter','Healing',true];


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter']
};

strider.hometown = 'Rivendell';


console.table(strider);