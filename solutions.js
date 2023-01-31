"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// #1
//Write a function called isBoolean that returns true if the parameter has a data type of boolean. Otherwise, it returns false.

function isBoolean(input) {
    return input === true;
}

console.log(isBoolean(42)); // outputs false
console.log(isBoolean("true")); // outputs false
console.log(isBoolean(false));

// #2
//Write a function called hasBoolean that returns true if the array parameter contains at least one element that is a boolean. Otherwise, it returns false.

function hasBoolean(array) {
    for (let i = 0; i < array.length; i++) {
        return typeof array[i] === "boolean";
    }
}

console.log(hasBoolean([1, 2, 3, 4])); // outputs false
console.log(hasBoolean([1, "false", 3, 4])); // outputs false
console.log(hasBoolean([1, 2, true, 4])); // outputs true