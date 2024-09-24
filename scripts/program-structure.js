
// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:

for (let hash = "#"; hash.length <= 7; hash += "#") {
    console.log(hash);
}




// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

let numbers = []; // Logged as an array for readability

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0) {
        numbers.push('fizz');
    } else if (num % 5 === 0) {
        numbers.push('buzz');
    } else {
        numbers.push(num);
    }
}

console.log(`Logged as an array for readability: ${numbers}`);

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

numbers = []; // Logged as an array for readability

// simple solution
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        numbers.push('fizzbuzz');
    } else if (num % 3 === 0) {
        numbers.push('fizz');
    } else if (num % 5 === 0) {
        numbers.push('buzz');
    } else {
        numbers.push(num);
    }
}

console.log(`${numbers}`);

// SMARTER SOLUTION (Post-hints)
numbers = [];

for (let num = 1; num <= 100; num++) {
    let string = "";
    if (num % 3 === 0) { string += "fizz"; }
    if (num % 5 === 0) { string += "buzz"; }
    numbers.push(string || num);
}





// Chessboard
// Write a program that creates a string that represents an 8x8 grid, using newline characters (\\n) to separate lines. 
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # # 
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

let string = "";

for (let x = 0; x <= 7; x++) {

    for (let i = 0; i <= 7; i++) {
        if (i % 2 === 0) {
            if (x % 2 === 0) {
                string += " ";
            } else {
                string += "#";
            }
        } else {
            if (x % 2 === 0) {
                string += "#";
            } else {
                string += " ";
            }
        }
    }

    string += "\n";
}

console.log(string);


// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

let size = 24;
string = "";

for (let x = 0; x <= size - 1; x++) {

    for (let i = 0; i <= size - 1; i++) {
        if (i % 2 === 0) {
            if (x % 2 === 0) {
                string += " ";
            } else {
                string += "#";
            }
        } else {
            if (x % 2 === 0) {
                string += "#";
            } else {
                string += " ";
            }
        }
    }

    string += "\n";
}

console.log(string);


// Optimized version after reading hints:

size = 8;
string = "";

for (let x = 0; x < size; x++) {

    for (let i = 0; i < size; i++) {
        if ((x + i) % 2 === 0) {
            string += " ";
        } else {
            string += "#";
        }
    }

    string += "\\n";
}

console.log(string);