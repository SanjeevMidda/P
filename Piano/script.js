let first = document.querySelector('#one');
let second = document.querySelector('#two');
let three = document.querySelector('#seven');
let forth = document.querySelector('#four');

let output = document.querySelector('.output');

let quotes = ["He who conquers himself is the mightiest warrior.", "One man with courage makes a majority.", "Don't look at your feet to see if you are doing it right. Just dance.", "Rivers know this: there is no hurry. We shall get there some day.", "Set your goals high, and don’t stop till you get there.", "I have never let my schooling interfere with my education.", "If you can't yet do great things, do small things in a great way.", "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.", "Be sure you put your feet in the right place, then stand firm.", "Live out of your imagination, not your history.", "Do not wait for the perfect time and place to enter, for you are already onstage.", "The greater the difficulty, the more the glory in surmounting it.", "I never look back, darling. It distracts from the now.", "If you don’t risk anything, you risk even more.", "Our greatest glory is not in never falling, but in rising every time we fall."]

first.addEventListener('click',song);
second.addEventListener('click',song);
three.addEventListener('click',song);
four.addEventListener('click',song);

function song(){

    if(this.id=="one"){
        console.log("ONE")
        let one = new Audio("one.wav");
        one.play();

        output.innerHTML=quotes[randomQuote()];

    }else if(this.id=="two"){
        console.log("TWO");
        let two = new Audio("two.wav");
        two.play();

        output.innerHTML=quotes[randomQuote()];
    }else if(this.id=="seven"){
        let three = new Audio("three.wav");
        three.play();
        console.log("THREE")

        output.innerHTML=quotes[randomQuote()];
    }else if(this.id=="four"){
        let four = new Audio("four.wav");
        four.play();

        output.innerHTML=quotes[randomQuote()];
    }
}

function randomQuote(){

    return Math.floor(Math.random()*quotes.length);
}