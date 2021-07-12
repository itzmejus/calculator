let num1=8
let num2=2

let sumEl=document.getElementById("sum-el")

function add(){
    result= num1+num2
  
   sumEl.innerText= "sum is " + result
    console.log(result)
}
function subtract(){
    result= num1-num2
    sumEl.innerText= "sum is " + result
     console.log(result)
 }
 function multiply(){
    result= num1*num2
    sumEl.innerText= "sum is " + result
     console.log(result)
 }
 function divide(){
    result= num1/num2
    sumEl.innerText= "sum is " + result
     console.log(result)
 }