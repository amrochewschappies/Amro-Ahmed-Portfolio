const video = document.getElementById('backgroundVideo');

// Function to play the video
function playVideo() {
    if (video.paused) {
        video.play();
    }
}

// Function to pause the video
function pauseVideo() {
    if (!video.paused) {
        video.pause();
    }
}

// Listen for the scroll event
let scrollTimeout; // To avoid rapid firing of the pause function
window.addEventListener('scroll', () => {
    playVideo(); // Play the video when scrolling

    // Clear the previous timeout if the user is still scrolling
    clearTimeout(scrollTimeout);

    // Pause the video after a short delay when scrolling stops
    scrollTimeout = setTimeout(() => {
        pauseVideo(); // Pause the video if no scroll detected for 300ms
    }, 300);
});
