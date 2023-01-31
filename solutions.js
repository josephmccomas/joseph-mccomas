"use strict";
const people = [ {
    name: "Bob",
    age: 42
}, {
    name: "Sue",
    age: 27
}, {
    name: "Lou",
    age: 33
}, {
    name: "Zanzibar",
    age: 18
}, {
    name: "Gladys",
    age: 39
}
];
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

function hasBoolean(input){
    for (let i = 0; i < input.length; i++) {
        if(typeof input[i] === "boolean"){
            return true;
        } else {
            return false;
        }
    }
}

console.log(hasBoolean([1, 2, 3, 4])); // outputs false
console.log(hasBoolean([1, "false", 3, 4])); // outputs false
console.log(hasBoolean([1, 2, true, 4])); // outputs true

// #3
//Write a function called minAge that takes an array of people as a parameter and returns the smallest age in the array.

function minAge(people){
    let lowestAge = 100;
    for (let i = 0; i < people.length; i++) {
        if (people[i].age < lowestAge){
            lowestAge = people[i].age;
        }
    }
    return lowestAge;
}

console.log(minAge(people)); // outputs 18

// #4
//Write a function called longestName that takes an array of people as a parameter and returns the longest name in the array.

function longestName(input) {
    let longName = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i].name.length > longName.length){
            longName = input[i].name;
        }
    }
    return longName;
}

console.log(longestName(people)); // outputs Zanzibar

// #5
//Write a function called createPerson that takes a name parameter and an age parameter and returns an object containing the given name and age as properties.

function createPerson(name, age){
    let user = {
        "name": name,
        "age": age
    }
    return user;
}

const jimbob = createPerson("Jimbob", 22);
console.log(jimbob);
/* outputs
{
name: "Jimbob",
age: 22
}
*/

//#6
// When the button with an id of bold-btn is clicked, that button's font weight should change to bold.
