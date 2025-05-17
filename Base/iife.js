//Immediately Invoked Funciton Expressions (IIFE)

//sometimes we face problems due to global scope ,, to  deal with that iiffe is there to remove polution of global scope
//Named iife
( function mango(){
    console.log(`db connected`)
})();//n if we are defining multiple iife ,, it doesnt actually realize when to stop the context ,, hhere we have to use semicolon ,;


//unnamed iffe
( ()=>{
        console.log(`db connnected`)
    }
)();
//we can also pass paramenters

( (name)=>{
        console.log(`db connnected ${name}`)
    }
)("Anand")