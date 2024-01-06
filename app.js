console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log("FIZZBUZZ");
    } else {
        if (i % 3 ==0) {
            console.log("FIZZ");
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
    }
}
console.log("EXERCISE 3:\n==========\n");
let i = 1;

while(i < 100) {
    if (i % 2 !== 0) {
        console.log(i);
    } 
    i++;
}

let x = 1;

do {
    if (x % 2 !== 0) {
        console.log(x);
    }
    x++;
} while (x < 100);

let a = 1;

while(a <= 100) {
    let output = "";
    if (a % 3 == 0) {
        output+= "FIZZ";
    } 
    if (a % 5 == 0) {
        output += "BUZZ";
    }
    console.log('${a} ${output}');
    a++;
}

let b = 1;

do {
    let output = "";
    if (b % 3 == 0) {
        output+= "FIZZ";
    } 
    if (b % 5 == 0) {
        output += "BUZZ";
    }
    console.log('${b} ${output}');
    b++;
} while(b <= 100)

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == numberToFind) {
        console.log('Found ${numberToFind}!');
        break;
    }
    if (i == n) { 
        console.log('Did not find ${numberToFind} within 1-${n}..');
    }
}