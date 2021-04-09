/*
Write a program that will reverse a string.
*/
let rs;
let finalStr;

let num = [];
function reverseStr(str){
   for (let i=str.length-1 ; i>=0;i--){
       num.push(str[i])
    //    finalStr.concat(str[i])
}
let num1= num.join('')
console.log(num1)
}
reverseStr('abcd');

