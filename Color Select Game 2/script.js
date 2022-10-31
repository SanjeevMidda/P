//COLOR SELECTOR GAME
//3*3 grid DONE
//blue background color -DONE
//randomly selects a grid area
//click colored area you get a point
//lasts for 30 sec
//at the end total score shown

//Difficulty Easy Medium Hard

let score = 0;
let timer = 60;
let timerM

let easy = 1000;
let medium = 500;
let hard = 200;

let levels = document.querySelectorAll('.settings h3');

levels.forEach(add => {
    add.addEventListener('click', selectLevel);
})


function selectLevel() {
    if (this.classList.contains('easy')) {
        startGame(easy);
    } else if (this.classList.contains('medium')) {
        timer = 120;
        startGame(medium);
    } else if (this.classList.contains('hard')) {
        timer = 240;
        startGame(hard);
    }
}




function startGame(difficultyLevel) {
    score = 0;

    let result = document.querySelector('.result');
    result.innerHTML = score;

    let squares = document.querySelectorAll('.square');

    squares.forEach(add => {
        add.addEventListener('click', userClicked);
    });

    let interval = setInterval(selectSquare, difficultyLevel);

    function randomNumber() {
        return Math.floor(Math.random() * squares.length);
    }

    function selectSquare() {

        squares.forEach(change => {
            change.classList.remove('blueSquare');
        });

        let selected = squares[randomNumber()];
        let updatedSelected = selected.classList.add('blueSquare');

        timer--;
        console.log(--timer);

        timerBegin();
    }

    function timerBegin() {
        if (timer == 0) {
            clearInterval(interval);
            // addScore();
            // timer = 30;
            squares.forEach(remove => {
                remove.classList.remove('blueSquare');
            })
        }
    }

    function userClicked() {

        if (this.classList.contains('blueSquare')) {
            score++;

            result.innerHTML = score;
        }
    }
}







