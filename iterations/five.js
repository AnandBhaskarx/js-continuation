const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currvaal){
//         console.log(`currrent value is: ${currvaal}, acc value is ${acc}`)
//         return acc+currvaal
// },0)

// using arrow function

const myTotal = myNums.reduce((acc,curr)=> acc+curr ,3)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName:"js course",
        price:299
    },
        {
        itemName:"js course",
        price:299
    },
        {
        itemName:"datda analytics course",
        price:15000
    },
        {
        itemName:"data structure course",
        price:2999
    },
        {
        itemName:"mobile development course",
        price:65699
    }
]

const totalprice = shoppingCart.reduce((acc,item)=>item.price+acc ,0)

console.log(totalprice)