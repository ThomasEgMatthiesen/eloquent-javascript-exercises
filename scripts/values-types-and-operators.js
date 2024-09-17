
////////////////
////  Bits  ////
////////////////

// Easy toString method
function toBinaryString(quotient) {
    let binary = quotient.toString(2); // Convert to binary using base 2
    return binary; // Output binary
}

// Algorithmic approach (simplified)
function toBinaryAlgorithmic(quotient) {
    let binary = '';
    while (quotient > 0) {
        let remainder = quotient % 2; // Find remainder
        binary = remainder + binary;
        quotient = Math.floor(quotient / 2); // Next quotient
    }
    return binary; // Output binary
}

// Bitwise operation, somehow doesn't work with 64-bit...
function toBinaryBitwise(quotient) {
    let binary = '';
    for (let i = 63; i >= 0; i--) { // 8-bit, JS uses 64-bit
        let bit = (quotient >> i) & 1; // Shift and mask
        binary += bit;
    }
    return binary;
}

// console.log('toString method: ' + toBinaryString(97));
// console.log('Algorithmic: ' + toBinaryAlgorithmic(97));
// console.log('Bitwise: ' + toBinaryBitwise(97));


//////////////////
/// Arithmetic ///
//////////////////

// +, -, *, /, %,

/////////////////
///  Strings  ///
/////////////////

var backticks = `Down on the sea`;
var doubleQuotes = "Lie on the ocean";
var quotes = 'Float on the ocean';

// Line breaks
var linesQuotes = "This is the first line\nAnd this is the second";
var linesBackticks = `This 
    is the      first       line
And this
        is the           second`;

// console.log(linesQuotes);
// console.log(linesBackticks);