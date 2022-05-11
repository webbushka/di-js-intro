// these are methods to create variables
var myFirstVariable; // never use this one
let mySecondVariable;
const myThirdVariable = 'myThirdVariable';

// types in javascript

// strings
const string = 'this is a string';
const numberString = '2342342';
const helloWorld = 'Hello World';

// numbers
const number = 12345;
const students = 5;
const feelings = 0;

// booleans
const cold = true;
const warm = false;

// array
const nameArray = ['Sharece', 'Kamalani', 'Sandy', 'Christian', 'Travis', 'AJ'];
const numArray = [0, 3, 5, 7, 9, 11];
const boolArray = [false, true, false, false, true, true];
const arrayArray = [
  ['Sharece', 'Kamalani', 'etc'],
  [1, 3, 5],
];
const combinedArray = [nameArray, numArray];

// undefined
const notSet = undefined;

// null
const isNull = null;

// objects
const object = {
  id: 1,
  name: 'AJ',
  age: 38,
  hasHair: false,
  hairColor: null,
  feelings: undefined,
};

// what can we do with types

// I can do Math!
const apples = 4;
const oranges = 7;
const fruit = apples + oranges;
const sum = 4 + 9;
console.log(fruit);
console.log(sum);

// I can combine strings
const firstName = 'AJ';
const lastName = 'Webb';
// const fullname = 'AJ' + ' ' + 'Webb';
// const fullname = firstName + ' ' + lastName;
const fullname = `${firstName} ${lastName}`;
console.log(fullname);

// what if I combine numbers and strings?
console.log('12' + 2);
console.log('AJ' + 5);
console.log(7 + 'yeet');
console.log(9 + '12');

let bananas = 'fruit';
bananas = 10;
bananas = ['fruit', 10];
bananas = { type: 'fruit', number: 10 };
console.log(bananas);
