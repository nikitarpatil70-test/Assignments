//Syntax to store data: Declaration Variable = Data;

//  Data types in javascript are divided into two different categories.
//1. Primitive Data Types (immutable data types)
//2. Non-Primitive Data Types (mutable data types)

//immutable 

let a = 10; // storing number
a+10; // adding number
console.log(a);

//mutable

let b = [1, 2, 3]; //storing array
b.push(4);
console.log(b);

/************************************************/
/**********Primitive Data Types******************/
/************************************************/

// 1. number ==> The data type that can help us to store numbers with decimal or without decimal.
let num1 = 10;
let num2 = 10.55;
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

// 2. string ==> The data type that can help us to store text values. We can use single or double quotes or back ticks.
let str1 = "He told me, 'Good morning.'";
let str2 = 'I replied back with, "Good afternoon."';
console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);


let empName = "Nikita";
let location = "MH"
console.log("New Employee Name is "+empName+" and Location is "+location);
console.log(`New Employee Name is ${empName} and Location is ${location}`);

//3.boolean ==> The data type that can help us to store the result of a condition in the form of true or false.

let x = 10;
let y = 20;
let result = x > y;
console.log(result);
console.log(typeof result);

//4.undefined==> undefined represents a variable that has been declared but not assigned any value.

let age;
console.log(age);

//5. null ==> Null represnts a variable that has been declared and intentially assigned an empty value.

let salary = 100000;
salary = null;
console.log(salary);


//6.symbol ==>



/*****************************************************/
/**********Non-Primitive Data Types******************/
/***************************************************/

//1.object ==> Object data type represents a collection of key value pairs.

let person = {
    name: "Nikita",
    age: 28,
    visaStatus: true,
    address:  {
        city: "Kop",
        state: "MH",
        zip: 416012
    }
}
// print the name of person
console.log(person.name); //method 1
console.log(person["name"]); // method 2

// print the city of person
console.log(person.address.city); //method 1
console.log(person.address["city"]); // method 2

// print the complete person details
console.log(person);

//2.Array ==> represents list of values.

let fruits = ["apple","banana","orange","mango"];
let prices = [300, 80, 200, 220];
let fruitsAndPrices = ["apple", 300, "banana", 80, "orange", 200, "mango", 220];

//print mango from fruits
console.log(fruits[3]);

//print price of banana from fruitsAndPrices
console.log(fruitsAndPrices[3]);

//3. function ==> function represnts a block of code or collection of statement to compelete a perticular task.