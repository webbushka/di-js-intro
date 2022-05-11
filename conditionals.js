/**
 * CONDITIONALS
 *
 * Allow us to check the value of a variable or expression and make decisions
 */

const apples = 3;

if (apples > 4) {
  // if the above expression is true, this block will run
  console.log('that is a lot of apples');
} else if (apples > 2) {
  // if the first expression is false and the above expression is true, this block will run
  console.log('you have a few apples, get more?');
} else {
  // if all expressions are false this block will run
  console.log('you need more apples');
}

// ok to run just if

if (apples < 4) {
  console.log('get more?');
}

// you cannot have an else if or else block if you don't first have an if
else if (apples === 4) {
  // bad times
} else {
  // bad times
}

/**
 * COMPARISON OPERATORS
 *
 * > greater than
 * < less than
 * == equality based on the value (ie. 4 == '4' // true)
 * === strict equality check based on value and type (ie. 4 === '4' // false)
 */

function logAndRun(num1, num2, cb = () => {}) {
  console.log(num1, num2);
  if (typeof cb === 'function') {
    return cb(num1, num2);
    console.log(num1 > num2); // this will never run because it's after the return
  }

  console.log('cb was not a function');
}
