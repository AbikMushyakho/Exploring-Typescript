// unknown type
// declare
var personInput;
// unknown is differnt from any
var personName;
personInput = "Ram";
personInput = 5;
// addition check is required in unknown do not let to entering data of any type
if (typeof personInput === 'string') {
    personName = personInput;
}
// Never Type
// if the function never returns anything like while throwing errror we use never type;
function ErrHandler(message, code) {
    throw { status: code, message: message };
}
ErrHandler("Unchatched Error", 500);
