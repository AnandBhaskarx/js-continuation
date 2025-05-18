// const coding=["cpp","js","java"]

// const value = coding.forEach((item)=>{
//     // console.log(item)
//     return item //undefined
// })

// console.log(value)

// for each does not retuurn any values

const myNums = [1,2,3,4,5,6]

// first way to use filter for return

// const values=myNums.filter((num)=> num > 4 ) // filter me hume values return hoti he according to the given condition

// console.log(values)
// const values=myNums.filter((num)=>{
//      return num > 4 })
//      console.log(values) // if we are using scope than we must use return statement
// as scope doent allow to return impilcitly


//second way to use a new array to return elments
// const newNums =[]

// myNums.forEach( (num)=> {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)
// in this way also we can find out or return the elements both the ways are correct and best to there respective conditions

//++++more about filters 

const books =[
    {
        title : "book one ", genre:"ficiton",publish:1981 , edition:2004 
    },
    {
        title : "book two ", genre:"non-ficiton",publish:1981 , edition:2004 
    },
    {
        title : "book three ", genre:"history",publish:1981 , edition:2004 
    },
    {
        title : "book four ", genre:"non-ficiton",publish:1981 , edition:2004 
    },
    {
        title : "book five ", genre:"science",publish:1981 , edition:2004 
    },
    {
        title : "book sixe ", genre:"ficiton",publish:1981 , edition:2004 
    },
    {
        title : "book seven ", genre:"history",publish:1981 , edition:2004 
    },
    {
        title : "book eighte ", genre:"science",publish:1981 , edition:2004 
    },
    {
        title : "book nine ", genre:"ficiton",publish:1981 , edition:2004 
    }

]

// console.log(books)
let userbooks = books.filter((bk)=> bk.genre==="history")

 userbooks = books.filter((bk)=> {
        return bk.publish >= 1000  && bk.genre==="history"
    
})
console.log(userbooks)