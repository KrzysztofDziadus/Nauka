const sumAll = function (num, plifier) {
    if (!Number.isInteger(num) || !Number.isInteger(plifier) || num < 0 || plifier < 0) return "ERROR";
    if (num > plifier){
         let temp = num
         num = plifier
         plifier = temp
    }
    let sum= 0;
    for (let i = num; i <= plifier; i++) {
        sum += i;

    }
    return sum
}
// Do not edit below this line
module.exports = sumAll;
