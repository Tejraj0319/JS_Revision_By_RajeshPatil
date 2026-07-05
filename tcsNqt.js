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