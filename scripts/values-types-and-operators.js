var hStyle = 'background-color: black; color: white; font-weight: bold; padding: 4px 8px';

// VALUES
console.log('%c VALUES:', hStyle);
console.log(`
    Values are stored as bits.

      0   0   0   0   1   1   0   1
    128  64  32  16   8   4   2   1

    That's the binary number 00001101.
    Its nonzero digits stand for 8, 4, and 1, and add up to 13.

    Computer memory used to be much smaller, and people tended to use groups of 8 or 16 bits to represent their numbers.

    JavaScript uses a fixed number of bits, 64 of them, to store a single number value.

`)

// ARITHMETIC
console.log('%c ARITHMETIC:', hStyle)
console.log(`
    The +, -, /, * and % symbols are called operators.

    They have precendence rules as in mathematics.

    100 + 4 * 11 = ${100 + 4 * 11}

    (100 + 4) * 11 = ${(100 + 4) * 11}

    The % symbol is used to represent the remainder operation (or modulo).
    For example, 314 % 100 produces 14, and 144 % 12 gives 0.
    The modulo operator's precedence is the same as that of * and /.

`)

// STRINGS
console.log('%c STRINGS:', hStyle)
console.log(`
    You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at the start and the end of the string match.
    
    \`Down on the sea\`
    "Lie on the ocean"
    'Float on the ocean'

    A newline character is written like \"\\n\", but template literals accept line breaks with enter and tab indents.

    Strings cannot be divided, multiplied, or subtracted. The + operator can be used on them, not to add, but to concatenate.

    Backtick-quoted strings, usually called template literals, can do a few more tricks. Apart from being able to span lines, they can also embed other values:

    console.log(\`half of 100 is \${100 / 2}\`)
    // → "half of 100 is ${100 / 2}"

`)

// UNARY
console.log('%c UNARY:', hStyle)
console.log(`
    Operators that use two values are called binary operators, while those that take one are called unary operators. 
    
    The minus operator (-) can be used both as a binary operator and as a unary operator.

    console.log(- (10 * 2))
    // → ${- (10 * 2)}

    Not is written as an exclamation mark (!). 
    It is a unary operator that flips the value given to it — !true produces false and !false gives true.

    Not all operators are symbols. Some are written as words.
    
    console.log(typeof 4.5)
    // → ${typeof 4.5}

    console.log(typeof "x")
    // → ${typeof "x"}

`)

// BOOLEANS
console.log('%c BOOLEANS:', hStyle)
console.log(`
    It is often useful to have a value that distinguishes between only two possibilities, like “yes” and “no” or “on” and “off”. 
    
    For this purpose, JavaScript has a Boolean type, which has just two values, true and false, written as those words.
    
`)

// COMPARISON
console.log('%c COMPARISON:', hStyle)
console.log(`
    The > and < signs are the traditional symbols for “is greater than” and “is less than”, respectively.

    console.log(3 > 2)
    // → ${3 > 2}

    console.log(3 < 2)
    // → ${3 < 2}

    Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).

    console.log("Garnet" != "Ruby")
    // → ${"Garnet" != "Ruby"}

    console.log("Pearl" == "Amethyst")
    // → ${"Pearl" == "Amethyst"}

`)

// LOGICAL OPERATORS
console.log('%c LOGICAL OPERATORS:', hStyle)
console.log(`
    The && operator represents logical and.

    console.log(true && false)
    // → ${true && false}
    
    console.log(true && true)
    // → ${true && true}

    The || operator denotes logical or.

    console.log(false || true)
    // → ${false || true}

    console.log(false || false)
    // → ${false || false}

    The last logical operator we will look at is not unary, not binary, but ternary, operating on three values. 
    It is written with a question mark and a colon, like this:

    console.log(true ? 1 : 2);
    // → ${true ? 1 : 2}
    
    console.log(false ? 1 : 2);
    // → ${false ? 1 : 2}
    
    This one is called the conditional operator (or sometimes just the ternary operator since it is the only such operator in the language).

`)

// EMPTY VALUES
console.log('%c EMPTY VALUES:', hStyle)
console.log(`
    There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. 
    
    They are themselves values, but they carry no information.

`)

// AUTOMATIC TYPE CONVERSION
console.log('%c AUTOMATIC TYPE CONVERSION:', hStyle)
console.log(`
    console.log(8 * null)
    // → ${8 * null}

    console.log("5" - 1)
    // → ${"5" - 1}

    console.log("5" + 1)
    // → ${"5" + 1}

    console.log("five" * 2)
    // → ${"five" * 2}

    console.log(false == 0)
    // → ${false == 0}

    When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. 
    
    This is called type coercion.

    When you do not want any type conversions to happen, there are two additional operators: === and !==.
    
    The first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal.
    
`)

// SHORT-CIRCUITING OF LOGICAL OPERATORS
console.log('%c SHORT-CIRCUITING OF LOGICAL OPERATORS:', hStyle)
console.log(`
    The logical operators && and || will convert the value on their left side to Boolean type, and will return either the original left-hand value or the right-hand value.

    console.log(null || "user")
    // → ${null || "user"}

    console.log("Agnes" || "user")
    // → ${"Agnes" || "user"}

    The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true.

    The ?? operator resembles || but returns the value on the right only if the one on the left is null or undefined, not if it is some other value that can be converted to false. 
    
    Often, this is preferable to the behavior of ||.

    console.log(0 || 100);
    // → ${0 || 100}

    console.log(0 ?? 100);
    // → ${0 ?? 100}

    console.log(null ?? 100);
    // → ${null ?? 100}

    The && operator works similarly to || but the other way around.

    console.log(null && "user")
    // → ${null && "user"}

    console.log("Agnes" && "user")
    // → ${"Agnes" && "user"}

    Another important property of these two operators is that the part to their right is evaluated only when necessary. 
    
    In the case of true || X, no matter what X is the result will be true, and X is never evaluated.
    
    The same goes for false && X, which is false and will ignore X.
    
    This is called short-circuit evaluation.

`)