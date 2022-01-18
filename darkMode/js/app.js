const body = document.querySelector('body');
const darkButton = document.querySelector('.dark-container');
const darkIcon = document.querySelector('.fa-adjust');

darkButton.addEventListener('click', () => {
    darkButton.classList.toggle('dark');
    if(darkButton.classList.contains('dark')) {
        body.style = `background-color: #222831; color: #f0f0f0`;
        darkButton.style.backgroundColor = `#f0f0f0`;
        darkIcon.style.color = `#222831`;
    } else {
        body.style = `background-color: #fdfdfd; color: black`;
        darkButton.style.backgroundColor = `#222831`;
        darkIcon.style.color = `#f0f0f0`;
    }
})