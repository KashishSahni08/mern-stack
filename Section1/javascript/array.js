arr = [123, 'hello', 'true', 'null', [1,2,3]]
console.log(arr);

console.log(arr[3]);

console.log(arr.length);

const movies = ['Sitare Zamen Par', 'Final Destination', 'superman', 'Retro inn dino', 'Salaar'];

//Accessing elements in the array
console.log(movies[2]);
console.log(movies.length);
console.log(movies.indexOf('Salaar')); //Returns -1 if element not found
console.log(movies.at(3));
console.log(movies.at(-3));

//Replace an element in the array
console.log(movies);
movies [2] ='Batman';
console.log(movies);

//Add a element 
// movies.push('Avengers'); //Adds to the end of the array
console.log(movies.length);
console.log(movies.push('Avengers'));

movies.unshift('Inception'); //Adds to the begining of the array
console.log(movies);

let popped = movies.pop(); //Removes the first element and returns it
console.log(popped);
console.log(movies);

movies.shift(); //Removes the first element and returns it
console.log(movies.shift());

//Slicing
console.log(movies);
console.log(movies.slice(1,3)); //Returns a new array with elements from index 1 to 2 (exclusive)

console.log(movies.slice(2)); //Returns a new array with elements from index 1 to the end

console.log(movies.slice(-5, -2 )); //Returns a new array with the last two elements

// //Splicing
console.log(movies);
// // movies.splice(2,2); //Removes two element starting from the index 2
// // console.log(movies);

// // movies.splice(2,2, 'Superman' , 'Supergirl')
// // console.log(movies)

movies.splice(2,0, 'Superman' , 'Supergirl'); //Insert the element without remving any elemnet
console.log(movies);