console.log(2>1);  // it gives true ya false
console.log(2<1);
console.log(2!=1);
console.log(2>=1);
console.log(2==2);
console.log(2<=1);

console.log("2" > 1);/*  here compilere conversion kar leta datatype ka to number */
console.log("02"  > 1);  /* here also  */
console.log("2"==2);  // here true conversion happened
console.log("2"=== 2) // StrictComparision for === No conversion 



console.log(null > 0);
console.log(null == 0);
console.log(null>=0);  //here comes true because sometimes it is treated as 0  sometimes null confusion just avoid


console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);  // all false in undefined case 

// that's why always avoid these things 

// Value Clean Code 

