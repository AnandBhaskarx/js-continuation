const cars = ["swift" , " polo", "i20"]

const premium =["G-wagon" ,"defender" ,"compass"]

// cars.push(premium) // array takes array also as a data  ,, op [ 'swift', ' polo', 'i20', [ 'G-wagon', 'defender', 'compass' ] ]

// console.log(cars)

// console.log(cars[3]) 

//  const vehical = cars.concat(premium) // important to store in another const otherwise return the same as above output

// console.log(vehical)  [ 'swift', ' polo', 'i20', 'G-wagon', 'defender', 'compass' ]

// const all_cars =[...cars, ...premium]  //called spred method and mostly used as there is no limmitation can add n arrays,
// // using ...arrayname

// console.log(all_cars)

const anotherArray =[1,2,3,4,[5,6],[6,7,[8,9]]]

const usableArr = anotherArray.flat(Infinity)//faltens the whole multiple array ,,, (infinity) is difining the dept to which it should
//flaten the array we can use 1,2,... etc

console.log(usableArr)

console.log(Array.isArray("Anand"))

console.log(Array.from("Anand")) //converts the any given data to arary

console.log(Array.from({
    name:"Anand"
})) //interesting ,, it will return an empty array as we have to difine the formation of array on the basis of keys or values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))