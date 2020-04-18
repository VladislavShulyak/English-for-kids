import { cards, categories } from './Modules/Cards';
import * as constants from './Modules/Constants';
import { toggleHamburger, toggleNavigationLink } from './Modules/Navigation';
import clearDomTree from './Modules/ClearDomTree';
import { createStatistics, createStatisticsLayout } from './Modules/Layouts/StatisticsLayout';
import GenerateCards from './Modules/GenerateCards';
import goToMainMenu from './Modules/Layouts/MainMenuLayout';
import createStar from './Modules/CreateStar';
import playSound from './Modules/PlaySound';
import toggleCheckbox from './Modules/Checkbox';
import toggleStartGameButton from './Modules/ToggleStartButton';

createStatisticsLayout();
toggleHamburger();

let gameMode = false;
let onScreen = true;
let newArray;
let array;
let errors = 0;

function createDefaultView() {
    const gameAudio = document.querySelector('.new-game-container').children[1];
    const images = document.querySelectorAll('.active-card');
    const starsContainer = document.querySelectorAll('.rating-menu');
    const finishFailContainer = document.querySelector('.finish_container__failure').children[0];
    if (finishFailContainer.firstChild.innerHTML !== 'Mistakes') { // clear mistakes
        finishFailContainer.removeChild(finishFailContainer.firstChild);
    }
    constants.gameButton.children[0].innerHTML = 'Start game'; // create default start button
    constants.gameButton.children[0].classList.remove('new-game-container__repeat-button'); // create default styles of start button
    if (gameAudio) { // remove audio
        constants.gameButton.removeChild(gameAudio);
    }
    images.forEach((element) => {
        element.dataset.active = 'no';
        element.classList.remove('active-card');// remove active style cards after game mode
    });
    starsContainer.forEach((elem) => {
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);// remove stars
        }
    });
    onScreen = true;
    errors = 0;
}

function getRandomInt() {
    if (onScreen) {
        array = [0, 1, 2, 3, 4, 5, 6, 7];
        onScreen = false;
    } else {
        array = newArray;
    }
    const rand = Math.floor(Math.random() * array.length);
    const temp = array[rand];
    array.splice(rand, 1);
    newArray = array;
    return temp;
}

function createRandomSounds(targetElement) {
    const gameAudio = document.querySelector('.new-game-container').children[1];
    const indexOfCategory = categories.indexOf(`${targetElement.dataset.id}`);
    const index = getRandomInt();
    const audio = document.createElement('audio');
    audio.setAttribute('src', `${cards[indexOfCategory][index].audioSrc}`);
    if (gameAudio) {
        constants.gameButton.removeChild(gameAudio);
    }
    constants.gameButton.appendChild(audio);
    playSound('randomSound');
}

document.addEventListener('click', (event) => {
    const targetElement = event.target;
    const indexOfCategory = categories.indexOf(`${targetElement.dataset.id}`);
    if (targetElement === constants.checkbox) {
        gameMode = !gameMode;
        toggleCheckbox();
        if (!gameMode) {
            createDefaultView();
        }
    }
    if (targetElement.classList.contains('navigation__list_item')) {
        toggleNavigationLink(targetElement);
        createDefaultView();
    }
    if ((targetElement.classList.contains('mask') || targetElement.classList.contains('navigation__list_item'))
        && (targetElement.innerText !== 'Main Menu' && targetElement.innerText !== 'Statistics')) {
        clearDomTree();
        GenerateCards(targetElement, indexOfCategory);
        if (gameMode) {
            onScreen = true;
            toggleStartGameButton(targetElement);
        }
        constants.gameButton.children[0].setAttribute('data-id', `${targetElement.dataset.id}`);
    }
    if (targetElement.innerText === 'Main Menu') {
        goToMainMenu(gameMode);
    }
    if (targetElement.dataset.id === 'swap') {
        const parent = targetElement.parentNode.parentNode.parentNode;
        parent.classList.add('test');
        document.addEventListener('mouseout', () => {
            parent.classList.remove('test');
        });
    }
    if (targetElement.dataset.name === 'card' && !gameMode) {
        toggleNavigationLink(targetElement);
        playSound('cardSound', targetElement);
        createStatistics('train', targetElement);
    }
    if (targetElement.innerHTML === 'Repeat') {
        playSound('repeatSound');
    }
    if (targetElement.innerHTML === 'Start game') {
        createRandomSounds(targetElement);
        toggleStartGameButton(targetElement);
    }
    if (gameMode && targetElement.dataset.name === 'card') {
        const gameAudio = document.querySelector('.new-game-container').children[1];
        const audioImage = targetElement.parentNode.children[0];
        if (gameAudio) {
            if (targetElement.dataset.active === 'no') {
                if (gameAudio.getAttribute('src') === audioImage.getAttribute('src')) {
                    playSound('.correct-audio');
                    createStar('win');
                    createStatistics('game-success', targetElement);
                    targetElement.dataset.active = 'yes';
                    targetElement.classList.add('active-card');
                    if (newArray.length !== 0) {
                        setTimeout(() => {
                            createRandomSounds(targetElement);
                        }, 100);
                    } else if (errors !== 0) {
                        playSound('.failure-audio');
                        constants.finishFailureLayout.classList.add('finish_container__active');
                        const textElement = document.createElement('span');
                        textElement.innerHTML = errors;
                        constants.finishFailureLayout.children[0].prepend(textElement);
                        setTimeout(() => {
                            constants.finishFailureLayout.classList.remove('finish_container__active');
                        }, 4000);
                        setTimeout(() => {
                            createDefaultView();
                        }, 4000);
                        goToMainMenu(gameMode);
                    } else {
                        playSound('.success-audio');
                        constants.finishSuccessLayout.classList.add('finish_container__active');
                        setTimeout(() => {
                            constants.finishSuccessLayout.classList.remove('finish_container__active');
                        }, 4000);
                        createDefaultView();
                        goToMainMenu(gameMode);
                    }
                } else {
                    errors += 1;
                    playSound('.error-audio');
                    createStar('lose');
                    createStatistics('game-error', targetElement);
                }
            }
        }
    }
});
