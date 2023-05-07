let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let message = document.querySelector('#message');
let oScore = document.querySelector('#o-score');
let xScore = document.querySelector('#x-score');
let listOfWhoWon = document.querySelector('#list-of-who-won')

let numberOfTimesOScored = 0;
let numberOfTimesXScored = 0;
let gameNumber = 1;

oScore.innerText = numberOfTimesOScored;
xScore.innerText = numberOfTimesXScored;



let arr = [[[], [], []], [[], [], []], [[], [], []]];
let number = 0;


function whoWin(){
    if(arr[0][0] === 0 && arr[0][1] === 0 && arr[0][2] === 0){
        message.innerText = 'O win';
    }else if(arr[1][0] === 0 && arr[1][1] === 0 && arr[1][2] === 0){
        message.innerText = 'O win';
    }else if(arr[2][0] === 0 && arr[2][1] === 0 && arr[2][2] === 0){
        message.innerText = 'O win';
    }else if(arr[0][0] === 0 && arr[1][0] === 0 && arr[2][0] === 0){
        message.innerText = 'O win';
    }else if(arr[0][1] === 0 && arr[1][1] === 0 && arr[2][1] === 0){
        message.innerText = 'O win';
    }else if(arr[0][2] === 0 && arr[1][2] === 0 && arr[2][2] === 0){
        message.innerText = 'O win';
    }else if(arr[0][0] === 0 && arr[1][1] === 0 && arr[2][2] === 0){
        message.innerText = 'O win';
    }else if(arr[0][2] === 0 && arr[1][1] === 0 && arr[2][0] === 0){
        message.innerText = 'O win';
    }else if(arr[0][0] === 1 && arr[0][1] === 1 && arr[0][2] === 1){
        message.innerText = 'X win';
    }else if(arr[1][0] === 1 && arr[1][1] === 1 && arr[1][2] === 1){
        message.innerText = 'X win';
    }else if(arr[2][0] === 1 && arr[2][1] === 1 && arr[2][2] === 1){
        message.innerText = 'X win';
    }else if(arr[0][0] === 1 && arr[1][0] === 1 && arr[2][0] === 1){
        message.innerText = 'X win';
    }else if(arr[0][1] === 1 && arr[1][1] === 1 && arr[2][1] === 1){
        message.innerText = 'X win'
    }else if(arr[0][2] === 1 && arr[1][2] === 1 && arr[2][2] === 1){
        message.innerText = 'X win'
    }else if(arr[0][0] === 1 && arr[1][1] === 1 && arr[2][2] === 1){
        message.innerText = 'X win'
    }else if(arr[0][2] === 1 && arr[1][1] === 1 && arr[2][0] === 1){
        message.innerText = 'X win'
    }
    if(message.innerText !== ""){
        arr = [[[], [], []], [[], [], []], [[], [], []]];
        number = 0;
        one.innerText = '';
        two.innerText = '';
        three.innerText = '';
        four.innerText = '';
        five.innerText = '';
        six.innerText = '';
        seven.innerText = '';
        eight.innerText = '';
        nine.innerText = '';
        if(message.innerText === "O win"){
            numberOfTimesOScored++;
            oScore.innerText = numberOfTimesOScored;
            let oWin = document.createElement('div');
            listOfWhoWon.appendChild(oWin);
            oWin.innerText = gameNumber + '. ' + ' O win';
            gameNumber++;

            oWin.classList.add('css-for-js-o');
            
            
        }else if(message.innerText === 'X win'){
            numberOfTimesXScored++;
            xScore.innerText = numberOfTimesXScored;
            let xWin = document.createElement('div');
            listOfWhoWon.appendChild(xWin);
            xWin.innerText = gameNumber + '. ' + ' X win';
            gameNumber++;
            xWin.classList.add('css-for-js-x');
            
            
        }
        message.innerText = '';
    }
    if(one.innerText !== '' && two.innerText !== '' && three.innerText !== '' && four.innerText !== '' && five.innerText !== '' && six.innerText !== '' && seven.innerText !== '' && eight.innerText !== '' && nine.innerText !== ''){
        let noWinner = document.createElement('div');
        listOfWhoWon.appendChild(noWinner);
        noWinner.innerText = gameNumber + '. ' + ' No Winner';
        gameNumber++;
        noWinner.classList.add('css-for-js-no-winner');


        arr = [[[], [], []], [[], [], []], [[], [], []]];
        number = 0;
        one.innerText = '';
        two.innerText = '';
        three.innerText = '';
        four.innerText = '';
        five.innerText = '';
        six.innerText = '';
        seven.innerText = '';
        eight.innerText = '';
        nine.innerText = '';
    }
}




one.addEventListener('click', () => {
    if(one.innerText === ''){
    if(number % 2 === 0){
        one.innerText = 'O';
        number++;
        arr[0][0] = 0;
    }else if(number % 2 === 1){
        one.innerText = 'X';
        number++;
        arr[0][0] = 1;
    }  
}
    whoWin();
})
two.addEventListener('click', () => {
    if(two.innerText === ''){
        if(number % 2 === 0){
            two.innerText = 'O';
            number++;
            arr[0][1] = 0;
        }else if(number % 2 === 1){
            two.innerText = 'X';
            number++;
            arr[0][1] = 1;
        }  
    }
    whoWin();
})
three.addEventListener('click', () => {
    if(three.innerText === ''){
        if(number % 2 === 0){
            three.innerText = 'O';
            number++;
            arr[0][2] = 0;
        }else if(number % 2 === 1){
            three.innerText = 'X';
            number++;
            arr[0][2] = 1;
        }  
    }
    whoWin();
})
four.addEventListener('click', () => {
    if(four.innerText === ''){
        if(number % 2 === 0){
            four.innerText = 'O';
            number++;
            arr[1][0] = 0;
        }else if(number % 2 === 1){
            four.innerText = 'X';
            number++;
            arr[1][0] = 1;
        }  
    }
    whoWin();
})
five.addEventListener('click', () => {
    if(five.innerText === ''){
        if(number % 2 === 0){
            five.innerText = 'O';
            number++;
            arr[1][1] = 0;
        }else if(number % 2 === 1){
            five.innerText = 'X';
            number++;
            arr[1][1] = 1;
        }  
    }
    whoWin();
})
six.addEventListener('click', () => {
    if(six.innerText === ''){
        if(number % 2 === 0){
            six.innerText = 'O';
            number++;
            arr[1][2] = 0;
        }else if(number % 2 === 1){
            six.innerText = 'X';
            number++;
            arr[1][2] = 1;
        }  
    }
    whoWin();
})
seven.addEventListener('click', () => {
    if(seven.innerText === ''){
        if(number % 2 === 0){
            seven.innerText = 'O';
            number++;
            arr[2][0] = 0;
        }else if(number % 2 === 1){
            seven.innerText = 'X';
            number++;
            arr[2][0] = 1;
        }  
    }
    whoWin();
})
eight.addEventListener('click', () => {
    if(eight.innerText === ''){
        if(number % 2 === 0){
            eight.innerText = 'O';
            number++;
            arr[2][1] = 0;
        }else if(number % 2 === 1){
            eight.innerText = 'X';
            number++;
            arr[2][1] = 1;
        }  
    }
    whoWin();
})
nine.addEventListener('click', () => {
    if(nine.innerText === ''){
        if(number % 2 === 0){
            nine.innerText = 'O';
            number++;
            arr[2][2] = 0;
        }else if(number % 2 === 1){
            nine.innerText = 'X';
            number++;
            arr[2][2] = 1;
        }  
    }
    whoWin();
});









