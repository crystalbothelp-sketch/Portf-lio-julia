const imagesToPreload = [
  'logo.png',
  'label.png'
];

let loadedCount = 0;
const totalImages = imagesToPreload.length;

function checkAllLoaded(){
  loadedCount++;
  if(loadedCount === totalImages){
    hideLoading();
  }
}

function hideLoading(){
  const loadingEl = document.getElementById('loading');
  if(loadingEl){
    loadingEl.classList.add('loaded');
    setTimeout(() => {
      loadingEl.style.display = 'none';
    }, 500);
  }
}

function preloadImages(){
  if(totalImages === 0){
    hideLoading();
    return;
  }

  imagesToPreload.forEach(src => {
    const img = new Image();
    img.onload = checkAllLoaded;
    img.onerror = checkAllLoaded;
    img.src = src;
  });
}

document.addEventListener('DOMContentLoaded', preloadImages);