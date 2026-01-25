// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
// let n  = 5;
// for(let i = 1; i <= n; i++){
//   let pattern = "";
//   let num = i;
//   for(let j = 1; j <= i; j++){
//     pattern += num+" ";
//     num += 1;
//   }
//   console.log(pattern);
// }

// *
// * *
// * * *
// * * * *
// * * * * *
// let n  = 5;
// for(let i = 1; i <= n; i++){
//   let pattern = "";
//   for(let j = 1; j <= i; j++){
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

// * * * * *
// * * * *
// * * *
// * *
// *
// let n  = 5;
// for(let i = 1; i <= n; i++){
//   let pattern = "";
//   for(let j = i; j <= n; j++){
//     pattern += "* ";
//   }
//   console.log(pattern);
// }

//          *
//        * *
//      * * *
//    * * * *
//  * * * * *
// let n  = 5;
// for(let i = 1; i <= n; i++){
//   let pattern = "";
//   let space = "";
//   for(let j = i; j < n; j++){
//     space += "  ";
//   }
//   for(let k = 1; k <= i; k++){
//     pattern += "* "
//   }
//   console.log(space, pattern);
// }

//    * * * * *
//      * * * *
//        * * *
//          * *
//            *
// let n  = 5;
// for(let i = 1; i <= n; i++){
//   let pattern = "";
//   let space = "";
//   for(let j = 1; j <= i; j++){
//       space += "  "
//   }
//   for(let k = i; k <= n; k++){
//       pattern += "* "
//   }
//   console.log(space, pattern)
// }

// * * * * *
// *       *
// *       *
// *       *
// * * * * *
// let n = 5;
// for(let i = 1; i <= n ; i++){
//     let pattern = "";
//     for(let j = 1; j <= n; j++){
//         if(i === 1 || i === n || j === 1 || j === n){
//             pattern +="* ";
//         }
//         else{
//             pattern += "  "
//         }
//     }
//     console.log(pattern)
// }

// *
// * *
// *   *
// *     *
// * * * * *
// let n = 5;
// for(let i = 1; i <= n ; i++){
//     let pattern = "";
//     for(let j = 1; j <= i; j++){
//         if(j === i || j === 1 || i === n){
//             pattern +="* ";
//         }
//         else{
//             pattern += "  "
//         }
//     }
//     console.log(pattern)
// }

// * * * * *
// *     *
// *   *
// * *
// *
// let n = 5;
// for(let i = 1; i <= n; i++){
//     let pattern = "";
//     for(let j = i; j <= n; j++){
//         if(j == i || j == n || i == 1){
//             pattern +="* ";
//         }else{
//             pattern += "  ";
//         }
//     }
//     console.log(pattern);
// }

//   * * * * *
//     *     *
//       *   *
//         * *
//           *
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += "  ";
//   }
//   for (let k = i; k <= n; k++) {
//     if (k == i || k == n || i == 1) {
//       pattern += "* ";
//     }
//     else{
//         pattern += "  "
//     }
//   }
//   console.log(pattern);
// }



//           * 
//         * * * 
//       * * * * * 
//     * * * * * * * 
//   * * * * * * * * * 
// * * * * * * * * * * * 

// let n = 5;
// for(let i = 0; i <= n; i++){
//   let pattern = "";
//   for(let j = i; j <= n; j++){
//       pattern += "  "
//   }
//   for(let k = 0; k <= i; k++){
//       pattern += "* "
//   }
//   for(let l = 0; l < i; l++){
//       pattern += "* "
//   }
//   console.log(pattern)
// }



//           *   
//         *   *   
//       *   *   *   
//     *   *   *   *   
//   *   *   *   *   *   
// *   *   *   *   *   *  

let n = 5;
for (let i = 0; i <= n; i++) {
  let pattern = "";
  for (let j = i; j <= n; j++) {
    pattern += "  "
  }
  for (let k = 0; k <= i; k++) {
    pattern += "*   "
  }
  console.log(pattern)
}