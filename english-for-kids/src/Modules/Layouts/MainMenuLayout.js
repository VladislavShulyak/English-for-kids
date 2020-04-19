import * as constants from '../Constants';

export default function goToMainMenu(gameMode) {
    if (!gameMode) {
        document.querySelector('.categories-menu').innerHTML = constants.mainMenu;
    } else {
        constants.gameButton.classList.remove('active-game');
        document.querySelector('.categories-menu').innerHTML = constants.mainMenu;
        document.querySelectorAll('.card-body').forEach((item) => {
            item.classList.toggle('green_color');
        });
    }
}
