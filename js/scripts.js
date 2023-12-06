const studentiClasse114 = [
    'Giuseppe', // 0
    'Giorgia',  // 1
    'Alberto',  // 2
    'Luca',     // 3
    'Davide',   // 4
    'Stefano',
    'Matteo',
    'Noemi'     // 7
];

console.log('studentiClasse114', studentiClasse114, studentiClasse114.length, typeof studentiClasse114);

studentiClasse114[5] = 'Marco';

console.log('studentiClasse114', studentiClasse114, studentiClasse114.length, typeof studentiClasse114);

// console.log('L\'elemento in posizione 2 è:', studentiClasse114[2]);
// console.log('L\'elemento in posizione 4 è:', studentiClasse114[4]);
// console.log('L\'elemento in posizione 0 è:', studentiClasse114[0]);
// console.log('L\'elemento in posizione 0 è:', studentiClasse114[0]);
// console.log('L\'elemento in posizione 0 è:', studentiClasse114[0]);
// console.log('L\'elemento in posizione 0 è:', studentiClasse114[0]);
// console.log('L\'elemento in posizione 0 è:', studentiClasse114[0]);

let i = 0;
console.log('L\'elemento in posizione ' + i + ' è:', studentiClasse114[i]);
i++;
console.log('L\'elemento in posizione ' + i + ' è:', studentiClasse114[i]);
i++;
console.log('L\'elemento in posizione ' + i + ' è:', studentiClasse114[i]);
i++;
console.log('L\'elemento in posizione ' + i + ' è:', studentiClasse114[i]);
i++;
console.log('L\'elemento in posizione ' + i + ' è:', studentiClasse114[i]);
i++;

for (let counter = 0; counter < studentiClasse114.length; counter++) {
    console.log('CICLO -> L\'elemento in posizione ' + counter + ' è:', studentiClasse114[counter]);
}

for (let counterInverse = studentiClasse114.length - 1; counterInverse >= 0; counterInverse--) {
    console.log('CICLO INVERSO -> L\'elemento in posizione ' + counterInverse + ' è:', studentiClasse114[counterInverse]);
}



// const teacher = 'Alessio';

// console.log('teacher', teacher, teacher.length, typeof teacher);
// console.log('teacher[2]', teacher[2], typeof teacher[2]);

/* 
    ------------------------------------
    Voglio creare un programma che mi riempia un array con solo numeri pari da 0 a 99 e, contemporaneamente, un altro array con quelli dispari
    ------------------------------------
*/
const numeriPari = [];
const numeriDispari = [];

console.log('numeriPari PRIMA', numeriPari, numeriPari.length, typeof numeriPari);
console.log('numeriDispari PRIMA', numeriDispari, numeriDispari.length, typeof numeriDispari);

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        numeriPari.push(i);
    }
    else {
        numeriDispari.push(i);
    }
}

console.log('numeriPari DOPO', numeriPari, numeriPari.length, typeof numeriPari);
console.log('numeriDispari DOPO', numeriDispari, numeriDispari.length, typeof numeriDispari);


/* 
    -------------------------
*/

const arrayDiArray = [
    [1, 2, 3]
];

console.log(arrayDiArray);

const altroArray = [4, 5, 6];

arrayDiArray.push(altroArray);

console.log(arrayDiArray);

arrayDiArray[1].push(7);

console.log(arrayDiArray);