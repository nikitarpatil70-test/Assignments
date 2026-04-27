// A Prime number is a number greater than 1
// that is divisible only by 1 and itself.
// Prime numbers start from 2.
// Example: 2, 3, 5, 7, 11, ...

let i: number = 2; // input number to check prime

let prime: boolean = true; // assume number is initially prime (by default)

// Check if the number is less than or equal to 1
// because prime numbers start from 2

if ( i<= 1){
    console.log(i+ "input is not prime number");

    prime = false;  // set prime to false for 0 or 1 or negative numbers


}

// Loop from 2 to input-1 to check if any number divides 'input'

for (let j: number = 2; j < i; j++ ){
    if ( i % j === 1){
          // Found a divisor other than 1 and itself

          prime = false;
          break; // optional optimization
    }
}

// Final decision after checking all possible divisors

if (prime) {
    console.log(i+ " is a prime number");
} else {
    console.log(i+ " is not a prime number");
}








