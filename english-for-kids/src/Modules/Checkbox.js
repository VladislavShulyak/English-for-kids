import * as constants from './Constants';

export default function toggleCheckbox() {
    document.querySelectorAll('.card').forEach((item) => {
        item.children.item(2).classList.toggle('green_color');
    });
    constants.navigation.classList.toggle('green_color');
    document.querySelectorAll('.flip-card-front').forEach((element) => {
        element.children.item(1).classList.toggle('hidden');
    });
    if (document.querySelector('.flip-card')) {
        constants.gameButton.classList.toggle('active-game');
    }
}
