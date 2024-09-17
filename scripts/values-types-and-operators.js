
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

// Bitwise operation
function toBinaryBitwise(quotient) {
    let binary = '';
    for (let i = 7; i >= 0; i--) { // 8-bit
        let bit = (quotient >> i) & 1; // Shift and mask
        binary += bit;
    }
    return binary;
}

// console.log('toString method: ' + toBinaryString(97));
// console.log('Algorithmic: ' + toBinaryAlgorithmic(97));
console.log('Bitwise: ' + toBinaryBitwise(97));