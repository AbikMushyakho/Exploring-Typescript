
// function returns nothing /void
function PrintUndifined(num:number):void{
  console.log('Result:' + num);
}
// then while printing it return undefined

console.log(PrintUndifined(5));

// specifying function types
let combineFunction : (n1:number,n2:number)=>number;


function adding(a:number,b:number){
  return +a + +b;
}

combineFunction= adding;

// function types with callbacks

function addAndHandle(num1:number,num2:number,callback:(n:number)=>void){
  const add=num1+num2
  callback(add);
}
// checking function type and callback with no return type;
addAndHandle(1,2,(result)=>{
  console.log(result);
}) 

