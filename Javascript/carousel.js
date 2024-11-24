const previews = ["./Images/Ferrari Symbol.png", "./Images/Mlungisi Logo.png", "./Images/Trigger Tempo.png", "./Images/Bullets Hurt.png", "./Images/Smash Botato.png", "./Images/Prop Hunt.png"];
const pages = ["./Ferrari Website/Ferrari-Website.html", "./Mlungisi Foundation/Mlungisi-Foundation.html", "./Tempo Trigger/Tempo-Trigger.html", "./Bullets Hurt/Bullets-Hurt.html", "./Smash Botato/Smash-Botato.html", "./Hide And See-Bu/Hide-And-See-Bu.html"];
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
        let circles = document.querySelectorAll(".cursor-circle");
        circles.forEach(circle => {
        circle.style.background = "orange";
      });
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
        let circles = document.querySelectorAll(".cursor-circle");
        circles.forEach(circle => {
        circle.style.background = "whites";
      });
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
    let circles = document.querySelectorAll(".cursor-circle");
    circles.forEach(circle => {
      circle.style.background = "orange";
    });
})

previousButton.addEventListener("mouseleave", function(){
    let text = previousButton.querySelector("#previous-text");
    text.innerText = "Previous Project";
    let circles = document.querySelectorAll(".cursor-circle");
    circles.forEach(circle => {
      circle.style.background = "white";
    });
})

nextButton.addEventListener("mouseenter", function(){
    let text = nextButton.querySelector("#next-text");
    text.innerText = "";
    let circles = document.querySelectorAll(".cursor-circle");
    circles.forEach(circle => {
      circle.style.background = "orange";
    });
})

nextButton.addEventListener("mouseleave", function(){
    let text = nextButton.querySelector("#next-text");
    text.innerText = "Next Project";
    let circles = document.querySelectorAll(".cursor-circle");
    circles.forEach(circle => {
      circle.style.background = "white";
    });
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
    image.style.opacity = 0;

    setTimeout(() => {
        image.src = newSrc;

        setTimeout(() => {
            image.style.opacity = 1;
        }, 50); 
    }, 500); 
}


image.addEventListener("mouseover", function(){
    image.style.filter = "blur(5px)";
    let circles = document.querySelectorAll(".cursor-circle");
    circles.forEach(circle => {
      circle.style.background = "orange";
    });
})

image.addEventListener("mouseleave", function(){
    image.style.filter = "blur(0px)";
    let circles = document.querySelectorAll(".cursor-circle");
    circles.forEach(circle => {
      circle.style.background = "white";
    });
})

image.addEventListener("click", function(){
    window.location.href = pages[currentIndex];
})

  

  const linkdinButton = document.querySelector("#linkdin-icon");
  linkdinButton.addEventListener("mouseenter", function(){
    linkdinButton.style.width = "2vw";
  })
  linkdinButton.addEventListener("click", function(){
    window.open('https://www.linkedin.com/in/amro-ahmd-851525335/', '_blank');
    linkdinButton.style.width = "1vw";
  })
  linkdinButton.addEventListener("mouseleave", function(){
    linkdinButton.style.width = "1vw";
  })
  
  const githubButton = document.querySelector("#github-icon");
  githubButton.addEventListener("mouseenter", function(){
    linkdinButton.style.width = "2vw";
  })
  githubButton.addEventListener("click", function(){
    window.open('https://github.com/AmroWantsBums', '_blank');
    linkdinButton.style.width = "1vw";
  })
  githubButton.addEventListener("mouseleave", function(){
  })

  const emailButton = document.querySelector("#email-icon");

  emailButton.addEventListener("mouseenter", function(){
    emailButton.style.width = "2vw"; 
  });
  emailButton.addEventListener("click", function(){
    window.location.href = "mailto:amro4ahmed4@gmail.com"; 
    emailButton.style.width = "1vw"; 
  });
  emailButton.addEventListener("mouseleave", function(){
    emailButton.style.width = "1vw"; 
  });


  const icons = document.querySelectorAll(".icons");
  icons.forEach(icon => {
    icon.addEventListener("mouseenter", function(){
        let circles = document.querySelectorAll(".cursor-circle");
        circles.forEach(circle => {
        circle.style.background = "orange";
      });
    })
    icon.addEventListener("mouseleave", function(){
      let circles = document.querySelectorAll(".cursor-circle");
      circles.forEach(circle => {
      circle.style.background = "white";
    });
  })
  });