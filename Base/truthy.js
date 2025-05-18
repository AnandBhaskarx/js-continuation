const user="anand@gmail.com"

if(user){
    console.log("mail found")
}
else console.log("not found")

//falsy value 

// false, 0, -0,BigInt 0n,"",null,undefined, NaN

//all ohter are truthy value for ex

//" ","0","false",[],{},function(){}

//to check array 

const userEmail=[]
if(userEmail.length ===0){
    console.log("arrayy is empty")
}

// for objects 

const empyObject={}

if(Object.keys(empyObject).length===0){
    console.log("object is empty")
}


//++++++++ Nullish Coalescing Operator (??):null undefined

let val1;

// val1 = 5 ?? 10 //5

// val1 = null ?? 15 //15

// val1=undefined ?? 10  //10

// val1 = null ?? 10 ?? 20// jo bhi shi value sabse pehle milegi vo assign ho jaegi

// console.log(val1)


// Ternary operator 


// condition ? true :false

const priceMango = 100

priceMango >= 80 ? console.log("price greater than 80") : console.log("not greater")
