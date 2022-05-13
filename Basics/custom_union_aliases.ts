

//custom type
type Combinable = number | string;
type AsConversion = 'as-number' | 'as-text';
// uninion types
function combine(num1:Combinable , num2 : Combinable, conversion:AsConversion){
let combinedResult;
  if(typeof num1 === 'number' && typeof num2 === 'number' || conversion === 'as-number'){

   return combinedResult =  +num1 + +num2;
  }
  else{
  return  combinedResult = num1.toString() + num2.toString();
  }
}

const ages = combine(25,20,"as-number");
console.log(ages)
const StringAges = combine("25","20","as-number");
console.log(ages)
const names = combine("Ram","shankar","as-text");
console.log(names);
