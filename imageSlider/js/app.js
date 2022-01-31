const left = document.getElementById('left');
const right = document.getElementById('right');

let arr = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg"];

let i = 0;

right.addEventListener('click', () => {
    i++;
    if(i > arr.length - 1) {
        i = 0;
    }

    document.getElementById('image').src = arr[i];
})

left.addEventListener('click', () => {
    i--;
    if(i < 0) {
        i = arr.length -1;
    }
    document.getElementById('image').src = arr[i];
})