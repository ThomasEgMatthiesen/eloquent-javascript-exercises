let hStyle = 'background-color: black; color: white; font-weight: bold; padding: 4px 8px';

// Minimum
// Define the function min that takes two arguments and returns their minimum.

console.log('%c Minimum:', hStyle);

const min = (a, b) => a < b ? a : b;

console.log(min(0, 10));
console.log(min(0, -10));


// Recursion
// We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 
// Here’s another way to define whether a positive whole number is even or odd:
// - Zero is even.
// - One is odd.
// - For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. 
// The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

console.log('%c Recursion:', hStyle);

const isEven = N => {
    // Remove negative numbers
    N = N < 0 ? N * -1 : N;
    // Recursive decreasing of N
    if (N >= 2) return isEven(N - 2);
    // Determine if N is even or odd
    return N === 0 ?? false;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


// Bean counting
// Write a function called countBs that takes a string as its only argument 
// and returns a number that indicates how many uppercase B characters there are in the string.

console.log('%c Bean counting:', hStyle);

const countBs = string => {
    let Bs = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') Bs++;
    }
    return Bs;
}

console.log(countBs("BOB"));

// Next, write a function called countChar that behaves like countBs, except it takes a second argument 
// that indicates the character that is to be counted (rather than counting only uppercase B characters). 
// Rewrite countBs to make use of this new function.

const countChar = (string, character) => {
    let char = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) char++;
    }
    return char;
}

console.log(countChar("kakkerlak", "k"));
console.log(countChar("Mississippi is a state in the Southeastern region of the United States", "s"));