// synatx to store data in JS Declaration Variable = Data ;

// In Javascript, we can declare the variables by using three diffrent keywords.

//1.var (avoided in the modern javascript)
//2.let (used for variables that can br reassigned)
//3.const (used for constant values that can not be reassigned)

//These three diffrent variable declaration will differ mainly based on the four important parameter

//1.Initialization
//2.Reassignment
//3.Re-declaration
//4.Scope



//1.Initialization ==> Initialization, meaning adding the value at the time of declaration.
var a; // It is mandatory to initialize at the biginning. You can add later as well.
let b; // It is mandatory to initialize at the biginning. You can add later as well.
const c = 10; // It is mandatory to initialize the value at the biginning.


//2.Reassignment ==> Changing the value later.
a = 10;// var will allow reassignment.
b = 20;// let will also allow reassignment.
//c = 30;// constant won't allow reassignment.


//3.Re-declaration ==> Using the same variable to store diffrent data
var a = "Nikita"; // Redeclaration is possible when it comes to var
//let b = "Ankita"; // Redeclaration is not possible
//const c = "Vinita"; // Redeclaration is not possible

//4.Scope ==> scope is all about where we can use this data

// let and const are block scoped
// var is not block scoped

{
    let x = 100;
    const y = 200;
    var z = 500;
//console.log(x);
//console.log(y);
//console.log(z);
}


//console.log(x);
//console.log(y);
console.log(z);
