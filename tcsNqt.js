// ISBN Number Validation
const isValidISBN = (isbn) => {
    let sum = 0;
    isbn = isbn.toString();
    if (isbn.length !== 10) {
        return "Invalid";
    }
    for (let i = 0; i < isbn.length; i++) {
        sum += (i + 1) * isbn[i]
    }
    return sum % 11 === 0 ? "is ISBN" : "Not ISBN"
}
console.log(isValidISBN(1401601499));



// Armstrong Number
const isArmstrong = (n) => {
    let num = n
    let sum = 0
    while (num > 0) {
        let x = num % 10
        sum += x * x * x
        num = (num / 10) | 0;
    }
    return sum === n ? "isArmstrong" : "Not armstrong"
}
console.log(isArmstrong(153));



// Adam Number
const reverse = (num) => {
    let reverse = 0;
    while (num > 0) {
        reverse = (reverse * 10) + num % 10
        num = (num / 10) | 0
    }
    return reverse;
}
const isAdam = (n) => {
    let reversedNum = reverse(n);
    let squareOfOriginalNum = n * n;
    let squareOfReverseNum = reversedNum * reversedNum;

    return squareOfOriginalNum === reverse(squareOfReverseNum) ? "Is ADAM" : "NOT ADAM";
}
console.log(isAdam(14));



// Friendly Pair
const sumOfProperDivisors = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum / num;
}
const friendlyPair = (num1, num2) => {
    let a = sumOfProperDivisors(num1)
    let b = sumOfProperDivisors(num2)
    return a === b ? "Friendly Pair" : "Not Friendly Pair"
}
console.log(friendlyPair(30, 140))



// Automorphic Number
const automorphicNumber = (n) => {
    let square = n * n;
    let temp = n
    while (temp > 0) {
        if (temp % 10 !== square % 10) {
            return "Not an Automorphic Number!"
        }
        temp = Math.floor(temp / 10)
        square = (square / 10) | 0
    }
    return "Is an Automorphic Number"
}
console.log(automorphicNumber(25));



// Neon Number
function isNeon(num) {
    let square = num * num;
    let sum = 0
    while (square > 0) {
        sum += square % 10;
        // square = Math.floor(square / 10)
        square = (square / 10) | 0;
    }
    return sum === num;
}
console.log(isNeon(9))



// Spy Number
function isSpy(num) {
    let prod = 1
    let sum = 0
    while (num > 0) {
        let digit = num % 10
        prod *= digit
        sum += digit
        num = (num / 10) | 0
    }
    return prod === sum;
}
console.log(isSpy(1124));



// Xylem and Phloem Number
function checkXylemPhloem(num) {
    let temp = num;
    let lastDigit = temp % 10;
    temp = (temp / 10) | 0;
    let meanSum = 0
    while (temp >= 10) {
        meanSum += temp % 10
        temp = (temp / 10) | 0;
    }
    let firstDigit = temp
    let extremeSum = firstDigit + lastDigit
    if (extremeSum === meanSum) {
        console.log('Xylem Number')
    }
    else {
        console.log('Phloem Number')
    }
}
checkXylemPhloem(12345); 
checkXylemPhloem(34326);