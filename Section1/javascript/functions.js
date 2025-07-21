function addNums(a, b){
    var c = a+b;
    console.log(c);
}

addNums(34, 76);
// console.log(c);

const avgNums = function(a, b, c){
    console.log(a, b);
    
    const avg = (a + b + c) / 3;
    // console.log(avg);
    return avg;
}

const result = avgNums(47, 25);
console.log(result);

// arrow function
const factorial = (n) => {
    let f = 1;

    for(let i=1; i<=n; i++){
        f = f*i;
    }

    return f;
}

const fact = factorial(8);
console.log(fact);