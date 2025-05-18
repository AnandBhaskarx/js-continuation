const coding=["cpp","js","java"]

coding.forEach(  function (item){
    // console.log(item)
})

coding.forEach( (item)=>{
    // console.log(item)
})

function printMe(item) {
    console.log(item)
}

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr) // for each have information about  elemts , indexes and whole array
})

//objects in array 
const myCoding=[{
    languagaeName:"javascript",
    languageFile:".js"
},
{
    languagaeName:"compiler",
    languageFile:".ac"
},
{
    languagaeName:"java",
    languagaeFile:".jsx"
}
]


myCoding.forEach((item)=>{
    console.log(item.languagaeName)
})