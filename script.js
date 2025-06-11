const images = [
    'bilder/gruppeBilde.JPG',
    '',
    'bilder/placeholder3.png'
];

let current = 0

const frontPage = document.querySelector('.frontPage');

const openBtn = document.getElementById('openPopup');
const closeBtn = document.getElementById('closePopup');
const popup = document.getElementById('videoPopup');
const video = document.getElementById('videoPlayer');

openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    video.play();
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    video.pause();
    video.currentTime = 0; // Reset video to start
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
        video.pause();
        video.currentTime = 0; // Reset video to start
    }
});



frontPage.style.backgroundImage = `url(${images[current]})`;

function changeSlide(direction) {
    current = (current + direction + images.length) % images.length;
    frontPage.style.backgroundImage = `url('${images[current]}')`;
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function scrollToRow() {
    document.getElementById("targetRow").scrollIntoView({ behavior: "smooth" });
}