document.addEventListener("DOMContentLoaded", function () {
  // Get references to the content, mini-preview, and scrollbar elements
  const contentContainer = document.querySelector("main"); // The scrollable content
  const miniPreview = document.getElementById('mini-preview'); // For background preview
  const overviewScrollbar = document.getElementById('overview-scrollbar'); // Custom scrollbar thumb

  // Function to update the overview scrollbar position and thumb size
  function updateScrollbar() {
    const contentHeight = contentContainer.scrollHeight;  // Total content height
    const viewportHeight = window.innerHeight;  // Viewport height (visible area)
    const scrollPosition = contentContainer.scrollTop;  // Current scroll position

    // Calculate the height of the thumb based on the ratio of visible area to total content height
    const thumbHeight = (viewportHeight / contentHeight) * 100; // Percentage of visible area
    overviewScrollbar.style.height = `${thumbHeight}%`;

    // Calculate the thumb's position based on how far down the user has scrolled
    const thumbPosition = (scrollPosition / contentHeight) * 100; // Percentage of total scroll
    overviewScrollbar.style.top = `${thumbPosition}%`;

    console.log(contentHeight, viewportHeight, thumbHeight, scrollPosition, thumbPosition);
  }

  // Function to handle mouse dragging (custom drag to scroll functionality)
  let isDragging = false;
  let startY;
  let scrollTop;

  overviewScrollbar.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY; // Store initial mouse position
    scrollTop = contentContainer.scrollTop; // Current scroll position
    document.body.style.cursor = 'grabbing'; // Change cursor to grabbing
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaY = e.clientY - startY; // Calculate distance the mouse has moved
      contentContainer.scrollTop = scrollTop + (deltaY / miniPreview.offsetHeight) * contentContainer.scrollHeight; // Scroll the content
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default'; // Reset cursor
  });

  // Listen for scroll events to update the scrollbar position
  contentContainer.addEventListener('scroll', updateScrollbar);

  // Initialize the scrollbar position and thumb size on page load
  updateScrollbar();
});
