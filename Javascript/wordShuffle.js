const displayWords = ["Web Developer", "Game Designer", "UI / UX Design", "Web Design"];
const word = document.querySelector("#text-display");
let currentIndex = 0;

setInterval(changeWord, 3000);

function changeWord(){
    currentIndex++;
    if (currentIndex == displayWords.length){
        currentIndex = 0;
    }
    word.innerText = displayWords[currentIndex];
}