console.log("Hello World");

// javascript variables
// what are variables ? - containers to store the value/ data.



//4.Data Types in js
//number
var number1=55;
var number2=45;
console.log(number1 + number2);
 // string 
var str1= "This is Java script";
var str2='Hello ji kaise hoo ';
console.log(str1);
console.log(str2);

//objects
var marks={
    pradip: 95,
    shubham: 77,
    jayesh:65,
    pratik:97
}
console.log(marks);

//Booleans
var a= true;
var b= false;
console.log(a);
console.log(b);

//undefined and null
var und;//=undefined;
console.log(und/*undefined*/);
//null
var n= null;
console.log(n);

// At a very high level , there are two types of data types in javascript
// 1. Primitive data types: undefine,null,number,string, boolean, symbol
//2. Reference data types: Arrays, Objects

//Arrays->
var arr=[1,2,3,4,5,6]
console.log(arr);
console.log(arr[5]);// printing the value using index no 

//operators in javascript->
//Arithmatic operator-->(+,-,*,/,%)
console.log("\n");// new Line
var a=50;
var b=37;
console.log("The value of a+b is",a+b);
console.log("The value of a-b is",a-b);
console.log("The value of a*b is",a*b);
console.log("The value of a/b is",a/b);

// comaprison operator==>
console.log("\n");
var x=44;
var y=54;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x<y);
console.log(x>y);
//Logical Operator==>
//Logical AND
console.log("\n");
console.log(true && true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

//Logical OR
console.log("\n");

console.log(true || true);
console.log(true||false);
console.log(false||true);
console.log(false||false);

console.log("\n");
//Logical NOT==> True ko false karta hai aur false ko true
console.log(!false);
console.log(!true);