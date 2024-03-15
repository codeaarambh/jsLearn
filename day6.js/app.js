const fruits = ["apple", "banana", "orange", "grape", "strawberry", "watermelon", "kivi"]


for(a of fruits){
   for(b of a){
    console.log(b);
   }
}
const numbers = [1, 2, 3, 4, 5];
let square=1;

for(let num of numbers){
    square=num*num;
    console.log(`square of ${num} is ${square}`);
}

const numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
let sum=0;
for(let num of numbers){
        sum=num+sum
}
console.log(sum);


const inputString = "Hello, World!";
let vovelCount=0;
let vovels="aeiou"


for(let h of inputString.toLowerCase()){
    if(vovels.includes(h)){
        vovelCount++
    }
}
console.log(vovelCount);

const strings = ["apple", "banana", "orange", "grape", "strawberry"];


for( let upp of strings){
    console.log(upp.toUpperCase());
}


let string="jai shree ram jai shree shyam"
let vovel="aeiou";
i=0;

for(let a of string.toLowerCase()){
    if(vovel.includes(a)){
        i++
    }

}
console.log(i);


let favMovie="r"
let guess=prompt("try to guess the movie").toLowerCase()

while(true){


    if(guess !== favMovie){
        guess=prompt("FIR KOSHISH KARO").toLowerCase()
    }
    if(guess==favMovie){
        console.log("you guess right movie");
        break;
    }
    else if(guess=="quit"){
        console.log("ohho you quit");
        break
    }
}

while((guess != favMovie ) && (guess != "quit")){
   guess= prompt("fir koshish karo").toLowerCase()
}
if(guess==favMovie){
    console.log("tussi jeet gaye ho");
}
else if (guess=="quit"){
    console.log("arrey aap ne to quit kar diya");
}

let task=[];
let choice=parseInt(prompt("enter the choice 1.to add task 2. to show list 3.to delet specific task 4.stop"))

while(true){
    let choice=parseInt(prompt("enter the choice 1.to add task 2. to show list 3.to delet specific task 4.stop"))
        if(choice==1){
           let work=prompt("enter the task").toLowerCase()
           task.push(work);
          
        }
        if (choice ==2) {
            if(task.length==0){
                console.log("aap ne abhi tak koi task nahi joda");
            }
            else{
                for( let g in task){
                    console.log(`${parseInt(g)+1}. ${task[g]}`);
                }
            }
           
        }
        if (choice== 3){
            if(task.length==0){
                console.log("aap ne abhi tak koi task nahi joda");
            }
            else{
                dlt=parseInt(prompt("kis task ko delet karna hai malik"))
                task.splice(dlt-1,1);
                console.log("ab yeh sab bacha hai");
                for( let g in task){
                    console.log(`${parseInt(g)+1}. ${task[g]}`);
                }
               
            }
        }
        if(choice==4){
           console.log("ho gaya kaam aap ka");
            break;
        }

}


let num = parseInt(prompt("Enter the number"));
let numString = num.toString(); // Convert number to string
let c = 0;

for (let i = 0; i < numString.length; i++) {
    c++;
}

console.log("Number of digits:", c);

let fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];

fruits.forEach(function(a,i){
    console.log(a);
})

let numbers = [2, 4, 6, 8, 10];
double=[]


numbers.forEach(function(n){
   g= n*2
   double.push(g)
})
console.log(double);
console.log(numbers);


let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];


names.forEach(function(name,index){
    console.log(`index number hai ${index} aur naam hai ${name}`);
})

let ages = [15, 20, 10, 25, 18];
ages.forEach(function(age,id){
    if(age>=18){
        console.log(`age is ${age} is adult`);
    }
   else{
    console.log(`age is ${age} is minor`);
   }
})

let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

colors.forEach(function(color,idx){
    console.log(color,idx);
});

let num=parseInt(prompt("enter the number"));
count=0;

if(!isNaN(num)){

    numS=num.toString()
    for( a of numS){
        count+=parseInt(a)
    }
}
console.log(count);
let num=parseInt(prompt("kaha tak ka factorial nikalna hai"));
factorial=1;
for(let i=1 ; i<=num ; i++){
    factorial*=i;
}
console.log(factorial);