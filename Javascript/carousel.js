const previews = ["./Images/Mlungisi Logo.png", "./Images/Ferrari Symbol.png", "./Images/Trigger Tempo.png", "./Images/Prop Hunt.png", "./Images/Smash Botato.png"];
const pages = ["./Mlungisi Foundation/Mlungisi-Foundation.html", "./Ferrari Website/Ferrari-Website.html", "./"];
let carouselDots = [];
const dotContainer = document.querySelector("#carousel-dots");
const image = document.querySelector("#preview-image");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
let currentIndex = 0;
const openText = document.querySelector("#target-text");

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


image.addEventListener("mouseover", function(){
    image.style.filter = "blur(5px)";
    openText.style.opacity = "1"; 
    resolver.resolve(options, callback);
})

image.addEventListener("mouseleave", function(){
    image.style.filter = "blur(0px)";
    openText.style.opacity = "0";
})

image.addEventListener("click", function(){
    window.location.href = pages[currentIndex];
})

const resolver = {
    resolve: function resolve(options, callback) {
      const resolveString = options.resolveString || options.element.textContent; // Use textContent from the element
      const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
      
      function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
  
      function randomCharacter(characters) {
        return characters[getRandomInteger(0, characters.length - 1)];
      }
  
      function doRandomiserEffect(options, callback) {
        const characters = options.characters;
        const timeout = options.timeout;
        const element = options.element;
        const partialString = options.partialString;
  
        let iterations = options.iterations;
  
        setTimeout(() => {
          if (iterations >= 0) {
            const nextOptions = Object.assign({}, options, {iterations: iterations - 1});
  
            if (iterations === 0) {
              element.textContent = partialString;
            } else {
              element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
            }
  
            doRandomiserEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback(); 
          }
        }, options.timeout);
      }
  
      function doResolverEffect(options, callback) {
        const resolveString = options.resolveString;
        const characters = options.characters;
        const offset = options.offset;
        const partialString = resolveString.substring(0, offset);
        const combinedOptions = Object.assign({}, options, {partialString: partialString});
  
        doRandomiserEffect(combinedOptions, () => {
          const nextOptions = Object.assign({}, options, {offset: offset + 1});
  
          if (offset < resolveString.length) { 
            doResolverEffect(nextOptions, callback);
          } else if (typeof callback === "function") {
            callback();
          }
        });
      }
  
      doResolverEffect(combinedOptions, callback);
    } 
  }
  
  const targetElement = document.querySelector('[data-target-resolver]');
  
  const options = {
    offset: 0,                
    timeout: 5,                
    iterations: 4,              
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    resolveString: targetElement.textContent,
    element: targetElement       
  }
  
  function callback() {
    console.log('Text resolved!');
  }
  

  