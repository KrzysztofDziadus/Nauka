// const people = [
//     { name: 'Wes', year: 1988 },
//     { name: 'Kait', year: 1986 },
//     { name: 'Irv', year: 1970 },
//     { name: 'Lux', year: 2015 }
// ];
//
// const comments = [
//     { text: 'Love this!', id: 523423 },
//     { text: 'Super good', id: 823423 },
//     { text: 'You are the best', id: 2039842 },
//     { text: 'Ramen is my fav food ever', id: 123523 },
//     { text: 'Nice Nice Nice!', id: 542328 }
// ];
//
// // Some and Every Checks
// // Array.prototype.some() // is at least one person 19 or older?
// const isAdult = people.some((person) => {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.year >= 19;
// })
// // console.log({isAdult})
//
// // Array.prototype.every() // is everyone 19 or older?
// const isAllAdult = people.every((person)=> (new Date()).getFullYear() - person.year >= 19);
//
// // console.log({isAllAdult});
//
// // Array.prototype.find()
// // Find is like filter, but instead returns just the one you are looking for
// // find the comment with the ID of 823423
// const findComment = comments.find((comment) => comment.id === 823423)
// // console.log(findComment)
//
// // Array.prototype.findIndex()
// // Find the comment with this ID
// // delete the comment with the ID of 823423
// const index = comments.findIndex((comment) => comment.id === 823423)
// // console.log(comments.splice(index, 1)) // edytuje oryginalną tablicę
// // console.table(comments)
// //aby temu zapobiec używam:
// const newComments = [
//     ...comments.slice(0,index),
//     ...comments.slice(index + 1)
// ];
// // console.table(newComments)
// // console.table(comments)
//
// function camelize(str){
//     return  str.split("-")
//             .map((word) => Array.from(word)[0].toUpperCase() + word.slice(1)).join("")
//
// }
// // console.log(camelize("my-short-string"))
//
//
// function filterRange(arr, a, b){
//    return  arr.filter((item) => item >= a && item <= b)
// }
//     // console.log(filterRange(arr1,1,4))
//     // console.log(arr1)
//
// function filterRangeInPlace(arr, a, b) {
//
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//
//         // remove if outside of the interval
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//
// }
// let arr1 = [5, 3, 8, 1];
// filterRangeInPlace(arr1, 1, 4)
// console.log(arr1)

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b) => a > b ? 1: -1)

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted  = arr.slice().sort()
// console.log(arr)
// console.log(sorted)

// class Calculator {
//     calculate(str){
//         let splitArr = str.split(" ");
//         if (splitArr[1]  === "+"){
//             return +splitArr[0] + +splitArr[2]
//         }else if (splitArr[1]  === "-"){
//             return +splitArr[0] - +splitArr[2]
//         }
//     }
//     addMethod(name, func){
//     }
// }
//
// let calc = new Calculator;
// console.log(calc.calculate("1 + 2"))
//
//

// function Calculator() {
//
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };
//
//     this.calculate = function (str) {
//
//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];
//
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//
//         return this.methods[op](a, b);
//     };
//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }
// let calc = new Calculator;
// calc.addMethod('**',(a,b) => a ** b)
// console.log( calc.calculate("3 ** 7") )



// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// };
//
// let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
// ];
//
// // find users, for who army.canJoin returns true
// let soldiers = users.filter(army.canJoin, army);
//
// console.log(soldiers.length); // 2
// console.log(soldiers[0].age); // 20
// console.log(soldiers[1].age); // 23

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// console.log(users)
// let onlyNames = users.map(user =>user.name)
// console.log(onlyNames)


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// console.log(users)
// let usersMapped = users.map(user => ({
//     fullName : `${user.name} ${user.surname}` , id : `${user.id}`}))
// console.log(usersMapped)


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];
// function sortByAge(arr) {
//     return arr.sort((a,b) => a.age - b.age)}
// sortByAge(arr)
// console.log(arr)


// let arr = [1, 2, 3];
// function shuffle(arr){
//     return arr.sort((a,b) => Math.floor(Math.random(a) * 100) - Math.floor(Math.random(b) * 100))
// }
// console.log(shuffle(arr))
// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
// };
// for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;}
// // show counts of all possible permutations
// for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// }



// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// function getAverageAge(arr){
//      return arr.reduce((a, b) => a.age + b.age) / arr.length}
// console.log(getAverageAge(arr))



// function unique(arr) {
//     let uniqueArr = [];
//     for (let name of arr){
//         if (!uniqueArr.includes(name)){
//             uniqueArr.push(name)
//         }
//     }
//     return uniqueArr
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log(unique(strings))



// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
//
// let usersById = groupById(users);
//
// function groupById(arr) {
//     arr.reduce((obj, val) => { obj[val.id] = val;
//         return obj;
//     }, {})
// }
// console.log(users)



// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// // delete user.name
//
// console.log(user.name)



// let schedule = {}
// function isEmpty(obj){
//     for (let prop in obj){
//         return false;
//     }
//     return true;
// }
// console.log(isEmpty(schedule))



// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let prop in salaries){
//        sum += salaries[prop]
// }
// console.log(sum)



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric(menu){
//     for (let prop in menu){
//         if (typeof menu[prop] === "number") menu[prop] *= 2;
//     }
// }
// multiplyNumeric(menu)
// console.log(menu)




// let pi = {
//     name: {
//         first: "John",
//         last: "dick",
//     },
//     age: 32,
//     bio() {
//         console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
//     },
//     introduceSelf() {
//         console.log(`Hi! I'm ${this.name.first}.`);
//     },
// }
// const myDataName = "height";
// const myDataValue = "1.75m";
// pi[myDataName] = myDataValue;
// // console.log(pi)




// function createPerson(name) {
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function () {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
//     return obj;
// }
//
// let dick = createPerson('dick')
// dick.name
//
// function Person(name){
//     this.name = name;
//     this.introduceSelf = function () {
//         console.log(`Hi! I'm ${this.name}.`);
//     };
// }
//
// let analbel = new Person('analbel')
// analbel.introduceSelf()



// const factorial2 = function(num) {
//     let sum = 1;
//     if (num === 0) return sum;
//     for (let i = 1; i <= num ; i++) {
//         sum *= i
//     }
//     return sum;
// };
// console.log(factorial2(2))



// const palindromes2 = function (word) {
//     word = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
//     let mirrorWord = word.split('').reverse().join('')
//     console.log(word)
//     console.log(mirrorWord)
//     console.log(word === mirrorWord )
// };
// palindromes2("ka3j3ak!");




// const getTheTitles = function(arr) {
//     return arr.map( name => name.title)
// };
// const books = [
//     {
//         title: 'Book',
//         author: 'Name'
//     },
//     {
//         title: 'Book2',
//         author: 'Name2'
//     }
// ]
// console.log(getTheTitles(books))




// const findTheOldes2t = function(arr) {
//     return arr.reduce((gr, cur) => {
//         let mop;
//         if (!gr.yearOfDeath || !cur.yearOfDeath){
//             gr.yearOfDeath = new Date().getFullYear();
//             cur.yearOfDeath = new Date().getFullYear();
//         }
//        gr.yearOfDeath - gr.yearOfBirth > cur.yearOfDeath - cur.yearOfBirth ? mop = gr : mop = cur
//         return mop
//     })
// };
// const people = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Maniek",
//         yearOfBirth: 2018,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
//     {
//         name: "kryska",
//         yearOfBirth: 1918,
//     },
// ];
// console.log(findTheOldes2t(people))
