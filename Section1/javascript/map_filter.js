const myarr = [34, 56, 12, 43, 2, 3];
 const sqrNums = myarr.map( (a) => {
      return a * a;

} );

console.log(sqrNums);

const prices = [ 2300, 3200, 500, 1250, 800, 5500] ;
//add 18% GST to each price

console.log ( 2300 * 1.18 ); 

const gstPrices = prices.map((p) => {
    return p + 1.18;
});

console.log(gstPrices);

 const budgetPrices = prices.filter((p) => {
    return p < 2000;
});

console.log(budgetPrices);

//filter all even numbers from my arr

const evenNums = myarr.filter((a) => {
    return a % 2 === 0;
});

console.log(evenNums);

const prices2 = [ '₹456.89', '₹2300.50', '₹86.10', '₹99.999', ];

console.log( parseInt('₹456.89' .slice(1) ));

 const intPrices = prices2.map((p) =>{
    return parseInt(p.slice(1));
 });
 console.log(intPrices);