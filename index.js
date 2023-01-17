//make variable and print
let value = "Hello World";
console.log(value);

const anotherValue = "Constant Value"
console.log(anotherValue);

//type of value in variable
let x = "a";
console.log(typeof x);

let b = 2;
console.log(typeof b);

//array
let students = ["Aryan", "Aayush", "Ram", "Hari"];
console.log(students);

console.log("First name in Array = ",students[0]);

students[0] = "Krishna";
console.log("Updated First name in Array = ",students[0]);
console.log(students);

//add an item in array
students.push("Ramesh");
console.log(students);

//length of array
console.log("Length of this array is = ",students.length);
console.log("Last item of this array is = ",students[students.length-1]);

//shift and unshift
//shift removes first item in an array
students.shift();
console.log(students);

//unshift adds an item in front of array
students.unshift("Apple");
console.log(students);

//array
let numbers = [0,1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

numbers[8] = "eight";
console.log(numbers);

//splice (from-to)
numbers.splice(2,4 , "Apple");
console.log(numbers);

//slice
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1,4)
console.log("orginal fruits = ", fruits);
console.log("New Fruits = ", citrus);

//getInfo function

function getInfo(FullName, age)
{
    return `My name is ${FullName} and I am ${age} years old.`
}
console.log(getInfo("Aapsara Chapagain", 20));

// angle body function idk what to call this (arrow Function)
const HelloWorld = () => {

    return 'Hello this is NodeJS';
}
console.log(HelloWorld());

const arrowFunction = (age) => {
    return `Hello ${age}`;
}
console.log(arrowFunction(69));

//array loop

let Anumber = [1,2,3,4,5,6,7,8,9,0];
function getEachElement(element,index){

    if (element == 6)
    {
        console.log("Roll no: ",element);
    }
}
Anumber.forEach(getEachElement);

//UPPERCASE

function getFullName(FirstName, LastName, CallBack){
    return CallBack (`${FirstName},${LastName}`);
}
function MakeUpper(Name){
    return Name.toUpperCase();
}
let FullName= getFullName("hari","prashad",MakeUpper);
console.log(FullName);

//same
let countries = ["Afghanistan","Albania","Algeria","Andorra"];
    function makecountryUpperCase(countryName){
        return countryName.toUpperCase();
    }
    countries.map(makecountryUpperCase);

    const UpperCasedCountries = countries.map(makecountryUpperCase);
    console.log(countries);
    console.log(UpperCasedCountries); 

//true or not
console.log(1 !== "1");

if((1<2) && (2<3))
{
    console.log("Given Condition is True.");
}

// const condition ;
// (condition)?"true":"fasle";
// console.log(condition);

//while loop

let NewValue = 0 ;
while (NewValue < 100)
{
    NewValue = NewValue +1;
    console.log(NewValue);
}


//objects

let animal = 
{
    name: "Monkey",
    legs: 4
};

animal.species = "Mammal",
animal.region = "Nervous System"

console.log(animal);

console.log(animal.region);
console.log(animal["region"]);

//myIntro Objects edition

let intro = {};

intro.name = "Aryan Shrestha",
intro.address = "Kentucky",
intro.age = 34,
intro.height = "Tall";

console.log(intro);

console.log(`My name is ${intro.name}.\nI live in ${intro.address}.\nI am ${intro.age} years old and i am ${intro.height}`)

//deletion of keys in object
delete intro .height;
console.log(intro);

//keys and values in object
console.log("Intro objects", Object.keys(intro));
console.log("Intro values objects", Object.values(intro));

//nested Objects

let Objects = 
{
    Hi: {
        name: "Hello",
        age: 69
    },

    notHi: {
        name: "World",
        age: 420
    }
};
console.log(Objects.Hi);
console.log(Objects.notHi);

//find
let questions = ["Name","Class","Age"];

let results = questions.find(function(element){
    
    return element = "Name";
});
console.log(results);

let qon = [11,22,33,44,55];

let qonresults = qon.find(function(element) {

    return element < 55;
});
console.log(qonresults);

//filter(int)
let qon2 = [11,22,33,44,55];

let qon2results = qon.filter(function(element) {

    return element < 55;
});
console.log(qon2results);

// includes(string)
let includesName = ["hari", "curry", "not","curry"];
const nameResult = includesName.find(function(element){
    return element.includes("hari");
});
console.log(nameResult);