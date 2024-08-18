const add = function(a,b) {
	return eval(a + b)
};

const subtract = function(a,b) {
  return eval(a - b)
};

const sum = function(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, curr) => sum + curr)
};

const multiply = function(arr) {
  return arr.reduce((sum, curr) => sum * curr)
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  let sum = 1;
  if (num === 0) return sum;
  for (let i = 1; i <= num ; i++) {
    sum *= i
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
