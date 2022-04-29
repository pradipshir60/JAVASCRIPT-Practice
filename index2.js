//Functions in JavaScript
//DRY--> Do NOT REPEAT YOURSELF
function avg(a,b){
    c=(a+b)/2;
    return c;
}
c1=avg(4,7);
c2=avg(13,17);
console.log(c1,c2);
//coditional in javascript
/*var age= 4;
if(age > 8)
{
    console.log("You are not a kid")
}
else{
    console.log("You are kid")
}*/

function userAge(age)
{
   //var age=prompt("Enter the age");
   console.log('Enter your age,${age}');
  // userAge(25);
    if(age > 50)
    {
        console.log("You are old");
    }
    else if(age >=18)
    {
        console.log("You are gabru jawan");
    }
    else{
        console.log("you are  baccha");
    }

}
userAge(25);
//loops
//for loop
var arr=[1,2,3,5,6,9]
console.log(arr);
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

//forEach loop 
console.log("\n forEach loop");
arr.forEach(function(element) {
    console.log(element);
})
    
//let is only use for a block
//const use for cannot change the value
console.log("\n while loop");
//while loop
let j=0;
while(j<arr.length)
{
    console.log(arr[j])
    j++;
}
console.log("\n do while loop");
// do while loop
//console.log(arr);
let k=0;
do{
   console.log(arr[k]);
   k++;
}while(k<arr.length);

//Array with methods

console.log("\n");

let myArr = ["fan","camera","mobile",34,null,true];
console.log(myArr);
//myArr.pop();
//myArr.push("Pradip");
//shift-unshift
console.log(myArr);
console.log("\n");

//string in javascript with methods

let myString= "Hello ji kaise ho";
console.log(myString.length);
console.log(myString.indexOf("ho"));

//Dates in JAVASCRIPT
console.log("\n");
let myDate= new Date();
console.log(myDate);
//DOM====>IMP



//Events in javascript
   

//Arrow function
 sum=(a,b)=> {
    return a+b;
}

// Set Timeout and setInterval
 


//Local Storage in javascript-->setItem,getItem
//localStorage.setItem('name','Pradip');
//localStorage.getItem('name');
//localStorage.removeItem()
//Json-->javascript object notation
obj={name:"Pradip" , length:1 }
jso=JSON.stringify( obj);
//console.log(jso);
 parsed = JSON.parse({name:"Pradip" , length:1 });
 console.log(parsed);