const images = [
    'bilder/placeholder.png',
    'bilder/placeholder2.png',
    'bilder/placeholder3.png'
];

let current = 0

const frontPage = document.querySelector('.frontPage');

frontPage.style.backgroundImage = `url(${images[current]})`;

function changeSlide(direction) {
    current = (current + direction + images.length) % images.length;
    frontPage.style.backgroundImage = `url('${images[current]}')`;
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}