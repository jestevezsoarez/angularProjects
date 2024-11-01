interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    } 
}

const song = 'aaa';
const {song: song2, songDuration, details} = audioPlayer;
const {author} = details;
console.log('Song: ', song2, 'Author: ', author);

// Desestructuracion de Arreglos

const dbz = ['Goku','Vegeta','Trunks'];
console.log('Personaje 3:', dbz[2]);

const [ , ,trunks, kk = 'Not found'] = dbz; // Desestructuro la 3er y 4ta posicion, en caso de la 4ta si no existe muestro mensaje Not found

console.log(trunks);
console.log(kk);










export {};