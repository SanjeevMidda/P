// //Sending reques to see if successful
// fetch("https://catfact.ninja/fact")
// .then(res => {
//     console.log("Success!", res);
//     return res.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(e => {
//     console.log("Error!, e");
// });

let catFacts = document.querySelector('.catFacts');

const catData = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    console.log(data.fact);

    catFacts.innerHTML = `" ${data.fact} "`;
}

catData();
