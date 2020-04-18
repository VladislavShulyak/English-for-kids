export default function createStar(parameter) {
    const link = document.createElement('span');
    if (parameter === 'win') {
        link.innerHTML = '<img src="./src/img/star-win.svg" alt="star">';
    } else if (parameter === 'lose') {
        link.innerHTML = '<img src="./src/img/star.svg" alt="star">';
    }
    document.querySelector('.rating-menu').prepend(link);
}
