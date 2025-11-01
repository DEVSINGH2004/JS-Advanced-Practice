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

