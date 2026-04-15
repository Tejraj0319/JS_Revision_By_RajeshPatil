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



// Check if a string is a palindrome
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



// Find Second Largest Element in Array
// const secondLargest = (arr) => {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         }
//         else if (arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }
//     return secondLargest;
// }
// console.log(secondLargest([10, 5, 20, 8, 15]))



// Remove Duplicates from Array
// const removeDuplicates = (arr)=>{
//     let result = [];
//   for(let i = 0; i < arr.length; i++){
//     let flag = false;
//     for(let j = 0; j < result.length; j++){
//       if(arr[i] === result[j]){
//         flag = true;
//         break;
//       }
//     }
//     if(!flag){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));



// Count frequency of each character in a string.
// const charCount = (str)=>{
//   let count = {};
//   for(let char of str){
//     count[char] = (count[char] || 0) + 1;
//   }
//   return count;
// }
// console.log(charCount("aabbc")); 



// Reverse Words in a Sentence
// const reverseWords = (str)=>{
//     let result = []
//     let words = str.split(" ");
//     for(let word of words){
//         let reverse = word.split("").reverse().join("")
//         result.push(reverse)
//     }
//     return result.join(" ")
// }
// console.log(reverseWords("hello world"))



// Move All Zeros to End
// const moveZeros = (arr)=>{
//     const newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] != 0){
//             newArr.push(arr[i]);
//         }
//     }
//     let j = newArr.length;
//     while(j < arr.length){
//         newArr.push(0);
//         j++;
//     }
//     return newArr;
// }
// console.log(moveZeros([0,1,0,3,12]));



// Check if two strings are anagrams
// const isAnagram = (str1,str2)=>{
//     if(str1.length != str2.length)return false
//     const s1 = str1.toLowerCase().split("").sort().join("")
//     const s2 = str2.toLowerCase().split("").sort().join("")
//     return s1 === s2
// }
// console.log(isAnagram("listen", "silent"));



// Find Missing Number in Array (1 to n)
// const findMissing = (arr)=>{
//     const n = arr.length + 1;
//     const sumOfFirstNNaturalNo = n*(n+1)/2;
//     const sumOfArray = arr.reduce((acc, curr)=> acc+curr,0);
//     return sumOfFirstNNaturalNo - sumOfArray;
// }
// console.log(findMissing([1, 2, 3, 5]));



// Sort Array by Parity(Even first, then Odd)
// const sortByParity = (arr)=>{
//     let even = [];
//     let odd = [];
//     for(let num of arr){
//         if(num % 2 == 0){
//             even.push(num)
//         }
//         else{
//             odd.push(num)
//         }
//     }
//     return [...even, ...odd];
// }
// console.log(sortByParity([3, 1, 2, 4]));



// Find First Non-Repeating Element
// const firstNonRepeating = (arr)=>{
//   let map = {}
//   for(let num of arr){
//     map[num] = (map[num] || 0) + 1;
//   }
//   for(let num of arr){
//     if(map[num] === 1){
//       return num;
//     }
//   }
// }
// console.log(firstNonRepeating([4, 5, 1, 2, 0, 4, 1, 0]));



// Find Pair with Given Sum
// const twoSum = (arr,target)=>{
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//       if(arr[i] + arr[j] == target){
//         return [arr[i], arr[j]];
//       }
//       else{
//         return [];
//       }
//     }
//   }
// }
// console.log(twoSum([2, 7, 11, 15], 13));



// find the index from elements started repeating
// const repeating = (arr)=>{
//   let set = new Set();
//   for(let num of arr){
//     set.add(num)
//   }
//   return set.size
// }
// console.log(repeating([1,2,3,4,5,6,1,2]));



// Longest Substring Without Repeating Characters
// const longestSubstring= (s)=>{
//   let maxlength = 0;
//   let arr = []
//   for(let char of s){
//     while(arr.includes(char)){
//       arr.shift()
//     }
//     arr.push(char)
//     maxlength = Math.max(maxlength, arr.length)
//   }
//   return maxlength
// }
// console.log(longestSubstring("abcabcbb"));


// Find the Maximum Subarray Sum (Kadane’s Algorithm)
// const maxSubArray = (arr)=>{
//   let currentSum = 0;
//   let maxSum = 0;
//   for(let num of arr){
//     let sum = currentSum + num;
//     if(sum < 0){
//       currentSum = 0
//     }
//     else{
//       currentSum = sum;
//     }
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }
// console.log(maxSubArray([-2,1,-3,4,-1,3,1,-5,4])); 



// Find the Longest Common Prefix
// const longestCommonPrefix = (str)=>{
//   str.sort();
//   let firstWord = str[0]
//   let lastWord = str[str.length-1]
//   let prefix = ""
//   for(let i = 0; i < firstWord.length && i < lastWord.length; i++){
//     if(firstWord.charAt(i) == lastWord.charAt(i)){
//       prefix += firstWord.charAt(i)
//     }
//     else{
//       break
//     }
//   }
//   return prefix;
// }
// console.log(longestCommonPrefix(["apple", "app", "application"])); 



// Find the Intersection of Two Arrays
// const intersection = (arr1,arr2)=>{
//   let newArr = [];
//   for(let i = 0; i < arr1.length; i++){
//     let index = arr2.indexOf(arr1[i])
//     // 1 found, -1 not found
//     if(index !== -1){
//       newArr.push(arr1[i]);
//       arr2.splice(index,1)
//     }
//   }
//   return newArr;
// }
// console.log(intersection([1,2,2,3,4], [2,2,4,6,1]));



// Check if Two Strings are Isomorphic
const isIsomorphic = (str1, str2)=>{
  if(str1.length != str2.length)return false;
  let obj1 = {}
  let obj2 = {}
  for(let i = 0; i < str1.length; i++){
    let char1 = str1[i]
    let char2 = str2[i]
    if(obj1[char1] && obj1[char1] !== char2){
      return false;
    }
    if(obj2[char2] && obj2[char2] !== char1){
      return false;
    }
    obj1[char1] = char2
    obj2[char2] = char1
  }
  return true;
}
console.log(isIsomorphic("egg", "add"))

