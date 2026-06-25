const person = {
    name: "Rajesh",
    age: 24,
    address: "Pune"
}

const obj1 = new Object({
    name:"xyz",
    email:"xyz@gmail.com",
    password:"xyz@123"
})
console.log(obj1)

// let changedName = (person.name = "Om")
// let name = person.name
// let age = person["age"]
// let deletedProperty = delete person.address

// console.log(`My name is ${person.name} and I am ${age} years old`)
// console.log(person)

// let isAvaliable = "name" in person
// console.log(isAvaliable)

for(let i in person){
    console.log(`${i} = ${person[i]}`)
}

const myObj = {
    firstName: "Rajesh",
    lastName: "Patil",
    age: 24,
    fullname: function () {
        return `My name is ${this.firstName} ${this.lastName}`
    }
}
console.log(myObj.fullname())


// it returns keys form object in form of array
console.log(Object.keys(person))
// it returns values form object in form of array
console.log(Object.values(person))
// it returns key:value pair from object in form of array
console.log(Object.entries(person))

const target = {
    name: "xyz",
    email: "xyz@gmail.com"
}
const source = {
    name: "abc",
    email: "abc@gmail.com"
}
// It assigns properties of target object to source object
console.log(Object.assign(target,source))
