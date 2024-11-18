const previews = ["./Images/Mlungisi Logo.png", "./Images/Ferrari image.jpg", "./Images/placeholder.png"];
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

carouselDots.forEach(dot => {
    dot.addEventListener("mouseenter", function(){
        if (carouselDots[currentIndex] != dot){
            dot.style.backgroundColor = "black";
            dot.style.width = "22%";
            dot.style.height = "37%";
        }
    })
});

carouselDots.forEach(dot => {
    dot.addEventListener("mouseleave", function(){
        if (carouselDots[currentIndex] != dot){
            dot.style.backgroundColor = "gray";
            dot.style.width = "12%";
            dot.style.height = "17%";
        }
        else{            
            dot.style.backgroundColor = "black";
            dot.style.width = "17%";
            dot.style.height = "30%";
        }
    })
});

carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", function() {
        currentIndex = index; 
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
        changeImage(previews[currentIndex]);
    });
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
    changeImage(previews[currentIndex]);
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
    changeImage(previews[currentIndex]);
})

function changeImage(newSrc) {
    // Fade out the current image
    image.style.opacity = 0;

    // Once the image has faded out, change the source
    setTimeout(() => {
        image.src = newSrc;

        // After a slight delay (same as transition time), fade in the new image
        setTimeout(() => {
            image.style.opacity = 1;
        }, 50); // small delay to ensure the src change is complete before fading in
    }, 500); // 500ms to match the fade-out duration
}