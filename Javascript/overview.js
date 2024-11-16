// Get references to the content, mini-preview, and scrollbar elements
const contentContainer = document.getElementById('content-container');
const miniPreview = document.getElementById('mini-preview');
const overviewScrollbar = document.getElementById('overview-scrollbar');

// Function to update the overview scrollbar position and thumb size
function updateScrollbar() {
  const contentHeight = contentContainer.scrollHeight;
  const viewportHeight = contentContainer.clientHeight;
  const scrollPosition = contentContainer.scrollTop;

  // Calculate the height of the thumb (based on the ratio of the viewport height to the content height)
  const thumbHeight = (viewportHeight / contentHeight) * 100; // Percentage of the visible area
  overviewScrollbar.style.height = `${thumbHeight}%`;

  // Calculate the position of the thumb (how far down the page the user has scrolled)
  const thumbPosition = (scrollPosition / contentHeight) * 100; // Percentage of the total scroll
  overviewScrollbar.style.top = `${thumbPosition}%`;
}

// Function to handle mouse dragging (optional)
let isDragging = false;
let startY;
let scrollTop;

overviewScrollbar.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  scrollTop = contentContainer.scrollTop;
  document.body.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaY = e.clientY - startY;
    contentContainer.scrollTop = scrollTop + (deltaY / miniPreview.offsetHeight) * contentContainer.scrollHeight;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});

// Listen for the scroll event to update the scrollbar position
contentContainer.addEventListener('scroll', updateScrollbar);

// Initialize the scrollbar on page load
updateScrollbar();
