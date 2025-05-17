
// //global scope
// // if(true){
// //     let a=10
// //     const b=20 //block scope
// //     var c=30
// // }

// // console.log(a)
// // console.log(b)
// // console.log(c)//op is 30 ,,, that means var can be access and modified outside its scope


// let a=300

// if(true){
//     a=20
//     // console.log(a) //20
// }
// console.log(a) op=20 only

let a=300

if(true){
     let a=20//if we use let only than its changed
    let b=30
}

// console.log(a)//op is 300

const z=300

if(true){
    let z=20
    
}

// console.log(z)

function one(){
    const username="Anand"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if(true){
    const username ="Anand"
    if(username==="Anand"){
        const website="youtube"
        // console.log(username+website)
    }
    // console.log(website) ,, error outside 
}
// console.log(username),, werror outside

//+++++++++++++++++intresting +++++++++++=
// console.log(addone(5))// in this format we can access before declaring

function addone(num){
    return num+1
}

// console.log(addTwo(5))// generates error,, because we accessed here before delaration which is not possible in this format 

const addTwo = function(num){
    return num+2

}// another way to declare function ,, its also called expression**
