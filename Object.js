// methods to create Object

// 1. Using Object()
const obj1 = new Object({
    name:"xyz",
    email:"xyz@gmail.com",
    password:"xyz@123"
})

// 2. Using class
class Person {
  constructor(name) {
    this.name = name;
  }
}
const obj2 = new Person("Raj");
console.log(obj2);


// 3. Using Object.create()
const person = {
  greet() {
    console.log("Hello");
  }
};
const obj3 = Object.create(person);
obj3.name = "Raj";
console.log(obj3.name); 
obj3.greet();           


// 4. Using Object Literal (Most Common)
const obj4 = {
  name: "Raj"
};
console.log(obj4);

// 5. Using a Constructor Function
function Person(name) {
  this.name = name;
}
const obj5 = new Person("Raj");
console.log(obj5);



// 6. Using the Object Constructor
const obj6 = Object({
  name: "Raj"
});
console.log(obj6);





let changedName = (person.name = "Om")
let name = person.name
let age = person["age"]
let deletedProperty = delete person.address

console.log(`My name is ${person.name} and I am ${age} years old`)
console.log(person)

let isAvaliable = "name" in person
console.log(isAvaliable)

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


// IMP: while storing keys in object, it stores in given format only, but while returning, it returns in a sorted format ascending, always.