// FUNCTIONS - FOR MODULARITY , AND TO RUN A SEGEMNT OF CODE WHEN WE WANT TO OR NEEDED TO RUN IN A PARTICULAR SCENARIO
function greet(){
    console.log("helllo");
} // DECLARATION

greet(); // FUNCTION CALLING


let fn = function(){   // function expression
    console.log("hello");
}
console.log(fn);
fn();

//Fat Arrow Function

let fnc = ()=>{
    console.log("fat arrow function")
}

console.log(fnc);
fnc();

//PARAMETERS AND ARGS

function dance(v1){
    console.log(`${v1} naach raha hai!`)
}

dance("ghoda");
dance("gadha");
dance("cheel");
dance("saanp");
dance("kaua");


function sum(v1,v2){
    return v1+v2;
} // here v1 and v2 are parameters

console.log(sum(1,2));  // here , 1 and 2 are arguments

//TYPES OF PARAMETERS

// DEFAULT PARAMETERS

function mul(x=2 , y=2){
    console.log(x * y)
} // if there are no values given in para it will take 2 , 2 as default parameter

mul();
mul(3,3);

// Rest Operator - when you dont know the no. of args given by user so u use rest operator

function xyz(a,b,...val){ // rest op is used to get all args from the function call - yahi same cheez agar hum array and object datatype me kare toh ye rest op spread op bann jata h!
    console.log(a,b,val);
}


xyz(1,2,3,4,"dev singh");

// RETURN AND EARLY RETURN

function ABCD(){
    return 23;
}

console.log(ABCD());

// first order function -  means u can treat function like values

function a(val){
    val();
}  // this is also high order function as it takes func. as a parameter and also those function jo func ko return karte h as a value

a(function(){
    console.log("this function is treated like a value :)")
})

function b(){
    return function(){
        console.log("this is a high order function")
    }
}

b()();


// PURE VS IMPURE FUNVTIONS

// PURE - JISME ARGS YA PARAMETER KI VALUYE CHANGE NHI HOTI 
 a = 12;

function say(){
    console.log("hi");
}

say();
// IMPURE - JISME HO JAATI H 

function inc(b){
    return ++b;
}

console.log(inc(12));

// CLOSURE - EK FUNC JO RETURN KARE EK AUIR FUNC AND WO APNE PARENT FUNC. KA KOI VALUE USE KARE (DEPENDENT HO USPE)

function papa(){
    let money = 12000;
    return function(){
        console.log(money);
    }
}

papa()();

// lexical - basically scope of a variable such as in func papa u cant use money variable outside of func brackets

// IFE - IMMEDIATE FUNC EXECUTION

(function(){
    console.log("hey");
})();

// hoisitng me func statement fully hoist hota h and func expression fully hoist nhi hota error aata h


// PRACTICE QUESTIONS 

// 1. CONVERT A FUNC. INTO ARROW FUNC

function divide(x , y){
    return x/y;
}

// let divide = (x,y) =>{ return x/y;};

//2. what does ... op means? -  it is a rest op used to get all args as params in a func

// 3. accept any number os score nad give a total

let total = (...scores) =>{
    let res = 0;
    scores.forEach(function(val){
        res += val;
    })

    console.log(res);

}

total(1,12,13,45,50,70,90);

//4. what is high order func - those func which return or takes a func as a value

//5. MAKE A BMI CALCULATOR

function bmi(weight,height){
    return weight / (height*height);
}

console.log(bmi(70,2).toFixed(2));

//6. make a reusable discount calc using high order function

function calc(val){
    return function(price){
        return price - price * (val / 100);
    }
}

let discount = calc(10);
console.log(discount(500)); 


