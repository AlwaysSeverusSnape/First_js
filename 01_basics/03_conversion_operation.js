let score="33abc"

console.log(typeof score);
console.log(typeof(score));  //both are same

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);
//33abc is not a number therefore output comes NaN => Not A Number

//"33" => number
//"33abs" => NaN but its type is Number, when we wrote the vale than NaN output comes
//true => 1 and false => 0


let is_LoggedIn =1

let booleanis_LoggedIn = Boolean (is_LoggedIn)
console.log(booleanis_LoggedIIn);