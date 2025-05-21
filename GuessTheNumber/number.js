let randomNumber=Math.round(parseInt(Math.random()*100+1))
console.log(randomNumber)
// console.log(Math.random())

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessFeild')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi= document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess =[];

let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
   })
}

function validateGuess(guess){
        if(isNaN(guess)){
            alert('pls enter a valid Number')
        }
        else if(guess<1){
            alert('pls enter a nummber more then 1')
        }
        else if(guess > 100){
            alert('pls enter a nummber less then 100')
        }
        else{
            prevGuess.push(guess)
        }

        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over . random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
}

function checkGuess(guess){
            if(guess===randomNumber){
                    displayMessage(`you guessed it right`)
                    endGame()
            }
            else if(guess<randomNumber){
                displayMessage(`Number is too low`)
            }
            else if(guess>randomNumber){
            displayMessage(`number is too high`)
            }
}

function displayGuess(guess){
    userInput.value = ''
    guesses.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function newGame(){
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click',function(e){

        randomNumber=Math.round(parseInt(Math.random()*100+1))

        prevGuess=[]
        numGuess = 1
        guesses.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');

        startOver.removeChild(p)


        playGame=true
    })
}

function endGame(){


userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2>Start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}






