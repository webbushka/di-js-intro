/**
 * FUNCTIONS
 */

// Function expression
function foo() {
  // your code goes here
}
// foo();

// Function literal
const bar = function () {
  // your code goes here
};
// bar()

// () = > {}
const baz = () => {
  // your code goes here
};

/**
 * FUNCTION PARAMETERS
 *
 * Functions can take parameters that allow us to
 * take in arguments and return values based on the provided argument
 *
 */

const sum = (num1, num2) => {
  return num1 + num2;
};

console.log(num1); // ERROR AND BAD TIMES because it's not available outside the function

const PnI = sum(1000, 300); // 1300

/**
 * If you change a function it could affect where it's being called
 */

const sum = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const PnI = sum(1000, 300); // NaN

/**
 * You can set initial or default values to parameters
 */

const sum = (num1 = 0, num2 = 0, num3 = 0) => {
  return num1 + num2 + num3;
};

const PnI = sum(1000, 300); // 1300
const total = sum(100, 200, 300, 400); // 600

/**
 * Arrow functions can implicitly return a value if the block is a single line
 */

const sum = (num1 = 0, num2 = 0) => num1 + num2;

/**
 * JavaScript API has lots of built in functions, some we have used are:
 */
const modalBtn = document.querySelector('#modalBtn');
modalBtn.addEventListener('click', sum, false);

/**
 * How to take a function as a parameter of a function (aka callback function)
 *
 */
function logAndRun(num1, num2, cb) {
  console.log(num1, num2);
  return cb(num1, num2);
  console.log(num1 > num2); //this will never run because it's after the return
}

const theSum = logAndRun(200, 400, sum);

/**
 * How to pass an anonymous function to another function
 */

const modal = 'blah';
modalBtn.addEventListener(
  'click',
  () => {
    modal.classList.add('classNameGoesHere');
  },
  false
);
