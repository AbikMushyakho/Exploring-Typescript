// unknown type
// declare
let personInput:unknown;
// unknown is differnt from any
let personName:string;

personInput = "Ram";
personInput = 5;
// addition check is required in unknown do not let to entering data of any type
if(typeof personInput ==='string'){
    personName = personInput;
}

// Never Type
// if the function never returns anything like while throwing errror we use never type;

function ErrHandler(message:string,code:number):never{
    throw {status:code,message:message}
}
ErrHandler("Unchatched Error",500);