/**
 * In JavaScript there are special characters known as operators
 * operators include things like arithmetic operators as well as some
 * JavaScript specific ones. Let's review these operators
 */

/**
 * MATH OPERATORS
 *
 * These operators are just like the ones you learned in math class in school
 *
 * Add +
 * Subtract -
 * Multiply *
 * Divide /
 * Modulo % (aka remainder)
 * Exponent ** (to the power of)
 *
 *
 * The first four are straight forward, lets look at the last two
 *
 */

// Modulo
console.log(10 % 2); // 0
console.log(10 % 3); // 1
console.log(10 % 4); // 2
console.log(10 % 5); // 0

// Exponent
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 ** 4); // 16

console.log(4 ** (1 / 2)); // 2 (same as square root)
console.log(8 ** (1 / 3)); // 2 (same as cubed root)

/**
 * STRING OPERATORS
 *
 * With strings we can use some of these same operators.
 * Take a look at what happens when we add two strings together
 *
 */

console.log('Hello' + 'World'); // 'HelloWorld'

/**
 * What happens if we add a number and a string?
 *
 */

console.log(1 + '2'); // '12' 🤔
console.log('2' + 1); // '21' 🤯

/**
 * What happens if we use other math operators on a string?
 *
 */

console.log('8' / 2); // 4
console.log('2' * 10); // 20
console.log(7 - '3'); // 4

/**
 * UNARY OPERATORS
 *
 * Unary operators are operators that are used on their own
 * an example of this in math would be when changing a positive to a negative
 *
 */

console.log(-1); // -1
console.log(-100); // -100
console.log(-2 + 3); // 1
console.log(4 + -3); // 1

/**
 * Another use for a unary operator is to convert (coerce)
 * a non Number type value to become the type of Number.
 *
 * Note: This can also be done by wrapping a non Number value in `Number()`
 */

console.log(+'2'); // 2
console.log(1 + +'2'); // 3
console.log(+''); // 0

console.log(+false); // 0
console.log(+true); // 1

console.log(+[]); // 0
console.log(+['1']); // 1
console.log(+['100']); // 100
console.log(+['1', '2']); // NaN

let apple = '3';
let orange = '7';
console.log(apple + orange); // '37'
console.log(+apple + +orange); // 10

console.log(Number('12')); // 12

/**
 * ASSIGNMENT OPERATOR
 *
 * Assignment operator is =
 * It's precedence is very low (see precedence below). It usually comes in last.
 *
 */

let apple = 2 + 3; // 5 = returns the value of 2 + 3 and assigns it to the variable apple
apple = apple + 1; // 6 = returns the value of apple (5) + 1 but does not modify apple
apple = apple + apple; // 12 = returns the value of apple (6) + apple (6) since we modified the value to 6

/**
 * You can also chain assignments
 *
 */

let apple = (redApple = greenApple = 5);
console.log(apple); // 5
console.log(redApple); // 5
console.log(greenApple); // 5

/**
 * just like above, sometimes we want to modify a value,
 * at times we may even want to modify them in place.
 * There is an operator for that
 *
 */

let apple = 2 + 3; // 5 = returns the value of 2 + 3 and assigns it to the variable apple
apple += 1; // 6 = returns the value of apple (5) + 1 but does not modify apple
apple += apple; // 12 = returns the value of apple (6) + apple (6) since we modified the value to 6

apple *= 2; // 24
apple -= 12; // 12
apple /= 2; // 6
apple -= 1; // 5

/**
 * INCREMENT / DECREMENT
 *
 * At times we may need to increase or decrease by one.
 * There's an operator for that. 🤣
 *
 * * NOTE: This works for variables only... not for raw values
 */

let apple = 0;
apple++; // apple is now 1
apple++; // apple is now 2
apple++; // apple is now 3
apple++; // apple is now 4
apple++; // apple is now 5

apple--; // apple is now 4
apple--; // apple is now 3
apple--; // apple is now 2
apple--; // apple is now 1
apple--; // apple is now 0

orange = apple++; // orange is 0 and apple is 1
orange = apple++; // orange is 1 and apple is 2
orange = ++apple; // orange and apple are both 3

orange = apple--; // orange is 3 and apple is 2
orange = apple--; // orange is 2 and apple is 1
orange = --apple; // orange and apple are both 0

// NO CAN
// 5++ // Uncaught SyntaxError: Invalid left-hand side expression in postfix operation

/**
 * PRECEDENCE (order of operation)
 *
 * Just like in math, some operators take precedence over others
 * / and * come before + - although a unary operator takes a higher
 * precedence than all of these, so that conversions happen before
 * operations
 *
 * Here's the breakdown of precendence
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
 */

apple = 5 + (((3 * 2) / 3 ** 4) % 5);
