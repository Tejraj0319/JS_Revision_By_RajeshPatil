// console.log(5+5*2-2*4);  // it follows rules () / * + -

// const str = "asdfghjkl";
// for(let i = 0; i < str.length; i++){
//   console.log(str[i])
// }


// let str = "abc pqr xyz";
// let words = str.split(" ")
// for(let a in words){
//     console.log(a)
// }
// for(let a of words){
//     console.log(a)
// }
// of = values
// in = indexes


// const arr = [1,2,3,4,5]
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }
// arr.forEach((i)=>{
//   console.log(i)
// })



// let str = "Hello World!"
// let count = 0;
// for(let i = 0; i < str.length; i++){
//   if(str[i] == "l"){
//     count++;
//   }
// }
// console.log(count)



// for(let i = str.length-1; i != 0; i--){
//   console.log(str[i])
// }



// let str = "I love JavaScript programming";
// let longest = ""
// let words = str.split(" ");
// for(let a of words){
//   if(a.length > longest.length){
//     longest = a;
//   }
// }
// console.log(longest)



// let str = "madam";
// let reversed = str.split("").reverse().join("")
// if(str == reversed){
//   console.log("Palindrome")
// }
// else{
//   console.log("Not Palindrome")
// }




// function fizzBuzz(n){
//   for(let i = 1; i <= n; i++){
//     if(i % 3 == 0){
//       console.log("Fizz")
//     }
//     else if(i % 5 == 0){
//       console.log("Buzz")
//     }
//     else if(i % 3 == 0 && i % 5== 0){
//       console.log("FizzBuzz")
//     }
//     else{
//       console.log(i)
//     }
//   }
// }
// fizzBuzz(15)




// let str2 = "Hello"
// const count = {};
// for(let char of str2){
//   if(count[char]){
//     count[char]++;
//   }
//   else{
//     count[char] = 1
//   }
// }
// console.log(count)



// function fibonacci(n){
//     const series = [0, 1];
//     for(let i = 2; i < n; i++){
//         series[i] = series[i-1] + series[i-2];
//     }
//       return series;
// }
// console.log(fibonacci(10));
