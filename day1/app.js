let a="jai shree ram";
console.log(typeof a);

const bigNum1 = 1234567890123456789012345678901234567890;
console.log(typeof bigNum1);

X=5;
Y=++X;
console.log("X",X);
console.log("Y",Y);

let a="jai shree ram";

// console.log(a[6]);
console.log(a[a.length-1]);
let name="nikhil wadhwa";
// console.log(typeof name,name.length);
// console.log(name[0]);
// let b=123;
// console.log(name+b);
let a=" ";
console.log(a.length);


let name="nikhil";
let age="23";
console.log(`name of person is ${name} and his age is ${age}.`);



let firstNumber = 80;
let secondNumber = 90;
let thirdNumber = 1090;

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//     console.log(`${firstNumber} is greater than ${secondNumber} and ${thirdNumber}`);
// } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//     console.log(`${secondNumber} is greater than ${firstNumber} and ${thirdNumber}`);
// } else {
//     console.log(`${thirdNumber} is greater than ${firstNumber} and ${secondNumber}`);
// }
let larNum=Math.max(firstNumber,secondNumber,thirdNumber);
console.log(larNum);
let size=prompt("    ")
if (size=="xl"){
    console.log(`for ${size} price is 250`);
}
else if  (size=="l"){
    console.log(`for ${size} price is 200`)}
 else if  (size=="m"){
        console.log(`for ${size} price is 100`)}
 else if  (size=="s"){
            console.log(`for ${size} price is 50`)}



let purchaseAmount = parseFloat(prompt("Purchase amount daalein:"));
let membership = prompt("Kya aap gold member hain? (yes/no)").toLowerCase();
let discount;

if (purchaseAmount >= 5000) {
    if (membership === "yes") {
        console.log("Aapko 20% ka discount mila hai");
        discount = 20;
    } else {
        console.log("Aapko 10% ka discount mila hai");
        discount = 10;
    }
} else if (purchaseAmount >= 2000 && purchaseAmount <= 4999) {
    if (membership === "yes") {
        console.log("Aapko 15% ka discount mila hai");
        discount = 15;
    } else {
        console.log("Aapko 5% ka discount mila hai");
        discount = 5;
    }
} else {
    if (membership === "yes") {
        console.log("Aapko 10% ka discount mila hai");
        discount = 10;
    } else {
        console.log("Discount lagu nahi hai");
        discount = 0;
    }
}

let amountPay = purchaseAmount - (purchaseAmount * (discount / 100));
console.log(`Aapka payment hai ${purchaseAmount}. ${discount}% ka discount laga kar, aapko dena hoga ${amountPay}`);

let goodString=prompt("enter the string").toLowerCase();

if (goodString.length>=3 && goodString[0]=="a"){
    console.log("string is good string");
}
else{
    console.log("string is bad string");
}




