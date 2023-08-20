let score="33abc"

console.log(typeof score);
console.log(typeof(score));  //both are same

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);
//33abc is not a number therefore output comes NaN => Not A Number

//"33" => number
//"33abs" => NaN but its type is Number, when we wrote the value than NaN output comes
//true => 1 and false => 0


let is_LoggedIn ="aryan"

let booleanis_LoggedIn = Boolean (is_LoggedIn)
console.log(booleanis_LoggedIn);
console.log(is_LoggedIn)


//1=>true
//0=>false
//""=>false
//"hitesh"=>true 


/////////////////////////////////////////////////////////////////////////////
///////////////Operations//////////////////////////

let value=3
let neg_value=-value
console.log(neg_value)

// console.log(2+2)
// console.log(2-2)
// console.log(4/2)
// console.log(2%1)
// console.log(2*2)
// console.log(2**2)  // 2 to the power 2 when we use **


let str1  ="aryan"
let str2 = "deo"
let str3=str1+str2;
console.log(str3)  //concatenation ho jayega easily

console.log("1"+2) // treats as string and concatenate
console.log(1+"2")//  treats as string and concatenate
console.log("1" + 2 + 2)  //treats as string and concatenate   // But these kind of codes are not clean 
console.log(1+ 2 +  "2")  //treats as number and adds              //Always write clean code 

//jo pehle dikhega vaisa hi treat karega compiler


console.log(true); // true      + likhne se conversion ho jaata hai
console.log(+true); // 1

console.log(+"")//0  // koi kaam ka nahi hai ye sab lekin 


let num = 100;
num++;
console.log(num);

num=100
++num;
console.log(num);

// In dono k baare me n++ and ++n jaake MDN javascript pe jaake padhna hai 

//Postfix and Prefix hai ye 