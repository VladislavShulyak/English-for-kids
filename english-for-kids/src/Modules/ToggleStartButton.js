import * as constants from './Constants';

export default function toggleStartGameButton(targetElement) {
    if (targetElement.innerHTML === 'Start game') {
        targetElement.innerText = 'Repeat';
        targetElement.classList.add('new-game-container__repeat-button');
    } else {
        constants.gameButton.children[0].classList.remove('new-game-container__repeat-button');
        constants.gameButton.children[0].innerHTML = 'Start game';
        constants.gameButton.classList.add('active-game');
        document.querySelectorAll('.flip-card-front').forEach((element) => {
            element.children.item(1).classList.add('hidden');
        });
    }
}
