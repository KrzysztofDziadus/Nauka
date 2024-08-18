const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let fibPrev = 0;
    let fibCurr = 1;

    for (let i = 2; i <= n; i++) {
        const temp = fibCurr;
        fibCurr = fibCurr + fibPrev;
        fibPrev = temp;
    }
    return fibCurr;
};

// Do not edit below this line
module.exports = fibonacci;
