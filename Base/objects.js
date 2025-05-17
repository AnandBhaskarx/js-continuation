// singleton ,,  if made out of constructor

//object literals

const An ={
    firstName:"Anand",
    lastName:"Bhaskar",
    age:21,
    contact:8435673059,
    isLoggedIn:true,
    email:"anandbhaskarx@gmail.com" 
}
// console.log(An.firstName) // can access in this way
// console.log(An["firstName"]) // or can use square bracket ,, as it is treated as string should be in ""
//but but if key is given in the form of "name",, then we cant acces in .way

const now = {
    "full name":"AnandBhaskar"
}

// console.log(now.full name) error 
// console.log(now["full name"]) // can be accesed using square brackets

// creatting a symbol and using in object

const mySym = Symbol("key1")
// console.log(typeof mySym)
const newObj={
       [mySym]:"Anand"
}

// console.log(typeof newObj[mySym])


An.email="anandx@gmail.com" // changes the value
// console.log(An["email"])

//we can freeze it to remain unchanged

// Object.freeze(An)

An.email="ana@gmailcom"

// console.log(newObj)

An.greeting = function(){
    // console.log("hello js user")
}

// console.log(An.greeting())

An.greetingTwo= function(){
    // console.log(`hello js user, ${this.firstName}`)
}

// console.log(An.greetingTwo())

//objects day 02

// singletoon 

const tinderUser = new Object()//singleton

//or as we have alredy done 

// const tinderUser={}//non-singleton

tinderUser.id="123ab"
tinderUser.name="Anand"
tinderUser.isLoggedIn=true
// console.log(tinderUser)

const regularUser = {
    email:"som@gmial.com",
    fullname: {
        userfullName:{
            firstName:"Anand",
            lastName:"Bhaskar"
        }
    }
}
// we can create numerous nest
// console.log(regularUser.fullname.userfullName) // ad can be accedend using dot and dot

const obj1 = {
    1:"anand",
    2:"bh"
}

const obj2 = {
    3:"Abhay",
    4:"Bh"
}

// const obj3 ={obj1,obj2}

// console.log(obj3)

// const obj4 = Object.assign(obj1,obj2)
//here if we use the same target and source key like 1,2 and 1,2 in both 
//it will return the last key value pair only e.g { '1': 'Abhay', '2': 'Bh' }
// we have to assign diff values like 1,2 and 3,4 

// const obj4 = Object.assign({},obj1,obj2,objn) similar as above result but more acurate,, as the first empy act as source
//and remainign all as target

// console.log(obj4)

//but here also we will use spread

const objn = {...obj1,...obj2}

// console.log(objn)

const users =[ 
    {
        id:1,
        email:"h@gmial.com"
    },
    {

    },
    {

    }
]

// user[1].email

// console.log(An)

// console.log(Object.keys(tinderUser)) and its data type is array 

console.log(Object.values(An))

console.log(Object.entries(An))


console.log(An.hasOwnProperty('islogged'))
