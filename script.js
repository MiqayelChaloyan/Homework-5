// Task - 1


// const myArr = [10, 10, 3, 4, 5];

// function getLargestMultiplication(arr) {
//     let current, max = -Infinity;
//     for (let i = 0; i < arr.length - 1; i++) {
//         current = arr[i] * arr[i + 1];
//         if (current > max) {
//             max = current;
//         }
//     }
//     return max;
// }

// console.log(getLargestMultiplication(myArr));


// Task - 2


// const myArr = [7, 1, 9, 6, 3];

// function countOfMissingNumbers(arr, min, max, count = 0) {
//     min = Math.min(...arr);
//     max = Math.max(...arr);
//     return (max - min + 1 - arr.length)
// }
// console.log(countOfMissingNumbers(myArr));

// Task - 3


// const phrase = 'Prisoner of War';

// const getPhraseAcronym = (str, result = "") => {
//     if(typeof str !== 'string') return `Invalid element - ${str}`;
//     const arr = str.split(" ");
//     arr.filter(el => result += el.slice(0, 1).toUpperCase());
//     return result;
// }

// console.log(getPhraseAcronym(phrase));


// Task - 4


// function getSmallelest(str, n) {
//     let tmp; arr = [];
//     while (n <= str.length) {
//         tmp = str.slice(0, n);
//         arr.push(tmp);
//         str = str.substring(1)
//     }
//     return arr;
// }

// console.log(getSmallelest('abcdfghz', 7));


// Task - 5


// function scrabbleScore(text) {
//     let alphabet = {
//         a: 1,
//         e: 1,
//         i: 1,
//         o: 1,
//         u: 1,
//         l: 1,
//         n: 1,
//         r: 1,
//         s: 1,
//         t: 1,
//         d: 2,
//         g: 2,
//         b: 3,
//         c: 3,
//         m: 3,
//         p: 3,
//         f: 4,
//         h: 4,
//         v: 4,
//         w: 4,
//         y: 4,
//         k: 5,
//         j: 8,
//         x: 8,
//         q: 10,
//         z: 10,
//     },
//         sum = 0;
//     text = text.toLowerCase();
//     for (let i = 0; i < word.length; i++) {
//         sum += alphabet[text[i]] || 0;
//     }
//     return sum;
// }


// console.log(scrabbleScore('aeioulnrst'));


// Task - 6

// const text = 'If man was meant to stay on the ground, god would have given us roots.';

// function trimAndLowercase(str, regex, char) {
//     return str.replace(regex, char).toLowerCase();
// }

// function messageEncode(plain) {
//     plain = trimAndLowercase(plain, /[^a-zA-Z0-9]+/g, "");
//     const l = plain.length;
//     let c = Math.ceil(Math.sqrt(l));
//     let cipher = "";
//     for (let i = 0; i < l; i++) {
//         if (c === i) {
//             cipher += '\n';
//             c += 8;
//             cipher += plain[i];
//         } else {
//             cipher += plain[i];
//         }
//     }

//     return cipher;
// }
// console.log(messageEncode(text));


// Task - 7

// const alphabet = "abcdefghijklmnopqrstuvwxyz";

// function shiftAlphabet(str, n) {
//     let newSTr = "";
//     for (let i = 0; i < alphabet.length; i++) {
//         let offset = (i + n) % alphabet.length;
//         newSTr += alphabet[offset];
//     }
//     return newSTr;
// }

// console.log(shiftAlphabet(alphabet, 13));