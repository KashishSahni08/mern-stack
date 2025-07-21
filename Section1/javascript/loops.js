for(let i = 0; i<10; i++){
    console.log (i);
}

//Wap to print odd numbers from 23 to 48

for(let i=23; i<48; i++){
     if(i%2 !==0){
    console.log (i);
}
}
 let a =10;

 while (a < 20){
    console.log(a);
    a++;
 }

 console.log('do while loop');
    let b= 10;
 do{
    console.log(b);
    b++;
 } while (b> 20);
  
// Wap to reverse a number
 let m = 43562;
 let rev = 0;

 while(m > 0){
    console.log(m, rev);

    let d = m % 10;
    rev = rev * 10 + d;
    m = parseInt(m/10);
    // d = 4
    // rev = 2653 + 10 + 4 26534 
    // m= 0
 }
 
  console.log(m,rev);