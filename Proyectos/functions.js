let intro = document.querySelector('.background_demons');
let entirePage = document.querySelector('html');
let setlist = document.querySelectorAll('.setlist-container .project');

setlist.forEach(function (e) {
    e.onclick = function () {
    this.classList.toggle('active')}
});

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        setTimeout(() => {
            intro.style.top = '-100vh';
            entirePage.style.overflow = 'visible';
        }, 3300); 
    });
});