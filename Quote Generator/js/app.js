const button = document.querySelector('button');
const result = document.querySelector('p');

const quotes = [
    "You only live once, but if you do it right, once is enough - Mae West",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe - Albert Einstein",
    "A room without books is like a body without a soul. - Marcus Tullius Cicero",
    "If you tell the truth, you don't have to remember anything - Mark Twain",
    "A friend is someone who knows all about you and still loves you -  Elbert Hubbard"
];

let sira = 0;

button.addEventListener('click', () => {
    if(sira === 5) sira = 0;
    const allQuotes = quotes[sira];
    sira++;
    result.innerText = allQuotes;
})
