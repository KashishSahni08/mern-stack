const user ={
    name: 'Mansi',
    email: 'mansi123@gmail.com',
    password: 'mansi123',
    age: 23

};

console.log(user.name);
// console.log(user[' user name']);

console.log(user.password);
console.log(user['password']);

user.name = "Lavanya";
console.log(user);

user.course = "Mern Stack";
console.log(user);

user.college = "MGCOPS";
console.log(user);

delete user.password;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let Smartphone = {
    brand: 'Samsung',
    model: 'Galaxy A14 5g',
    price: 16000,
    colors: ['Violet', 'Black', 'White',[1,2,3,4]]
}

console.log(Smartphone);
console.log(Smartphone.colors[1]);
console.log(Smartphone.colors [3][0]);
console.log(Smartphone.colors [3][2]);


Smartphone.colors.push("pink");
// console.log(Smartphone.colors.push("pink"));
console.log(Smartphone);    

delete Smartphone.colors.pop("pink");
console.log(Smartphone);    

Smartphone.colors.unshift("pink");
console.log(Smartphone);

const smartPhoneArray = [
    {
    brand: 'apple',
    model: 'iPhone 14',
    price:    80000,
    colors: ['Black', 'white', 'red']
},

{
    brand: 'oneplus',
    model: 'Nord CE 3',
    price:  25000,
    colors: ['white', 'black',]
},

{
    brand: 'Google',
    model: 'Pixel 7a',
    price:  45000,
    colors: ['white', 'black', 'Blue']
},

{
    brand: 'Xiaomi',
    model: 'Redmi Note 12',
    price:  15000,
    colors: ['black', 'white', 'Green']

}
];

//access 2nd color of 3rd smartphone
console.log(smartPhoneArray[2].colors[1]);

//add new color to apple iphone
smartPhoneArray[1].colors.push('Gold');
console.log(smartPhoneArray[1].colors);

//replace 1st color of last elements
smartPhoneArray[smartPhoneArray.length - 1 ].colors[0] = 'silver';
console.log(smartPhoneArray[smartPhoneArray.length - 1].colors);


//create an array of smartphone brands
const smartphonebrand = smartPhoneArray.map((phone) => {
    return phone.brand;
});
console.log(smartphonebrand);

//filter smartphones with price lees than 30000

const budgetsmartphones = smartPhoneArray.filter((phone) =>{
         return phone.price < 30000;
});
console.log(budgetsmartphones);
//filter smartphones with color 'black'
const blacksmartphones = smartPhoneArray.filter((phone) =>{
    return phone.colors.includes('black');
});
console.log(blacksmartphones)
