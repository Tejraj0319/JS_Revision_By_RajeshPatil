// TYPEOF()
// console.log(typeof(1))
// console.log(typeof(1.2))
// console.log(typeof(13.123))
// console.log(typeof("1"))
// console.log(typeof("Rajesh"))
// console.log(typeof(true))
// console.log(typeof(false))
// console.log(typeof(null))
// console.log(typeof(undefined))



// Not-a-Number
// console.log(isNaN(undefined))
// console.log(isNaN("Rajesh"))
// console.log(isNaN(1))
// console.log(isNaN("1"))
// console.log(isNaN(true))
// console.log(isNaN(false))
// console.log(isNaN(null))


//IIFE
// (function(){
//   console.log("Self invoking function is also known as IIFE (Immediately invoked function)")
// })();



// HOF
// function hof() {
//   return function () {
//     console.log( "A Function which returns another function or takes another function as argument is known as HOC");
//   };
// }
// var x = hof(); // hof() returns the inner function and stores it in "x" i.e. x = function(){ console.log( "---")};
// x(); // and then run actual inner function
// // Or
// hof()();



// THIS KEYWORD
// const user = {
//     definition: "This key word refers to the object that function is property of",
//     age:34,
//     getName: function(){
//         console.log(`"${this.definition}"`)
//         console.log(this)
//     }
// }
// user.getName()



// call, apply, bind is used to set value of this keyword
// call:  "IMMEDIATELY INVOKES"  the function by taking arguments one-by-one
// apply:  "IMMEDIATELY INVOKES"  the function by taking array of arguments
// bind:  "DOES NOT IMMEDIATELY INVOKES"  the function instead returns the new function
// function greet(greeting, name) {
//   console.log(`${greeting}, ${name}`);
// }
// greet.call(null, "Call", "Rajesh"); 
// greet.apply(null, ["Apply", "Rajesh"]);   
// const bound = greet.bind(null, "bind"); 
// bound("Rajesh");                       


// call()
// const person = {
//   name:"Rajesh",
//   getName: function(){
//     console.log(this.name)
//   }
// }
// const person2 = {name: "Sarvesh"}
// person.getName.call(person2)



// apply()
// function saySomething(name, message){
//   console.log(`${name} is ${message} and he is from ${this.city}`)
// }
// const cityName = {city: "Satara"}
// saySomething.apply(cityName,["Rohan","awesome"]);



// exec(): It will return pattern directly.........
// test(): It will return Boolean value..........
// const str = "Hello World!"
// const regex = /Hello/
// console.log(regex.exec(str))
// console.log(regex.test(str))



// currying
// function add(a){
//   return function(b){
//     return function(c){
//       console.log(a+b+c)
//     }
//   }
// }
// add(1)(2)(3);



// scope
// var globalScope = "globalScope!"
// function sendMessage(){
//   var localOrFunctionalScope = "localOrFunctionalScope!"
//   console.log(globalScope)
//   console.log(localOrFunctionalScope)
// }
// sendMessage()
// {
//   var blockScope = "blockScope"
//   console.log(globalScope)
//   console.log(blockScope)
// }



// closures
// function xyz(){
//     var str = "THE ABILITY OF FUNCTION TO REMEMBER THE VARIABLES AND FUNCTIONS DECLEARED IN OUTER SCOPE!"
//     return function(){
//         console.log(str)
//     }
// }
// const refer = xyz()
// refer()
// // or
// xyz()()



// callback function
// function main(defination, callback){
//   console.log("Defination: " + defination)
//   callback()
// }
// function callback(){
// console.log("and callback function get executed after another function get executed!")
// }
// main("A function which is used as an argument to another function is know as callback function",callback);



// recursion
// function recursion(num){
//   if(num == 0){
//     return 0;
//   }
//   else{
//     return num + recursion(num - 1);
//   }
// }
// console.log(recursion(3))



// charAt()
// var str = "Rajesh"
// console.log(str.charAt(2))



// forEach Loop
// const num = [1,2,3]
// num.forEach((i)=>{
//   console.log(i * 2)
// })



// forIn loop = Keys
// const person = {fname:"John", lname:"Doe", age:25};
// for (let keys in person) {
//   console.log(keys)
//   console.log(person[keys]) // to print values
// }



// forOf loop = values
// const cars = ["BMW", "Volvo", "Mini"];
// for(let values of cars){
//   console.log(values)
// }
// // to print idx and value
// for(let [idx, values] of cars.entries()){
//     console.log(idx, values)
// }



// map vs forEach
// const nums = [1, 2, 3];
// const doubled = nums.map(num => num * 2);
// console.log("Map returns a new array: ",doubled);
// const a = [1,2,3,4]
// const array = a.forEach((i)=>{ i*2 })
// console.log("forEach does not returns anything: ",array)



// first class function
// function sayHi(){
//     return "Function Is Treated As An Argument !"
// }
// function firstClassFunc(fn){
//     console.log(fn())
// }
// firstClassFunc(sayHi)



// setInterval & clearInterval: run in set of defined time interval
// let count = 0;
// const intervalId = setInterval(() => {
//   console.log(count++);
//   if (count == 5) {
//     clearInterval(intervalId);
//     console.log("Interval stopped!");
//   }
// }, 1000);


 
// setTimeout & clearTimeout: Run only once after defined time
// const timeoutId = setTimeout(() => {
//   console.log("This will NOT run till 3 sec!");
// }, 3000);
// clearTimeout(timeoutId);
// console.log("Timeout cleared before it could run!");



// Asynchronous (non blocking code execution)
// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 2000); 
// console.log("3");



// callback hell
// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//     }, 1000);
//   }, 1000);
// }, 1000);



// Arrow function
// const arrowFun = (a,b)=>console.log(a+b)
// arrowFun(1,2)



// Promise
// const sumOfThreeNo = (...elements) => {
//   return new Promise((resolve, reject) => {
//     if (elements.length > 3) {
//       reject("Only three elements are allowed!");
//     } else {
//       let sum = 0;
//       let i = 0;
//       while (i < elements.length) {
//         sum += elements[i];
//         i++;
//       }
//       resolve("Sum has been calculated: "+ sum);
//     }
//   });
// };
// sumOfThreeNo(10, 11, 12)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));



// const data = () => {
//   return new Promise((resolve, reject) => {
//     resolve(
//       console.log("Promises is used to handle asynchronous operations in Javascript!")
//     );
//   });
// };
// data();



// PROMISE WITH ASYNC AWAIT
// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("This is promise with async/await")
//         },3000)
//     })
// }
// async function getData(){
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData()


//  SLICE()
let arr = [1, 2, 3, 4, 5];
let result1 = arr.slice(1, 4); //will not include last range
console.log(result1);
console.log("Main arr after slice: ",arr); //will not remove elements from array

//  SPLICE()
let result2 = arr.splice(1, 2);
console.log(result2); // will include all ranges
console.log("Main arr after splice: ",arr); //will remove elements form array

//  PUSH()
arr.push(6)
console.log("Main arr push: ",arr);

// POP()
arr.pop()
console.log("Main arr pop: ",arr);

//  UNSHIFT()
arr.unshift(9)
console.log("Main arr unshift: ",arr);

//  SHIFT()
arr.shift()
console.log("Main arr shift: ",arr);

// flat()
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
console.log(myArr.flat(2));

