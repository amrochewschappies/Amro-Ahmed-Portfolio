let progress = 0;
const progressBar = document.getElementById('progress-bar');
const percentageText = document.getElementById('percentage-text');
const signature = document.querySelector("#signature-svg");
const progressContainer = document.querySelector("#progress-container");
const main = document.querySelector("main");

function updateProgress() {
  if (sessionStorage.getItem('progrsessCompleted')) {
    document.getElementById('loading-screen').style.display = 'none';
    return; 
  }
  progress += 1;
  progressBar.style.width = progress + '%';
  percentageText.textContent = progress + '%';

  if (progress < 100) {
    setTimeout(updateProgress, 50);
  } else {
    progressContainer.style.display = "none"; 
    signature.style.display = "block"; 
    signature.classList.add('complete');

    sessionStorage.setItem('progressCompleted', 'true');

    setTimeout(function() {
      signature.style.transition = "opacity 2s";  
      signature.style.opacity = "0"; 

      setTimeout(function() {
        signature.style.display = 'none';
        main.style.display = "block";
        document.getElementById('loading-screen').style.display = 'none'; 
      }, 2000);
    }, 1500); 
  }
}

window.onload = updateProgress;
