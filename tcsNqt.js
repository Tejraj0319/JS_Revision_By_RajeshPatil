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
