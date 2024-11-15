// Activating STRICT mode

// This is a special mode we can activate that makes it easier for us to write safe and accurate code, we set it up by writing the following code, this must be the first code written in the file otherwise it will not work, although you can use it for individual functions as well

'use strict';

foodProcessor("gummy bears", "chocolate"); 

// Strict mode forbids certain illegal actions and generates additional error messages to decode what is or could be going wrong, this is instead of silent failing as before

let hasDriversLicense = false;
const passTest = true;

// For example in the below a warning will be generated to tell us that the variable name is incorrect and that we might have meant something else instead

// if (passTest) {
//     hasDriverLicense = true;
// }

if (passTest) {
    hasDriversLicense = true;
}

console.log(hasDriversLicense);

// Strict mode also reserves some variable names that may be used as keywords in the language at a later date

// const interface = "Audio";
// const private = true;

// The variable names are reserved for potential future features, so strict mode will stop us assigning values to these variables 

// We should always use strict mode as best practice and to debug hard to find errors in our code


// FUNCTIONS

// We can define functions to hold lines of code in a more compartmentalized way, then we can call these functions when we need them

// Define the function with arguments between the parentheses and then the code between curly braces, if there is an output we will also have to define what this is

function logger(input) {
    console.log(`This is a call from the logger() function, the input is ${input}.`);
}

// We can invoke the function by calling it by name like so, feeding it different arguments if we need to, in this case we give it a string and it returns the string as part of the logger message

logger("poop");
logger("bum");
logger("bottom");

// In this next case we return a number transformed by the function, we need to return the result so it can be used in other places, for example storing it in a variable, but we could also log the result directly to the console as in the second call example

function plusTwo(number) {
    number = number + 2;
    return number
}

// One function can then use its output to call another function, or we could handle this all within a function itself

let result = plusTwo(5);
logger(result);

console.log(plusTwo(11));

// This function includes some processing of the arguments to make sure that the grammar of the sentence and the opinion is correct based on what is supplied

function foodProcessor(food1, food2) {
    console.log(`Food 1 is ${food1}`);
    console.log(`Food 2 is ${food2}`);
    if (food1.endsWith("s")) {
        console.log(`${food1} ends in an s`);
        food1 = food1.slice(0, -1);
    }
    if (food2.endsWith("s")) {
        console.log(`${food2} ends in an s`);
        food2 = food2.slice(0, -1);
    }
    let grammar = /^a|e|i|o|u/i.test(food1[0]) ? "an" : "a";
    let opinion = (food1 === "worm" || food2 === "worm") ? "Disgusting!" : "Delicious!";
    console.log(`The food processor combines ${food1} and ${food2} into ${grammar} ${food1} and ${food2} smoothie! ${opinion}`);
}

foodProcessor("apples", "oranges");
foodProcessor("worms", "oranges");
foodProcessor("papaya", "worms"); 

// Functions are useful for keeping the code tidy by allowing us to write reusable chunks of code, this conforms to the 'Don't Repeat Yourself' or 'DRY' coding principle of programming

// Some functions are built in such as console.log() and Number() etc.


// FUNCTION DECLARATIONS VS. EXPRESSIONS

// Function declarations are when we use the function keyword to declare a function

function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

// Parameters are the placeholders in the function and the arguments are the actual values that we feed into a function to occupy these placeholders

// A function expression is when we write the function keyword without a name but with everything else that a function declaration would need, but we then store all of this into a variable, making the variable effectively the function

// These are called nameless functions sometimes, sometimes we will have to write functions as expressions which produce values rather than declarations which may or may not produce a value, this works because functions are just values in JavaScript really when we get deep into things

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// We call them in the same way

const age2 = calcAge2(1985);
console.log(age2);

// What is the big deal? The main practical difference is that functions declarations can be called before they are defined in the code, function expressions cannot be used in this way

// Functions declarations can be called before they are defined in the code because of a process called hoisting, where JavaScript will effecively move all functions to the top of the running code

// Some people prefer function expressions because everything has to be defined at the top and then used later, which could be more structured, it also means that all functions have to be written to a variable which keeps things actually doing something, but each programmer has their own thinking on this


// ARROW FUNCTIONS

// There is another way of writing functions added from ES6 which can be quicker and easier to write that traditional functions

// The fat arrow => allows a return to be defined implicitly, and these are good for writing very quick one line functions without any parentheses etc.
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// We call it in a similar way to calling other functions as above

// This gets more difficult when the code becomes more complex, so we might need curly braces etc. if more than one thing is happening, we will also have to explictly return something in these cases

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
} 

console.log(yearsUntillRetirement(1988, "Michael"));

// If we have multiple parameters we will have to wrap these into parentheses as well

// Arrow functions are easiest to use when we have very simple functions, we lose the advantages of arrow functions if we are dealing with more complex functions

// Choose what type of function you want to use based on the situation, one problem with arrow functions is that they don't get a 'this' keyword, though this won't be important for a very long time


// GETTING FUNCTIONS TO CALL OTHER FUNCTIONS

// As mentioned earlier, functions can call other functions, for example, we could an operation that would have been in the original functioin in the fruitProcessor() function in another helper function

// Defining these fake types helps me to process the number of fruit pieces made differently in these functions, this is probably not best practice but the best way I could figure it out for now

const typeApples = "apples";
const typeOranges = "oranges";
const typeBananas = "bananas";

function cutFruitPieces(fruitType, quantity) {
    if (fruitType === "apples") {
        return quantity * 4;
    } else if (fruitType === "oranges") {
        return quantity * 6;
    } else if (fruitType === "bananas") {
        return quantity * 10;
    } else {
        return 0;
    }
}

function fruitProcessor(apples, oranges, bananas) {
    const applePieces = cutFruitPieces(typeApples, apples);
    const orangePieces = cutFruitPieces(typeOranges, oranges);
    const bananaPieces = cutFruitPieces(typeBananas, bananas)
    const juice = `Here's your juice with ${applePieces} pieces of apple, ${orangePieces} pieces of orange, and ${bananaPieces} pieces of banana. Enjoy!`;
    return juice;
}

// serveJuice() calls fruitProcessor(), which also calls cutFruitPieces() as a matter of operation
function serveJuice() {
    const juice = fruitProcessor(1, 6, 10);
    console.log(juice);
}

// This version of the function allows the wanted amounts of each fruit to be fed in as arguments and then used when calling fruitProcessor()
function serveJuiceSpecial(applesWanted, orangesWanted, bananasWanted) {
    const juice = fruitProcessor(applesWanted, orangesWanted, bananasWanted);
    console.log(juice);
}

let fruitJuice = fruitProcessor(1, 1, 1);
console.log(fruitJuice);

serveJuice();

// This function makes use of the prompt() in-built function to get the required amount of each fruit from the user and then to call fruitProcessor() etc. to make the juice. At the moment there is no type checking currently, so this would break down on a text input from the user and return NaNs, but the code still functions at least.

function juiceMaker() {
    let applesWanted = prompt("How many apples would you like?");
    let orangesWanted = prompt("How many oranges would you like?");
    let bananasWanted = prompt("How many bananas would you like?");
    console.log(`You wanted a juice made of ${applesWanted} apples, ${orangesWanted} oranges, and ${bananasWanted} bananas.`)
    console.log("Making your juice now...");
    serveJuiceSpecial(applesWanted, orangesWanted, bananasWanted);
}

// Commented out so I don't have to deal with the prompts all the time
// juiceMaker();

const currentYear = 2024;
const ageOfRetirement = 65;

function calcAgeToRetirement(name, age, currentYear, retirementAge) {
    let printMessage;
    if (age < 18) {
        printMessage = `${name} is only ${age} years old, they shouldn't really be working full-time yet!`;
        console.log(printMessage);
        return;
    }
    let personBirth = currentYear - age;
    let yearsLeft = retirementAge - age;
    if (yearsLeft <= 0) {
        printMessage = (`${name} was born in ${personBirth} and is ${age} years old as of ${currentYear} and so has already retired, enjoy retirement/ eternity!`);
    } else {
        printMessage = (`${name} was born in ${personBirth} and is ${age} years old as of ${currentYear} and so has ${yearsLeft} to retirement, hang in there!`);
    }
    console.log(printMessage);
}

// Practice using arrow functions to support another function expression
calcAgeToRetirement("Michael", 36, currentYear, ageOfRetirement);

let retirement = 65;

const calcAge4 = birthYear => 2024 - birthYear;

const calcRetirement = age => retirement - age;

const yearsUntillRetirement2 = function (birthYear, firstName) {
    const age = calcAge4(birthYear);
    const retirement = calcRetirement(age);
    return `${firstName} retires in ${retirement} years.`;
}

const printResult = yearsUntillRetirement2(1988, "Michael");
console.log(printResult);


// CODING CHALLENGE 5

// One team wins the competition only if its average score is more than or equal to twice the other team's, otherwise, no-one wins

// Arrow function to generate an average score from three scores, if we give the parameters generic names it becomes clear that we could use this to calculate any average
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Defining variables of the average score by calling the arrow function
const avgScoreDolphins = calcAverage(85, 54, 41);
const avgScoreKoalas = calcAverage(23, 34, 27);

// Logging the average score to the console for debugging purposes
console.log(`Dolphins average score is: ${avgScoreDolphins}`);
console.log(`Koalas average score is: ${avgScoreKoalas}`);

// Main function expression to work out which team wins if any
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
}

// Invoke the main function by passing in the specific arguments for the average scores calculated earlier
checkWinner(avgScoreDolphins, avgScoreKoalas);


// ARRAYS

// Arrays are used to store multiple values inside of variables

// This way of doing things works but is tedious and we could do it better by bundling these values together into a datastructure such as an array
const friend1 =  "Michael";
const friend2 =  "Steven";
const friend3 =  "Peter";

// This is one way of creating an array using a literal syntax
const friends = ["Michael", "Steven", "Peter"];

// Logging this array will log it with a standard format, telling us the nmumber of elements in the array and a comma seperated list of the values in those elements
console.log(friends);

// We can also use the 'Array()' method coupled with 'new' to create an array with as many elements in it as we want
const years = new Array(1991, 1984, 2008, 2020);

console.log(years);

// To index into an array with use square brackets like so, arrays are zero-indexed
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// We can also get just the actual number of elements in the array using '.length' which is a property of the array and other objects, this number is literal so not zero-indexed
console.log(friends.length);

// We can use this length property to retrieve the final element without having to know how many elements there are
console.log(friends[friends.length-1]);

// We subtract one from the non zero-indexed number to retrieve the final zero-indexed number, we can do it like this because we can put an expression within these square brackets where we would not be able to put a statement

// Although the array maybe declared as a const, we can still change the elements inside an aray by referencing them directly, therefore we can re-assign the value of the different elements like so
friends[2] = "Jay";
console.log(friends);

// This is because only primitive variables are immutable using const, this is because of the way that JavaScript stores values on the stack and in the heap. We could not replace the entire array, these operations are still restricted, but other things can be done.

// e.g. this is not allowed
// friends = ["Bob", "Alice"];

// An array can hold values of different types at the same time, we can even use expressions inside an array to define a value, we can also store other arrays inside an array

const michael = ["Michael", "Thomas", "McCann", 2024 - 1988, true, false, friends];
console.log(michael);

// In the console we might need to click into a nested array to see what it contains


// CODING EXERCISE
// There are a lot of operations like using + and - on arrays as they are non-primitive variables so they won't react how we would expect, but there are other ways to iterate through the values stored in an array

const calcAge5 = function (birthYear) {
    return 2024 - birthYear
}

const years2 = [1990, 1967, 2002, 2010, 2018];

// This kind of while loop will allow us to iterate through the array and apply the fucntion to each value, as long as the index value 'i' is less that the length number it will 

const ages = [];

let i = 0;
while (i < years2.length) {
    let result = calcAge5(years2[i]);
    console.log(result);
    ages.push(result);
    i ++;
}

console.log(ages);


// Basic array functions (methods)

// Using dot-appended methods allows us to use in-built methods and functions that are connected to a data-type etc. in Javacript

// .push() adds an element to the end of an array, the push function returns a value, the new length property of the array, we wouldn't often have to make use of this return value, but we could use it if we wanted
let newArrayLength = friends.push("Jimminiy");

console.log(friends);
console.log(newArrayLength);

// The 'unshift()' method adds a new element to the beginning of the array, shifting the index numbers of all other values to compensate, be careful with this as it can mess up other parts of the program that use specific square bracket indexing, this also returns a new length

newArrayLength = friends.unshift("Ayako");

console.log(friends)
console.log(newArrayLength);

// We can use the .pop() method to remove the last element in the array, this functions needs no arguments and returns the value that was removed from the array, just in case you need to use it, say to tell the user what was removed

friends.pop();
let poppedValue = friends.pop();
console.log(friends);
console.log(poppedValue);

// We can remove the first element from the array by using the shift() method which removes the first element from the array and re-organizes the other values and their index positions, this also returns the popped value in case we want to use it

poppedValue = friends.shift();
console.log(friends);
console.log(poppedValue);

// There is a method that we can use to find out what index position a value is at in an array. This is the 'indexOf()' method with the value that we want to know about in the parentheses

console.log(friends.indexOf("Steven"));
// If we try this on a value that does not exist, it will return a -1 instead of another number
console.log(friends.indexOf("Castii"));

// A more modern variant of this from ES6 onwards is the '.includes()' method which uses a strict equality check to see if the value specified in the parentheses is included in the array or not, this returns a Boolean value

console.log(friends.includes("Michael"));
console.log(friends.includes("Korvo"));

// This is very useful to write conditionals with e.g. with the generated Boolean

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven.")
}

// There are many more useful methods for manipulating arrays, but these are some of the most commonly used and most basic in handling arrays


// CODING CHALLENGE 6

const bills = [125, 555, 44];
const tips = [];
const totals = [];

const calcTip = function(amount) {
    let tip, total;
    if (amount >= 50 && amount <= 300) {
        tip = amount * 0.15;
    } else {
        tip = amount * 0.2;
    }
    total = amount + tip;
    tips.push(tip);
    totals.push(total);
    return total;
}

console.log(calcTip(100));

console.log(bills);
console.log(tips);
console.log(totals);

let index = 0;
while (index < bills.length) {
    let result = calcTip(bills[index]);
    index ++;
    console.log(result);
}

console.log(bills);
console.log(tips);
console.log(totals);


// Objects

// These are another datastructure we can use in JavaScript, arrays allow us to store more than one value in a variable, but these are only ordered by index value, which can make them hard to manipulate. If we create an object we can create named fields containing values that can be referenced by their names later

// To define an object we declare it like this between curly braces, with fields not in quotes, a colon, and then the value that we want to store in that property, we separate each line with a comma

// Objects can hold values of any type within them, as well as holding nested arrays and other objects inside them as well. We can also even store a function within an object

const person = {
    firstName: "Michael",
    middleName: "Thomas",
    lastName: "McCann",
    age: 36,
    birthYear: 1988    
};

// If we print the whole array we can get some idea of how it is stored in the system
console.log(person);

// We can index into a specific property by dot-indexing its name like so
console.log(person.firstName);

console.log(`The complete name is ${person.firstName}, ${person.middleName}, ${person.lastName}`);

// There are a few ways to create objects in JavaScript, but using curly braces using the above object literal context is the easiest and clearest to use

// Objects should be used to group together values in suitable contexts, for example, all data about a car can be set in a car object, objects are better for less structured, named values

const car = {
    type: "Jaguar",
    model: "EX60",
    proModel: false,
    yearOfManufacture: 2009
}

let isNotIs;

// if (car.proModel) {
//     isNotIs = "is";
// } else {
//     isNotIs = "is not";
// }

isNotIs = (car.proModel) ? "is" : "is not";

console.log(`This ${car.type} is an ${car.model} built in ${car.yearOfManufacture}. It ${isNotIs} a pro model`);

// We can use two methods to get the information in an object, the first is dot notation as in the example above, the other is bracket notation. The dot is an operator that pulls the specified information from the array.

// We can also use bracket notation where we use the name of the key by supplying a string within square brackets after the name of the object

console.log(car['model']);

// This string can be generated by an expression, so we are not so limited in how we can choose what data to access from the object, for example, we could build a key with a repeating part in the example below and it will work

const nameKey = "Name";
console.log(person['first' + nameKey]);

// The same thing does not work with dot notation, there we have to be specific

// When we need to first compute a property name, we use bracket notation, when we are just doing normal operations, we use dot notation istead as it is cleaner and easier

// We can use prompt to get the property that the user wants to see from the object, if they choose a property that does not exist within the object, the result will be an undefined as there is no such information in the object

// In this example, bracket notation makes more sense as we can use the value stored to the prompt to access the object

car.bumper = "Big bumper";

let choice = prompt("What information would you like to see about the car? type, model, proModel, yearOfManufacture");

if (car[choice] != undefined) {
    console.log(car[choice]);
} else {
    console.log("There is no such field in the car object, please reload and try again.");
}

// Challenge
// Get the following string to be printed, without hard-coding any of these values in the sentence, only take things from the object
// 'Jonas has 3 friends, and his best friend is called Michael'

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtman",
    friends: ["Michael", "Peter", "Steven"]
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Object Methods

// There are many methods that can be applied to objects

// We can store functions inside of an object and then call them

const bob = {
    firstName: "Bob",
    lastName: "Da Builder",
    birthYear: 1991,
    job: "builder",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    calcAge6: function (birthYear) {
        return 2024 - birthYear;
    }
}

// I have used dot notation here to access the calcAge6 function and then another piece of dot notation to run the function using other data inside the object

console.log(bob.calcAge6(bob.birthYear));

// Remember that if we are doing this using square bracket notation the function name would have to be a string here as well
console.log(bob["calcAge6"](bob.birthYear));

// We could read something like the birthYear directly from the object using the 'this' method,this allows an object to access itself which can be very useful and save a lot of time, this is good when we have many similar objects with different names, we could write functions using this instead of having to re-write all of the fucntions that used a specific name

const judy = {
    firstName: "Judy",
    lastName: "Pai",
    birthYear: 1986,
    job: "yoga teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    calcAge7: function () {
        console.log(this);
        return 2024 - this.birthYear;
    },

    grammarLicense: function () {
        this.hasHasNot = (judy.hasDriversLicense) ? "has" : "doesn't have";
        return this.hasHasNot; 
    },

    getSummary: function () {
        this.summary = (`${this.firstName} is a ${this.calcAge7(this.birthYear)} year-old ${this.job}, and she ${this.grammarLicense()} a driver's license.`);
        return this.summary;
    }
}

console.log(judy.calcAge7());

// In the case of a calculation that might have to be done many times, we can use the this method to be able to store the result of this calculation after being done once as another property on the object, then this result property can be accessed in future, instead of having to calculate everything all over again

const emma = {
    firstName: "Emma",
    lastName: "Simonsson",
    birthYear: 1993,
    job: "yoga teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    calcAge8: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    }
}

// We only need to calculate the age property once, then we can just access its value, this is a lot more 
console.log(emma.calcAge8());
console.log(emma.age);
console.log(emma.age);

// Challenge
// Output the following without hard-coding any of the values in the sentence: "Jonas is a 46-year-old teacher, and he has a driver's license"

// let hasHasNot = (judy.hasDriversLicense) ? "has" : "doesn't have";
// I have added the above code as a method to the judy object, so it only needs to be computed first, the new function makes use of this. to access values

// console.log(`${judy.firstName} is a ${2024 - judy.birthYear} year-old ${judy.job}, and she ${judy.hasHasNot} a driver's license.`)

console.log(judy.getSummary());

// Arrays are technically also objects, that is why we can apply methods to arrays as well as with methods


// CODING CHALLENGE 7

let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(`${mark.fullName} has a BMI of ${mark.calcBMI()}`);
console.log(`${john.fullName} has a BMI of ${john.calcBMI()}`);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log(`Both people's BMI seems to be exactly the same!`);
}


// Loops

// Loops are a fundamental aspect of every programming language, they allow us to keep performing tasks over and over again. These are control structures that allow us to make the code perform decision making and processing.

// There are for loops and while loops, for loops are for iterating through something usually, whereas while loops are meant to repeat for as long as the condition specified holds true.

// Below is an example of a muscleBuilder function that takes in a desired strength as a number and it lifts weights to increment the value of strength by 1 each time until the desired strength is attained. This is written as a while loop which would fit some usecases and not others.

// This is obviuously way more efficient than writing the same lines of code over and over to get the same result

function muscleBuilder(desired) {
    let strength = 1;
    
    while (strength < desired) {
        console.log(`Your strength is ${strength}.`);
        console.log("You lift a weight!");
        strength ++;
        console.log(`Your strength is now ${strength}`)
        console.log("Keep it up!");
        console.log("");
    }
    
    console.log("You crushed it buddy!");
}

muscleBuilder(20);


// A for loop keeps running while the condition is true, when the condition is false it will stop running and the code in the block will be skipped.

// This is a special way of writing a for loop, with multiple parts to the condition, the creation of the rep variable at value 1, the fact that rep has to be less than or equal to 10, and that rep should be incremented each time the code is run. The parts of the condition are separated by semicolons within the parentheses.

// NOTE - This style of coding cannot be done with while loops, which are simpler in nature because the condition is only testing whether a condition is true or false and isn't really doing the same things

for (let rep = 1; rep <= 10; rep ++) {
    console.log(`Lifting weights repetition ${rep}`);
}

// For loops are usually used to loop through arrays

// We can tell the for loop to stop when it hits the last index value in the array by using  'i < array.length - 1' as a condition
for (let i = 0; i < friends.length; i++) {
    console.log(`1. ${friends[i]}`);
}

// This seems to do the same thing but in a simpler way, the drawback to this is that this represents the 'standard' way of iterating through something, if we want to iterate backwards, or by step values etc., it can be better to define things as above which allows some more customisation.
for (i in years) {
    console.log(`2. ${years[i]}, ${typeof years[i]}`);
}

// Let's try it with a more complex array containing different types of values
const testData = [
    "Michael",
    "McCann",
    2024 - 1988,
    "Programmer",
    ["Harry", "Craig", "Chris"],
    true
];

// It works exactly the same.
for (i in testData) {
    console.log(`3. ${testData[i]}, ${typeof testData[i]}`);
}

// We can fill a new array from values iterated from an existing array as well, first we implement an empty array, then we push values from one array into this new one. We should use push() for this instead of unshift() so the index values of the values line up between arrays
let newArray = [];

for (i in testData) {
    newArray.push(typeof testData[i]);
}

// We can log the new array to check that it was created and populated properly
console.log(newArray);

// Then we can iterate through this new array to see if it works
for (i in newArray) {
    console.log(`4. ${newArray[i]}`);
}

// Another example, populating a new array based on a calculation done on the values of the original array
let years3 = [1991, 2007, 1969, 2020];
const ages3 = [];

for (i in years3) {
    ages3.push(2024 - years3[i]);
}

console.log(ages3);

// The 'continue' statement skips over the rest of that iteration of the loop, 'break' skips out of the loop completely.

const testData2 = [
    "Michael",
    "McCann",
    2024 - 1988,
    "Programmer",
    ["Harry", "Craig", "Chris"],
    true
];

// This version of the code above would skip adding non-strings to the new array
let newArray2 = [];

for (i in testData2) {
    if (typeof testData2[i] != 'string') continue;
    newArray2.push(typeof testData2[i]);
}

console.log(newArray2);

// An example of using break to completely exit a loop
const testData3 = [
    "Michael",
    "McCann",
    2024 - 1988,
    "Programmer",
    ["Harry", "Craig", "Chris"],
    true
];

let newArray3 = [];

// This code will stop iterating through the loop as soon as it encounters a value with the type 'number'.
for (i in testData3) {
    if (typeof testData3[i] === 'number') break;
    newArray3.push(testData3[i]);
}

console.log(newArray3)

// Indexing backwards through an array, here is makes sense to write out the whole condition, because we are doing something a little differently by decrementing the value instead of incrementing it, and setting the counter variable as the highest possible value to start with.

for (let i = testData3.length - 1; i >= 0; i--) {
    console.log(`${testData3[i]}`);
}


// Building a loop inside a loop
function muscleBuilder2(desired, sets) {
    let strength = 1;
    let grammar;
    
    // This is the main loop, you can call this function by calling it with the desired strength you want to get to
    while (strength < desired) {
        console.log(`Your strength is ${strength}.`);
        console.log("You lift a weight!");

        // This inner loops will iterate through the number of sets and then when complete the strength will increase
        let reps = 0;
        while (reps < sets) {
            if (reps > 0) {
                grammar = "s";
            } else {
                grammar = "";
            }
            console.log(`${reps + 1} time${grammar}!`)
            reps ++;
        }

        // Back to the main loop
        strength ++;
        console.log(`Your strength is now ${strength}`)
        console.log("Keep it up!");
        console.log("");
    }
    
    console.log("You crushed it buddy!");
}

muscleBuilder2(20, 5);

// Using multiple for loops with nesting
for (let exercise = 1; exercise < 4; exercise ++) {
    console.log(`----Exercise ${exercise} begins----`);
    for (let repeat = 1; repeat < 6; repeat ++) {
        console.log(`----Rep ${repeat}!----`);
    }
}

// A while loop example of the same thing can be seen above and below, unlike the for loop, you cannot define variables as part of the conditions and this must be done outside the block/ loop. Despite this, while loops are a lot more customisable and robust, because you can define the variables etc. it needs however you like
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep ++;
}


// Using a random number to keep a loop running/ terminate a loop, we don't know how many times the loop will be run so we don't need a counter here

// Math.trunc truncates a floating point number into a whole number
// Math.random generates a random number between 0 and 1
// To get this be a number between 1 and 6 we can multiply the result by 6 and then add 1
let dice = Math.trunc(Math.random() * 6) + 1;
let rolls = 1;
console.log(dice, typeof dice);

while (dice !== 6) {
    rolls ++;
    console.log(`You rolled a ${dice}, roll a 6 dumbo!`);
    dice = Math.trunc(Math.random() * 6) + 1;
} 

console.log(`Well done dumbo! You rolled a ${dice}!`);
console.log(`It took ${rolls} rolls to do it!`);


// Coin flipper using a loop that generates random numbers to create a dataset, the function has been declared with a default value, so if its called without an argument provided it will still provide an output

function coinFlipper(sampleSize = 10) {
    let count = 0;
    let heads = 0;
    let tails = 0;
    
    while (count < sampleSize) {
        // let coinFlip = Math.trunc(Math.random() * 2);
        let coinFlip = easyRandom(2, true, false);
        console.log(coinFlip);
        if (coinFlip === 0) {
            tails ++;
            count ++;
        } else {
            heads ++;
            count ++;
        }
    }
    
    let tailsPerc = (tails / sampleSize) * 100;
    let headsPerc = (heads / sampleSize) * 100;

    console.log(`Out of ${sampleSize} repetitions, we saw ${heads} instances of heads (${headsPerc}%) and ${tails} instance of tails (${tailsPerc}%)`);
}

coinFlipper(10);
coinFlipper(100);
coinFlipper(1000);
coinFlipper(10000);
coinFlipper();


// This function provides an easier(?) way of generating random numbers without having to type out the Math function call everytime, you specify the maximum number, whether to exclude decimals or not, and whether to exclude zeroes or not. To make this better, something could be added to allow a lower number to be set as well, as well as maybe step values etc.
function easyRandom(maxValue, excludeDecimal = true, excludeZero = true) {
    if (excludeDecimal) {
        if (excludeZero) {
            let result = Math.trunc(Math.random() * maxValue) + 1;
            return result;
        } else {
            let result = Math.trunc(Math.random() * maxValue);
            return result;
        }
    } else {
        if (excludeZero) {
            let result = Math.random() * maxValue + 1;
            return result;
        } else {
            let result = Math.random() * maxValue;
            return result;
        }
    }
}

let j = 0;
while (j <= 10) {
    let number = easyRandom(6, true, true);
    console.log(`The number generated was: ${number}`);
    j ++;
}


// Whenever we need a loop where we know how many times it will run, we can use a for loop with a counter, or a whole loop that depends on a counter. However, when we don't know how many times a loop has to be called, we usually want a while loop.


// CODING CHALLENGE 8

const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let totals2 = [];

for (const bill of bills2) {
    let tip = calcTip2(bill);
    tips2.push(tip);
    let total = bill + tip;
    totals2.push(total);
};

console.log(`Bills are: ${bills2}`);
console.log(`Tips are: ${tips2}`);
console.log(`Totals are: ${totals2}`);

const calcAverage2 = function(arr) {
    let avTotal = 0;
    for (const item in arr) {
        avTotal = avTotal + Number(arr[item]);
        console.log(`avTotal is ${avTotal}, ${typeof avTotal}`);
    }
    let average = avTotal / arr.length;
    return average;
}

let avBills = calcAverage2(bills2);
let avTips = calcAverage2(tips2);
let avTotals = calcAverage2(totals2);

console.log(`Average of bills is ${avBills}, the average of tips is ${avTips}, and the average of the totals is ${avTotals}`);
