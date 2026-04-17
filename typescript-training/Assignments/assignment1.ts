//Temperature of a city in degrees Celsius: 25.5 

let temp: number = 25.5;
console.log(`Temperature of a city is ${temp} °C`);

// 2. Whether a customer has placed an order: true or false
interface order
{
name : string,
    status: boolean,
}
let orderPlaced: order= {
    name : "venkatesh",
    status: true,
}
console.log(orderPlaced.status);




// 3. Person's phone number: "123-456-7890"

let person : number =  1234567890;
console.log(`person's phone number : ${person}`);

//4. Amount of money in a customer's bank account: 1000.50 
let money: number = 100.50;

console.log(`Amount of money in a customer's bank account:${money}`);

//5.Person's email address: "john.doe@example.com" 

let email: string = ("john.doe@example.com");
console.log(`Person's email address: ${email}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194 

let coodinates: number []= [37.7749, -122.4194];
console.log(`Coordinates of a location (latitude, longitude): ${coodinates}`);

//7. Person's marital status: true or false 
interface person
{
    name: string,
    married: boolean,
    occupation: string,
    favouriteColor : string,
    bloodGroup : string,
    eyeColor : string,
    birthPlace : string,


}
let person1: person= {
    name : "Nikita",
    married: true,
    occupation: "Software Enginner",
    favouriteColor : "Blue",
    bloodGroup : "A",
    eyeColor : "Brown",
    birthPlace : "New York City",
}
console.log("Person's marital status:" +person1.married);

//8.Person's occupation: "Software Engineer" 

console.log( "Person's occupation: " +person1.occupation);

//console.log( person1["occupation"]);

//9. Person's favourite colour: "Blue"

console.log( "Person's favourite colour: " + person1.favouriteColor);

//10.Current year: 2023
let currentDate: number = 2023;
console.log("Current Year:" +(currentDate));

// 11.Number of followers on a social media platform: 1,000,000 

let followers: number= 1000000;
console.log(`Number of followers on a social media platform: ${followers}`);

//12.Rating of a movie: 7.5

let rating: number = 7.5;
console.log(`Rating of a movie: ${rating}`);

//13.Person's blood type: 'A'
console.log("Person's blood type: " +person1.bloodGroup);

//14.Title of a book: "To Kill a Mockingbird" 

let title: string = "To Kill a Mockingbird";
console.log("Title of a book:" +title);

// 15.Number of employees in a company: 500 

let employees: number = 500;

console.log(`Number of employees in a company: ${employees}`);

// 16.Time of an event: 2:30 PM 

//console.log("Time o

//17.Name of a country: "United States" 
let country: string = "United States";
console.log(`Name of a country: ${country}`);

//18.Person's eye color: "Brown" 
console.log("Person's eye color: " +person1.eyeColor);

//19.Person's birthplace: "New York City" 
console.log("Person's birthplace: " + person1.birthPlace);


//20. Distance between two cities: 200.5
 let distance: number = 200.5;
 console.log(`Distance between two cities: ${distance}`);
