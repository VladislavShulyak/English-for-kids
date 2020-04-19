export default function playSound(typeOfSound, targetElement) {
    if (typeOfSound === 'randomSound' || typeOfSound === 'repeatSound') {
        const gameAudio = document.querySelector('.new-game-container').children[1];
        gameAudio.play();
    } else if (typeOfSound === 'cardSound') {
        targetElement.previousElementSibling.play();
    } else {
        document.querySelector(`${typeOfSound}`).play();
    }
}
