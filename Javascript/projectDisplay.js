function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

const main = document.querySelector("main");
const projectBreakdown = document.getElementById('project-breakdown');

main.addEventListener('scroll', () => {
    if (isElementInView(projectBreakdown)) {
        projectBreakdown.classList.add('visible'); 
        console.log("It's in view");
    }
});

const scrollText = document.querySelector("#scroll-text");

setInterval(function() {
    // Toggle the 'bounce' class on the element every 500ms
    scrollText.style.
    
    // Remove the 'bounce' class after the animation duration (1s)
    setTimeout(function() {
        scrollText.classList.remove("bounce");
    }, 1000); // Match the duration of the bounce animation (1 second)
}, 1500); // Trigger every 1.5 seconds
