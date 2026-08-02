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



// Write fibonacci series
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

// without inbuilt methods

// const reverseWords = (str) => {
//     let word = ""
//     let reverse = ""
//     for (let i = 0; i <= str.length; i++) {
//         if (str[i] !== " " && i !== str.length) {
//             word += str[i]
//         }
//         else {
//             for (let j = word.length - 1; j >= 0; j--) {
//                 reverse += word[j]
//             }
//             if(i !== str.length){
//                 reverse += " "
//             }
//             word = "";
//         }
//     }
//     return reverse;
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
// const isIsomorphic = (str1, str2)=>{
//   if(str1.length != str2.length)return false;
//   let obj1 = {}
//   let obj2 = {}
//   for(let i = 0; i < str1.length; i++){
//     let char1 = str1[i]
//     let char2 = str2[i]
//     if(obj1[char1] && obj1[char1] !== char2){
//       return false;
//     }
//     if(obj2[char2] && obj2[char2] !== char1){
//       return false;
//     }
//     obj1[char1] = char2
//     obj2[char2] = char1
//   }
//   return true;
// }
// console.log(isIsomorphic("egg", "add"))



// Find the First Unique Character in a String
// const firstUniqueChar = (str)=>{
//   let freq = {}
//   for(let char of str){
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   for(let char of str){
//     if(freq[char] === 1){
//       return char;
//       break;
//     }
//   }
// }
// console.log(firstUniqueChar("loveleetcode")); 


// toLowerCase
// const toLowerCase = (str) => {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i)
//         if (charCode >= 65 && charCode <= 90) {
//             result += String.fromCharCode(charCode + 32)
//         }
//         else {
//             result += str[i];
//         }
//     }
//     return result
// }
// console.log(toLowerCase("RAJESH aNANta paTIL"))



// Product of Array Except Self
// const productExceptSelf = (arr)=>{
//   let newArr = []
//   for(let i = 0; i < arr.length; i++){
//     let prod = 1;
//     for(let j = 0; j < arr.length; j++){
//       if(i != j){
//         prod = prod * arr[j]
//       }
//       newArr[i] = prod
//     }
//   }
//   return newArr;
// }
// console.log(productExceptSelf([1, 2, 3, 4])); 



// Rotate Array by K Steps (Right Rotation)
// const rotateArray = (arr, k)=>{
//     const result = [];
//     let n = arr.length;
//     for(let i = n - k; i < n; i ++){
//         result.push(arr[i])
//     }
//     for(let i = 0; i < n - k; i ++){
//         result.push(arr[i])
//     }
//     return result;
// }
// console.log(rotateArray([1,2,3,4,5,6,7,8,9], 2));


// Find Duplicate Elements in an Array
// const findDuplicates = (arr)=>{
//   const map = {};
//   const duplicates = [];
//   for(let num of arr){
//     map[num] = (map[num] || 0 ) + 1
//   }

//   for(let key in map){
//     if(map[key] > 1){
//       duplicates.push(Number(key))
//     }
//   }
//   return duplicates;
// }
// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); 


// Single number
// var singleNumber = (arr) => {
//   let xor = 0;
//   for (let num of arr) {
//     xor = xor ^ num
//   }
//   return xor;
// }
// console.log(singleNumber([1, 1, 2, 2, 4]))


// Find Missing no using xor
// const findMissing = (arr,n)=>{
//   let xor = 0;
//   for(let i = 1; i <= n; i++){
//     xor ^= i
//   }
//   for(let num of arr){
//     xor ^= num
//   }
//   return xor
// }
// console.log(findMissing([1,2,3,5], 5));


// Custom Reduce Function Implementation
// const myFunction = (arr, callback, initialValue) => {
//   let accumulator = initialValue;
//   for (let i = 0; i < arr.length; i++) {
//     accumulator = callback(accumulator, arr[i])
//   }
//   return accumulator
// }
// const num = [1, 2, 3, 4]
// const result = myFunction(num, function (acc, curr) {
//   return acc + curr;
// }, 0)
// console.log("Sum: ", result)


// String Compression
// const stringCompression = (str)=>{
//   let count = 1;
//   let newStr ="";
//   for(let i = 1; i <= str.length; i++){
//     if(str.charAt(i-1) === str.charAt(i)){
//       count++;
//     }
//     else{
//       newStr += str.charAt(i-1) + count;
//       count = 1;
//     }
//   }
//   return newStr.length < str.length ? newStr : str;
// }
// console.log(stringCompression("aabcccccaaa"))



// Valid Parentheses
// const isValid = (str) => {
//   let stack = [];
//   for (let element of str) {
//     if (element === "(" || element === "{" || element === "[") {
//       stack.push(element)
//     }
//     else {
//       let last = stack.pop()
//       if ((element === ")" && last != "(") || (element === "}" && last !== "{") || (element === "]" && last !== "[")) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
// console.log(isValid("({[]})"));



// maximum product of any continuous subarray
// const maxProductSubarray = (nums) => {
//     let max = nums[0]; //-2, 3, -6
//     let min = nums[0]; //-2, -6, 3
//     let result = nums[0]; //-2, 3, 24
//     for (let i = 1; i < nums.length; i++) {
//         // i= 3, -4
//         // swap if negative number
//         if (nums[i] < 0) {
//             [max, min] = [min, max];
//         }
//         max = Math.max(nums[i], nums[i] * max); // (3,3*-2)=3, (-4, -4*-6)=24
//         min = Math.min(nums[i], nums[i] * min); // (3,3*-2)=-6, (-4, -4*3)= -12
//         result = Math.max(result, max); //(3, 24) = 24
//     }
//     return result;
// };
// console.log(maxProductSubarray([-2, 3, -4]));



// Group Anagrams
// const groupAnagrams = (strs)=>{
//   const map = {}
//   for(let str of strs){
//     const key = str.split("").sort().join("")
//     if(!map[key]){
//       map[key] = [];
//     }
//     map[key].push(str)
//   }
//   return Object.values(map);
// }
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));



// Find the Majority Element(element that appears more than n/2 times.)
// const majorityElement = (arr)=>{
//     const map = {};
//     for(let num of arr){
//         map[num] = (map[num] || 0)+1
//     }
//     for(let key in map){
//         if(map[key] > arr.length/2){
//             return key;
//         }
//     }
// }
// console.log(majorityElement([2,1,1,3,3,3,3,3]));



// Find the Maximum Consecutive 1's in an Array
// const maxConsecutiveOnes = (arr)=>{
//     let count = 0;
//     let maxCount = 0;
//     for(let num of arr){
//         if(num === 1){
//             count++
//             maxCount = Math.max(count, maxCount);
//         }
//         else{
//             count = 0
//         }
//     }
//     return maxCount;
// }
// console.log(maxConsecutiveOnes([1,1,0,1,1,1]))



// Two Sum
// const twoSum = (arr, target)=>{
//     let i = 0;
//     let j = arr.length - 1;
//     while(i < j){
//         if(arr[i] + arr[j] == target) return [i, j]
//         if(arr[i] + arr[j] < target){
//             i++;
//         }
//         else{
//             j--;
//         }
//     }
//     return [i,j];
// }
// console.log(twoSum([2, 11, 7, 15], 9));



// Find the First Recurring Character
// const firstRecurringChar = (str)=>{
//     let seen = new Set()
//     for(let char of str){
//         if(seen.has(char)){
//             return char
//         }
//         seen.add(char)
//     }
// }
// console.log(firstRecurringChar("abbcc"));



// Merge Two Sorted Arrays
// const mergeSortedArrays = (arr1, arr2) => {
//     let i = 0;
//     let j = 0;
//     let result = [];
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i])
//             i++;
//         }
//         else {
//             result.push(arr2[j])
//             j++;
//         }
//     }
//     while (i < arr1.length) {
//         result.push(arr1[i])
//         i++;
//     }
//     while (j < arr2.length) {
//         result.push(arr2[j])
//         j++;
//     }
//     return result;
// }
// console.log(mergeSortedArrays([1, 2, 3, 5, 7], [4, 6]));



// Separate Numbers and Strings in an Array
// const separate = (arr)=>{
//     let strArray = [];
//     let numArray = [];
//     for(let i in arr){
//         if(isNaN(arr[i])){
//             strArray.push(arr[i])
//         }
//         else{
//             numArray.push(arr[i])
//         }
//     }
//     return [strArray, numArray]
// }
// console.log(separate([10,'a','b','c',11,4]))



// Longest Substring with At Most K Distinct Characters
// const longestSubstringKDistinct = (s, k) => {
//     let left = 0;
//     let maxLength = 0;
//     let count = {};
//     for (let right = 0; right < s.length; right++) {
//         let char = s[right];
//         count[char] = (count[char] || 0) + 1;
//         while (Object.keys(count).length > k) {
//             count[s[left]]--;
//             if (count[s[left]] === 0) {
//                 delete count[s[left]];
//             }
//             left++;
//         }
//         maxLength = Math.max(maxLength, right - left + 1);
//     }
//     return maxLength;
// };
// console.log(longestSubstringKDistinct("eceba", 2));



// isPrime
// const isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(3))



// Binary Search: search for a target value in a sorted array
// const binarySearch = (arr, target) => {
//     let low = 0;
//     let high = arr.length - 1;
//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] > target) {
//             high = high - 1;
//         }
//         else {
//             low = mid + 1;
//         }
//     }
//     return -1;
// }
// const arr = [10, 20, 30, 40, 50, 60];
// console.log(binarySearch(arr, 40));



// LeetCode 394 - Decode String
// function decodeString(s) {
//     let stack = [];
//     let currentString = "";
//     let currentNumber = 0;
//     for (let ch of s) {
//         if (!isNaN(ch)) {
//             currentNumber = currentNumber * 10 + Number(ch)
//         }
//         else if (ch === "[") {
//             stack.push(currentString)
//             stack.push(currentNumber)
//             currentString = "";
//             currentNumber = 0;
//         }
//         else if(ch === "]"){
//             const repeat = stack.pop()
//             const prevStr = stack.pop()
//             currentString = prevStr + currentString.repeat(repeat)
//         }
//         else{
//             currentString += ch;
//         }
//     }
//     return currentString;
// }
// console.log(decodeString("2[abc]3[cd]ef"));




// LeetCode 121 - Best Time to Buy and Sell Stock
// const maxProfit = (arr) => {
//     let minPrice = arr[0];
//     let maxProfit = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > minPrice) {
//             const currentProfit = arr[i] - minPrice
//             maxProfit = Math.max(maxProfit, currentProfit)
//         }
//         else if (arr[i] == minPrice) {
//             minPrice = arr[i]
//         }
//         else {
//             minPrice = arr[i]
//         }
//     }
//     return maxProfit > 0 ? maxProfit : 0;
// }
// console.log(maxProfit([3, 8, 2, 5, 1, 9])); 



// Tech Number
// let digits = 0
// const countDigits = (n) => {
//     let temp = n
//     while (temp > 0) {
//         digits++;
//         temp = (temp / 10) | 0
//     }
// }
// const isTechNum = (num) => {
//     countDigits(num);
//     let halfLength = digits / 2;
//     if (digits % 2 !== 0) {
//         console.log("Not a techNumber!")
//     }
//     let divisor = 1;
//     for (let i = 0; i < halfLength; i++) {
//         divisor = divisor * 10;
//     }
//     let firstHalf = (num / divisor) | 0
//     let secondHalf = num % divisor
//     let sumAndSquareOfHalf = (firstHalf + secondHalf) ** 2;
//     if (sumAndSquareOfHalf === num) {
//         console.log("Is techNumber")
//     }
//     else {
//         console.log("Not a techNumber")
//     }
// }
// isTechNum(2025)



// LeetCode 643 – Maximum Average Subarray I
// const maximumAverageSubarrayI = (arr, k) => {
//     let windowSum = 0
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i]
//     }
//     let maxSum = windowSum;
//     for (let i = k; i < arr.length; i++) {
//         windowSum += arr[i]
//         windowSum -= arr[i - k]
//         maxSum = Math.max(maxSum, windowSum)
//     }
//     return maxSum / k;
// }
// console.log(maximumAverageSubarrayI([1, 12, -5, -6, 50, 3], k = 4))



// sort array elements
// const sortArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortArray([5, 2, 8, 1, 4]));



// Count of Zeros and Ones in an Array
// const countZerosAndOnes = (arr)=>{
//     let ones = 0;
//     for(let i = 0; i < arr.length; i++){
//         ones += arr[i]
//     }
//     console.log("count of 1 is: ",ones)
//     console.log("Count of zeros is : ",arr.length - ones);
// }
// countZerosAndOnes([0,0,0,1,1,1,0,1,1,1,1,0,1,0,0]);



// Maximum Sum of K Consecutive Elements
// const maxSumSubarray = (arr, k) => {
//     let windowSum = 0;
//     for (let i = 0; i < k; i++) {
//         windowSum += arr[i]
//     }
//     let maxSum = windowSum;
//     for (let i = k; i < arr.length; i++) {
//         windowSum = windowSum - arr[i - k] + arr[i]
//         if (windowSum > maxSum) {
//             maxSum = windowSum
//         }
//     }
//     return maxSum;
// };
// console.log(maxSumSubarray([2, 1, 10, 1, 3, 2], 3));



// LeetCode 209 - Minimum Size Subarray Sum
// const minSubArrayLen = (target, arr) => {
//     let sum = 0
//     let left = 0
//     let minLength = Infinity
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         while (sum >= target) {
//             // minLength = Math.min(minLength, i - left + 1)
//             let currentLength = i - left + 1
//             if(minLength > currentLength){
//                 minLength = currentLength
//             }
//             sum = sum - arr[left]
//             left++;
//         }
//     }
//     return minLength === Infinity ? 0 : minLength;
// }
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));



// Find the Maximum Occurring Character in a String
// const maxOccurringChar = (str) => {
//     let map = {}
//     let maxCount = 0
//     let char = ""
//     for (let i = 0; i < str.length; i++) {
//         map[str[i]] = (map[str[i]] | 0) + 1
//         if (map[str[i]] > maxCount) {
//             maxCount = map[str[i]]
//             char = str[i]
//         }
//     }
//     return char;
// }
// console.log(maxOccurringChar("hello")); 



// LeetCode 125 - Valid Palindrome
// function isPalindrome(s) {
//     let newStr = ""
//     for (let i = 0; i < s.length; i++) {
//         let ascii = s.charCodeAt(i)
//         if (ascii >= 65 && ascii <= 90) {
//             ascii = ascii + 32
//         }
//         if ((ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57)) {
//             newStr += String.fromCharCode(ascii)
//         }
//     }
//     let left = 0;
//     let right = newStr.length - 1
//     while (left < right) {
//         if (newStr[left] !== newStr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("A man, a plan, a canal: Panama"));



// Find Leaders in an Array
// function findLeaders(arr) {
//     const leaders = [];
//     let maxRight = arr[arr.length - 1];
//     leaders.push(maxRight)
//     for (let i = arr.length - 2; i >= 0; i--) {
//         if (arr[i] > maxRight) {
//             leaders.push(arr[i]);
//             maxRight = arr[i]
//         }
//     }
//     leaders.reverse();
//     return leaders;
// }
// console.log(findLeaders([16, 17, 4, 3, 5, 2]));


// Merge Overlapping Intervals (Medium)
// function mergeIntervals(intervals) {
//     if (intervals.length <= 1) {
//         return intervals;
//     }
//     intervals.sort((a, b) => a[0] - b[0])
//     const result = []
//     result.push(intervals[0])
//     for(let i = 1; i < intervals.length; i++){
//         let lastInterval = result[result.length-1]
//         let currentInterval = intervals[i]
//         if(currentInterval[0] <= lastInterval[1]){
//             lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
//         }
//         else{
//             result.push(currentInterval)
//         }
//     }
//     return result;
// }
// console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));



// Longest Subarray with Sum ≤ K
// function longestSubarray(nums, k) {
//     let maxLength = 0;
//     let left = 0
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         while (sum > k) {
//             sum -= nums[left]
//             left++;
//         }
//         let length = i - left + 1
//         if (maxLength < length) {
//             maxLength = length
//         }
//     }
//     return maxLength
// }
// console.log(longestSubarray([2, 1, 5, 1, 3, 2], 7));



// Find the Length of the Last Word
// const lengthOfLastWord = (str) => {
//     let count = ""
//     let i = str.length - 1
//     // Avoid trailing spaces 
//     while (i >= 0 && str[i] === " ") {
//         i--;
//     }
//     // Count char of last word
//     while (i >= 0 && str[i] !== " ") {
//         i--;
//         count++;
//     }
//     return count;
// }
// console.log(lengthOfLastWord("luffy is still joyboy ")); 




// LeetCode 42 - Trapping Rain Water(Hard)
//                          █
// █~~~~~~~~~~~~~~~~~~~~~~~~█
// █~~~~~~~~~~~~~~█~~~~~~~~~█
// █~~~~~█~~~~~~~~█~~~~█~~~~█
// █~~~~~█~~~~~~~~█~~~~█~~~~█
// ----------------------------
// 4     2    0   3    2    5

// █ = Wall, ~ = Water
// 0, 4 - 2 = 2, 4 - 0 = 4, 4 - 3 = 1, 4 - 2 = 2, 0
// 0 + 2 + 4 + 1 + 2 + 0 = 9
// const trap = (arr) => {
//     let left = 0;
//     let right = arr.length - 1
//     let water = 0
//     let leftMax = 0
//     let rightMax = 0
//     while (left < right) {
//         if (arr[left] < arr[right]) {
//             if (arr[left] >= leftMax) {
//                 leftMax = arr[left]
//             }
//             else {
//                 water += leftMax - arr[left]
//             }
//             left++;
//         }
//         else {
//             if (arr[right] >= rightMax) {
//                 rightMax = arr[right]
//             }
//             else {
//                 water += rightMax - arr[right]
//             }
//             right--;
//         }
//     }
//     return water;
// }
// console.log(trap([4, 2, 0, 3, 2, 5]));



// LeetCode 11 - Container With Most Water(Medium)
// const maxArea = (arr) => {
//     let left = 0;
//     let right = arr.length - 1;
//     let water = 0;
//     while (left < right) {
//         let width = right - left
//         let currentArea = Math.min(arr[left], arr[right]) * width
//         water = Math.max(water, currentArea)
//         if (arr[left] > arr[right]) {
//             right--;
//         }
//         else {
//             left++;
//         }
//     }
//     return water;
// }
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));



// LeetCode 5 - Longest Palindromic Substring(Medium)
function longestPalindrome(str) {
    let longest = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let left = i;
            let right = j;
            let isPalindrome = true;
            while (left < right) {
                if (str[left] !== str[right]) {
                    isPalindrome = false;
                    break;
                }
                left++;
                right--;
            }
            if (isPalindrome) {
                if ((j - i + 1) > longest.length) {

                    longest = "";
                    for (let k = i; k <= j; k++) {
                        longest += str[k];
                    }
                }
            }
        }
    }
    return longest;
}