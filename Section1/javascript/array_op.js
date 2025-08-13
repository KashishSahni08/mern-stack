const arr = [4, 7, 9, 3, 1, 5, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('----- for of loop -----');

for (let n of arr) {
    console.log(n);
}

console.log('----- for each function -----'); 

arr.forEach((a, b, c) => {
    console.log(a, b, c);
});

// WAP to print square of each element in the array
arr.forEach((n) => {
    console.log(n * n);
});

// WAP to print only odd numbers from the array

arr.forEach((n) => {
    if (n % 2 !== 0) {
        console.log(n);
    }
});

// WAP to create a new array containing only even numbers
// WAP to create a new array containing cube of each element


const newArr =  [];

arr.forEach((a) => {
    if (a%2===0) {
        newArr.push(a);
    }
});

console.log(newArr);