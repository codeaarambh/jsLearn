// let num =[];


// while(true){
//     let input=prompt("enter the number");
//     num.push(parseInt(input))
    
//     if(input.toLowerCase()=="s"){
//         num.pop()
//         break;
//     }
// }
// c= num.filter(a=> a%2==0)
// d=num.filter(a=> a%2!=0)

// c.sort((a,b)=>(a-b))
// d.sort((a,b)=>(a-b))
// let finel=c.concat(d)
// console.log(finel);



// let b=Math.floor(Math.random()*(60-50+1)+50);
// console.log(b);

// let numbers=[];
// for(let i=1 ;i <= 3 ; i++){
//  let   n=prompt(`enter the number ${i}` );
//     numbers.push(parseInt(n))
// }

// numbers.sort((a,b)=>(a-b))
// let [x,y,z]=numbers;

// if(x*x+ y*y===z*z){
//     console.log("its pythogoras triplet");
// }
// else{
//     console.log("its not");
// }


// let n=[];
// let input=parseInt(prompt("how many numbers you want to add"))

// for(let i=1 ; i<=input  ; i++){
//     let num=prompt("enter the number")
//    if(!isNaN(num)){
//     n.push(parseInt(num))
//    }
 

// }
// sum=0
// n.forEach(function(aa){
//     sum+=aa;
// })
// console.log(n,"their sum is",sum);

// let n = [];
// let input = parseInt(prompt("How many numbers do you want to add?"));

// for (let i = 1; i <= input; i++) {
//     let num = prompt("Enter the number");
//     if (num !== null && num !== "" && !isNaN(num)) { // Check if input is not empty and is a number
//         n.push(parseInt(num));
//     } else {
//         console.log("Invalid input. Please enter a valid number.");
       
//     }
// }

// let sum = 0;
// n.forEach(function(aa) {
//     sum += aa;
// });

// console.log(n, "Their sum is", sum);
// let n = [];
// let input = parseInt(prompt("How many numbers do you want to add?"));

// if (!isNaN(input) && input > 0) {
//     for (let i = 1; i <= input; i++) {
//         let num = prompt("Enter the number");
//         if (!isNaN(num) && num !== "") {
//             n.push(parseInt(num));
//         } else {
//             console.log("Invalid input. Please enter a valid number.");
//             i--; // Decrement i to repeat the current iteration
//         }
//     }

//     let sum = 0;
//     n.forEach(function(aa) {
//         sum += aa;
//     });

//     console.log(n, "Their sum is", sum);
// } else {
//     console.log("Invalid input. Please enter a valid number greater than 0.");
// }


// function printHelloWorld(){
//     console.log("hello world");
// }
// printHelloWorld()

// function print1To5(){
//     for (let i=0 ;i <= 5 ; i++){
//         console.log(i);
//     }
// }
// print1To5()

// print1To5()


// function isAdult(){
//     age=Number(prompt("enter the age"))
//     if (age>=18){
//         console.log("you are adult");
//     }
//     else{
//         console.log("tum na balik ho");
//     }
// }
// isAdult()

// function rollingDice(){
//     let dice=Math.floor((Math.random()*(6)+1));
//     console.log(dice);
// }
// rollingDice()

// function printName(name){
//     console.log(name);
// }
// printName("nikhil")

// function add(a,b,c,d){
//     console.log(a+b+c+d);
// }
// add(56,90,67,67)

// function simpleInterest(p,r,t){
//     si=(p*r*t)/100;
//     amount=p+si
//     console.log(amount);
// }
// simpleInterest(1000,10,3)


// let number=[];
// while(true){
//     input=prompt("enter the numbers")
//     if(!isNaN(input) && input !="" && input>0){
//         number.push(parseInt(input))

//     }
//     else if(input==="avg"){
//         break;
//     }
// }
// sum=0
// let len=number.length;
// number.forEach(function(a){
//     sum+=a;
//     avg=sum/len
// })
// console.log("average of numbers",number,"is:-",avg);


// function avg(a,b,c){
//     console.log((a+b+c)/3);
// }
// avg(56,90,67)

// function printTable(num){
//     for( let i=1 ; i<=10 ; i++){
//         console.log(num,"*",i,"=",i*num);
//     }
// }
// if(typeof num=="number" || isNaN==num)


// function add(a,b,c){
//     return a+b+c;
   
// }
// let c=add(4,6,6);
// console.log(c);


// function square(a){
//     return a*a
// }
// let c=square(5)

function reverse(a){
   let revString=""

   for(let i=a.length-1 ; i>=0 ;i--){
   revString+=a[i]
    
   }
   return revString
}
let c=reverse("jai shree ram");
console.log(c);