let num=[];
let sum=0;

while(true){
    let input=prompt("give me some numbers and press quit to exit")
    num.push(c)

    for(numb of num){
        sum+=numb
    }


    if(c==="quit"){
        break;
    }
}
let num = [];
let sum = 0;

while (true) {
    let input = prompt("Give me some numbers (type 'quit' to exit)");

    if (input === "quit") {
        break;
    }

    let number = parseInt(input);
    
    if (!isNaN(number)) {
        num.push(number);
        sum += number;
    } 
    else  if(input==="sum"){
        console.log("Numbers entered:", num);
console.log("Sum:", sum);
        break;
    }
    else {
        console.log("Invalid input. Please enter a valid number or 'quit' to exit.");
    }
 
}


let num=[];
sum=0;

while(true){
    nums=prompt("enter the number")
    if (nums=="quit"){
        console.log(sum);
        break;
    }
    else if(!isNaN(nums)){
        nus=parseInt(nums)
        num.push(nus)
        sum+=nus
    }
    else if(nums=="sum"){
        console.log(num);
        console.log(sum);
        break;
    }
}

const numbers = [5, 1, 3, 8, 2];
numbers.sort((x,y)=>x-y);
    console.log(numbers);

let num=[10, 5, 8, 2, 7];

num.sort((x,y)=>x-y);
console.log(num.reverse());

let fruits=['apple', 'banana', 'orange', 'grapes'];

fruits.sort()
console.log(fruits);

let people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];

people.sort((a,b) => a.age - b.age);

console.log(people.reverse());

let numbers = [10, 5, 8, 2, 7];

numbers.sort((a,b)=> b-a);
console.log(numbers);

let numbers = [2, 6, 10, 4, 8];

nums=numbers.filter(d=> d>5);
nums.sort((a,b)=>(a-b));
console.log(nums)


num=[101, 25, 63, 48, 17];


numF=num.filter(filt=>filt<50)

numF.sort((a,b)=>(a-b))
console.log(numF);

let numbers = [2, 8, 4, 1, 6];


numEven=numbers.filter(f=> f%2==0);
numOdd=numbers.filter(g=> g%2 !==0)

numEven.sort((x,y)=>(x-y));
numOdd.sort((x,y)=>(x-y));
console.log(numEven);
console.log(numOdd);
all=numEven.concat(numOdd);
console.log(all);


let input=[]
for(i=1 ;i<=3 ; i++){
    num=prompt(`enter the ${i} number`)
    input.push(parseInt(num))

}
input.sort((x,y)=> (y-x));
let [a,b,c]=input;

if((b**2 + c**2) ==a**2){
    console.log("its triplet");
}else{
    console.log("it's not a triplet");
}



let string=prompt("enter the sentence you want to count vovels").toLowerCase();
let vovels="aeiou"
let consonants = 'bcdfghjklmnpqrstvwxyz';

vCount=0;
cCount=0;

for(let s of string){
   if( vovels.includes(s)){
    vCount++
   }
   if(consonants.includes(s)){
    cCount++
   }
}
console.log(`vovels are ${vCount} consonents count are ${cCount}`);

let input=parseInt(prompt("enter the number"));
let factorial=1

for(let i=1 ; i <=input ; i++){
    factorial*=i;

}
console.log(factorial);


let students={
    shraddha:{
        name:"shraddha",
        class:"5th",
        school:"mmm"
    }
    ,aman:{
        name:"aman",
        class:"9th",
        school:"nnn"

    }
}

let person={
    name:"kaka",
    age:"34",
    city:"kohlapur"
}
person.city="ny";
person.country="america"
min=20;
max=30;
let c=Math.floor((Math.random()*(6-1+1)+1));
console.log(c);

let red=Math.floor((Math.random())*(255))
let green=Math.floor((Math.random())*(255))
let blue=Math.floor((Math.random())*(255))
console.log(red,green,blue);
