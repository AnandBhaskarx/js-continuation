function firstOne(){
    console.log("its the funtion")
    console.log("end of thhe fun")
}

// firstOne()
// firstOne()

// function addTwoNumbers(num1,num2){ //here the num1 and num2 are paramenters
// console.log(    num1+num2
// )}

// addTwoNumbers() :op NAN

// addTwoNumbers(4,3) 7 // the input used while callinng function in arguments
// addTwoNumbers("4",3) 43

const result=addTwoNumbers(4,3)

// console.log(result)//undeffined

function addTwoNumbers(num1,num2){ //here the num1 and num2 are paramenters

    // let res=num1+num2 
    // return res           //can simply return  num1+num2
    //now the res is stored 
    // console.log("anand")  //,, the code after return statement is unreachable

}

// const ans=addTwoNumbers(4,5);
// console.log(ans) // op=9

// function userLogin(username){
//     if(username === undefined){
//         console.log("pls enter a username")
//         return
//     }
//     return `${username}just logged in`
// }

//or

function userLogin(username="sam"/*defaultvalue*/){
    if(!username){
        console.log("pls enter a username")
        return
    }
    return `${username}just logged in`
} ///sameoutput

// console.log(userLogin("anand")) //op is anaad

// console.log(userLogin()) //op=sam

// console.log(userLogin("Anand ji bhaskar..."))

//++++++++++++++++++++++++remianig of funcs+++++++++++++++++++++++

//when we dont know the number of arguments

// function calculateCartPrice(...num){//rest operator
//         return num
// }

// console.log(calculateCartPrice(200,300,400))//any number if parameters can be passed

//if

function calculateCartPrice(val1,val2,...numms){
    return numms
}

// console.log(calculateCartPrice(200,300,400,500))  //op [ 400, 500 ] 300 and 200 stord in val1-2 remaining in numms

const user={
    username:"anand",
    price:300
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.price}, and the price is ${anyobject.username}`)
}

// handleObject(user)

handleObject({
    username:"abc",
    price:500
})

const myArray = [1,2,3,4]

function secondValue(getArray){
    // return getArray[1] // 2op
    return getArray // 1,,2,3,4
}

console.log(secondValue(myArray))
//or
console.log(secondValue([1,2,3,4]))

