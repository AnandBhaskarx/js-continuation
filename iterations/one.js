//for loop

for (let index = 0; index < 10; index++) {
    const element =  index;
    if(element==5){
        // console.log("5 is the best")
    }
    // console.log(element)   
}

for (let i = 0; i <= 10 ; i++) {
    for (let j = 0; j < 10; j++) {
            // console.log(`ineer loop value ${j},outer loop value${i}`);
            
        
    }
    
}

//break and continue 

for (let i = 0; i < 10; i++) {

    if(i==5){
        // console.log("5 detected")
        break
    }
    // console.log(`value of i is ${i}`)
    
}

for (let i = 0; i < 10; i++) {

    if(i==5){
        // console.log("5 detected")
        continue
    }
    // console.log(`value of i is ${i}`)
    
}

//while and do while loop
let i=9
while (i>0) {
    // console.log(`value of index is${i}`)
    i--
}

let y=0
// while(y < myArra.length){
    //     // console.log(`array element is ${myArra[y]}`)
    //     y++
    // }
    
    // do{
    //     // console.log(`array elemtn is ${myArra[y]}`)
    //     y++
    // }while(y<myArra.length)
        
        
// for of loop 

// ["","",""]
// [{},{},{}] objects in array

const arr=[1,2,3,4,5]

// for (const val of arr) {
    //     console.log(val)
    // } it automaticly decide to apply loops on elements

    // const myArra =['mango','banana','strawbery']

    // for (const element of myArra) {
    //     console.log(element)
    // }

    //can be applied on any type of arrays


    // Maps in js

    const map = new Map()

    map.set("In","india")
    map.set("us","America")
    map.set("badnawar","dhar")

    // console.log(map)

    for (const [key,val] of map) {
        // console.log(key,":",val)
    }
    //*** objects are not iterable in for of loop */
    // const myObject={
    //     name:"anand",
    //     surname:"bhakar"
    // }
    //     //  console.log(myObject.name)
    // for (const element of myObject) {

    //     console.log(myObject.element)
        
    // } 
//++++++++++++++++++++++++++++
// for in loop is used for objects 
const myObject={
    js:"javascript",
    cpp:"cplusplus",
    rb:"rubby",
    swift:"swift by mee"
}


for (const key in myObject) {
    // console.log(`${key} :shortcut if for ${myObject[key]}`)
}

//it can also be used for arrays

const programing=['c++',"js","c","java"]

for (const key in programing) {
        // console.log(programing[key])
    }

// maps are not itterable we can not apply for in on maps

const xmap= new Map()
xmap.set('in',"india")

for (const key in xmap) {
//    console.log(key) // generates no error no output
}