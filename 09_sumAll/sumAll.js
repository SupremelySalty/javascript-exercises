const sumAll = function(a, b) {
    // If negative numbers return "ERROR"
    // If non-integer numbers return "ERROR"
    // If not number return "ERROR"
    // Find the larger number between a and b
    // For every integer between a and b add to variable sum
    if (a < 0 || b < 0) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (isNaN(a) || isNaN(b)) return "ERROR";
    if (b < a) [a, b] = [b, a];
    let sum = 0
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
