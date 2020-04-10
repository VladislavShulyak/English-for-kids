const hamburger = document.querySelector('.hamburger');
const checkbox = document.getElementById('d');

document.addEventListener('click', (event) => {
    if (event.target === hamburger) {
       hamburger.classList.toggle('hamburger_active');
       document.querySelector('.navigation').classList.toggle('active');
    }
    if (event.target === checkbox) {
        document.querySelectorAll('.card-body').forEach((item) => {
            item.classList.toggle('green_color');
        });
        document.querySelector('.navigation').classList.toggle('green_color');
    }
});
