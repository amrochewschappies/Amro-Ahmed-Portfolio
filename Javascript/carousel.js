const previews = ["./Images/Mlungisi Logo.png", "./Images/Ferrari image.jpg", "../Images/IMG_9133.PNG"];
let carouselDots = [];
const dotContainer = document.querySelector("#carousel-dots");
const image = document.querySelector("#preview-image");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
let currentIndex = 0;

previews.forEach(item => {
    createDot();
});

function createDot(){
    let dot = document.createElement("div");
    dot.classList.add("dot-placeholder");
    dotContainer.append(dot);
    carouselDots.push(dot);
}

carouselDots[currentIndex].style.width = "17%";
carouselDots[currentIndex].style.height = "30%";
carouselDots[currentIndex].style.backgroundColor = "black";
carouselDots.forEach(dot => {
    if (dot != carouselDots[currentIndex]){
        dot.style.width = "12%";
        dot.style.height = "17%"
        dot.style.backgroundColor = "gray";
    }
});

previousButton.addEventListener("mouseenter", function(){
    let text = previousButton.querySelector("#previous-text");
    text.innerText = "";
})

previousButton.addEventListener("mouseleave", function(){
    let text = previousButton.querySelector("#previous-text");
    text.innerText = "Previous Project";
})

nextButton.addEventListener("mouseenter", function(){
    let text = nextButton.querySelector("#next-text");
    text.innerText = "";
})

nextButton.addEventListener("mouseleave", function(){
    let text = nextButton.querySelector("#next-text");
    text.innerText = "Next Project";
})

previousButton.addEventListener("click", function(){
    currentIndex--;
    if (currentIndex < 0){
        currentIndex = previews.length - 1;
    }
    carouselDots.forEach(dot => {
        if (dot != carouselDots[currentIndex]){
            dot.style.width = "12%";
            dot.style.height = "17%"
            dot.style.backgroundColor = "gray";
        }
    });
    carouselDots[currentIndex].style.width = "17%";
    carouselDots[currentIndex].style.height = "30%";
    carouselDots[currentIndex].style.backgroundColor = "black";
    image.src = previews[currentIndex];
})

nextButton.addEventListener("click", function(){
    currentIndex++;
    if (currentIndex > previews.length - 1){
        currentIndex = 0;
    }
    carouselDots.forEach(dot => {
        if (dot != carouselDots[currentIndex]){
            dot.style.width = "12%";
            dot.style.height = "17%"
            dot.style.backgroundColor = "gray";
        }
    });
    carouselDots[currentIndex].style.width = "17%";
    carouselDots[currentIndex].style.height = "30%";
    carouselDots[currentIndex].style.backgroundColor = "black";
    image.src = previews[currentIndex];
})