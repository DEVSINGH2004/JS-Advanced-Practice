// practioce

//1.

for(let i = 1;i<11;i++){
    console.log(i);
}

//2.

for(let i = 1;i<21;i++){
    if(i%2===0){console.log(i)};
    
}

//3.

for(let i = 10;i>0;i--){
    console.log(i);
}

//4.

for(let i=1;i<6;i++){
    console.log("Yes");
}

//5.

for(let i = 1;i<11;i++){
     if(i%2===0){console.log("Even")}
    else  console.log("odd");
}


//6.
let num = prompt("enter a number : ");
if(num>0){
    console.log("positive");
} else {
    console.log("negative");
}

//7.
let age = prompt("enter age : "); // here , + changes the datatype from string to number as prompt always gives string value we can use Number , parseInt also
console.log(typeof age);
if(age === null){
    console.error("u cancelled it");
} else if(age.trim() === ""){
    console.error("invalid input");
}
age = Number(age);
if(age>=18){
    console.log("eligible");
} else if (age<18) {
    console.log("not eligible");
} else {
    console.log("give valid input");
}

//8.
for(let i = 1;i<11;i++){
    console.log(`5 * ${i} = ${5*i}`);
}

//9.
let cnt = 0;
for(let i = 1;i<21;i++){
    if(i>8){cnt++}
}

console.log(cnt);

//10.
let pass = "devsingh";
let userpass = prompt("enter password : ");
if(userpass === pass){
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

//11.  
let attempts = 3;
let password = "Dev singh";
while(attempts>0){
    let user = prompt("enter password : ");
    if(user === password){
        console.log("access granted");
        break;
    } else {
        attempts--;
        alert(`wrong password ${attempts} remaining`);

    }

    
}

alert("Account Locked");


//12.

let words = prompt("Enter Words (Type Stop to exit) : ");
let cnts= 0;
while(words!=="stop"){
    if(words === "Yes"){
        cnts++;
    }
    words = prompt("Enter Words again (Type Stop to exit)  : ");
}

alert(`The word Yes has been typed ${cnts} times`);

//13.

for(let i=1;i<51;i++){
    if(i%7==0){
        console.log(i);
    }
}

//14.

let totalsum = 0;

for(let i=1;i<31;i++){
    if(i%2!==0){
        totalsum += i;
    }
}

console.log(totalsum);

//15.

let usernum = +prompt("Enter any number : ");
while(usernum%2!==0){
    usernum = +prompt("Keep entering number : ")
}
alert("An Even Number Is Entered!");

//16.
let start = +prompt("Enter a starting number : ");
let end = +prompt("Enter a ending number : ");

for(let i=start;i<end;i++){
    console.log(i);
}

//17.

let oddcnt = 0;

for(let i=1;i<21;i++){
    if(i%2!==0){
        oddcnt++;
        console.log(i);
        if(oddcnt>=3){break};
    }
    
}


//18.

let numcnt = 0;
let positivecnt = 0;
let negativecnt = 0;
while(numcnt<5){
    let n = +prompt("Enter Number: ");
    numcnt++;
    if(n>0){
        positivecnt++;
    } else if(n<0){
        negativecnt++;
    }
}

console.log(positivecnt);
console.log(negativecnt);

//19.

let withdrawalcnt = 0;
let balance = 1000;
let money = +prompt("Enter Amount u want to withdraw : ");
while(withdrawalcnt<3){
    
    if(money>balance){
        console.log("Insufficient Funds");
        break;
    } else {
        
    withdrawalcnt++;
    balance = balance - money;
    }
}

