var number1 = document.getElementById("number1")! as HTMLInputElement;
var number2 = document.getElementById("number2")! as HTMLInputElement;
var button = document.querySelector("button");
var added = document.getElementById("Added") as HTMLElement;



function add(num1: number, num2: number, getRes: boolean, phrase: string) {
  let addResult = num1 + num2;
  if (getRes) {
    return phrase + addResult;
  } else {
    return addResult;
  }
}
var result = true;
var pharse = "Rs.";
button.addEventListener("click", function () {
  var number = add(+number1.value, +number2.value, result, pharse);
  added.innerHTML = `${number}`;
});
