function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

const main = document.querySelector("main");
const projectBreakdown = document.getElementById('project-breakdown');

main.addEventListener('scroll', () => {
    if (isElementInView(projectBreakdown)) {
        projectBreakdown.classList.add('visible'); 
    }
    else{
        projectBreakdown.classList.remove('visible'); 
    }
});

const scrollText = document.querySelector("#scroll-text");

setInterval(function() {
    scrollText.style.transform = "translateY(10%)";
    setTimeout(function() {
        scrollText.style.transform = "translateY(0%)";
    }, 400); 
}, 800); 


const visualDisplay = document.getElementById('visual-display');
document.addEventListener('mousemove', function(event) {
    const svg = document.getElementById('visual-display');
    const circle = document.getElementById('circle');

    // Get the center of the SVG element
    const svgRect = svg.getBoundingClientRect();
    const centerX = svgRect.left + svgRect.width / 2;
    const centerY = svgRect.top + svgRect.height / 2;

    // Get the mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Calculate the movement direction towards the mouse (dx, dy)
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    // Define the max distance the circle can move (constrained to stay within bounds)
    const maxDistance = 30;  // This is the max "follow distance" the circle will move

    // Calculate the distance the circle should move (clamped to max distance)
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), maxDistance);

    // Calculate the new position of the circle's center
    const newX = 100 + (dx / Math.sqrt(dx * dx + dy * dy)) * distance;
    const newY = 100 + (dy / Math.sqrt(dx * dx + dy * dy)) * distance;

    // Apply the new position to the circle (constrain within SVG bounds)
    circle.setAttribute('cx', newX);
    circle.setAttribute('cy', newY);
});


