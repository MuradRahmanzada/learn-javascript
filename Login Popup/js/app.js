const windowBtn = document.getElementById('window-button');
const windoww = document.querySelector('.window');
const closeButton = document.getElementById('window-close');
const input = document.querySelectorAll('input');

windowBtn.addEventListener('click', () => {
    windoww.style.display = 'flex';
})

closeButton.addEventListener('click', () => {
    windoww.style.display = 'none'
})



