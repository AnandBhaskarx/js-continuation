const user ={
    username :"Anand",
    price:999,

    welcomeMessage:function(){
        
        
        console.log(`${this.username},welcome to the website`)//here this refer to current context
    }
}

// console.log(this) here this results empty object
// user.welcomeMessage()

// user.username="bhaskar"

// user.welcomeMessage()

// function mango(){
//     let username="anand"
//     console.log(this)
//     console.log(this.username)//undefined
// }

// mango()

// const mango = function(){
//     let username="anand"
//     console.log(this.username)//here also it is undeffined
// }
// mango()

// const mango = () => {
//     let username="Anand"
//     console.log(this.username)//still undeffined
// }

// mango()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(2,3))



//implicit return 
// const addTwo = (num1,num2) =>  num1+num2

// console.log(addTwo(2,3))

// or 

// const addTwo = (num1,num2) =>  (num1+num2)

//if we are usind paranthsis then also noo need to return

//but if we are using curly braces return is required***

// const addTwo = (num1,num2) => {return num1+num2}


