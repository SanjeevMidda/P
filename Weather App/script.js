let london = document.body.querySelector('.londonValue');
let seoul = document.body.querySelector('.seoulValue');
let tokyo = document.body.querySelector('.tokyoValue');
let shanghai = document.body.querySelector('.shanghaiValue');
let milan = document.body.querySelector('.milanValue');

const catData = async () => {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=london&appid=c1146f1cba0b53c44627a2151f486ea4&units=metric");
    const data = await res.json();

    london.innerHTML = data.main.temp;

    const resTwo = await fetch("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=c1146f1cba0b53c44627a2151f486ea4&units=metric");
    const dataTwo = await resTwo.json();

    seoul.innerHTML = dataTwo.main.temp;


    const resThree = await fetch("https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=c1146f1cba0b53c44627a2151f486ea4&units=metric");
    const dataThree = await resThree.json();

    tokyo.innerHTML = dataThree.main.temp;

    const resFour = await fetch("https://api.openweathermap.org/data/2.5/weather?q=shanghai&appid=c1146f1cba0b53c44627a2151f486ea4&units=metric");
    const dataFour = await resFour.json();

    shanghai.innerHTML = dataFour.main.temp;


    const resFive = await fetch("https://api.openweathermap.org/data/2.5/weather?q=milan&appid=c1146f1cba0b53c44627a2151f486ea4&units=metric");
    const dataFive = await resFive.json();

    milan.innerHTML = dataFive.main.temp;

    console.log(dataTwo.main.temp);

}

catData();