import * as constants from '../Constants';
import { cards, categories } from '../Cards';
import { clearDomTree, clearContainer } from '../ClearDomTree';

let byElementGrowth = true;
let objectsArray = [];

function hideElements() {
    constants.switcher.style.display = 'none';
    constants.gameButton.classList.remove('active-game');
}

function isTrueExpression(expression) {
    const isNumber = (value) => !Number.isNaN(value);
    if (isNumber(expression) && expression !== null) {
        return expression;
    }
    return '0';
}

function sortTable(index) {
    const table = document.querySelector('table');
    const sortedRows = Array.from(table.rows).slice(1);
    if (byElementGrowth) {
        sortedRows.sort((rowA, rowB) => (rowA.cells[index].innerHTML < rowB.cells[index].innerHTML ? 1 : -1));
    } else {
        sortedRows.sort((rowA, rowB) => (rowA.cells[index].innerHTML > rowB.cells[index].innerHTML ? 1 : -1));
    }
    table.tBodies[0].append(...sortedRows);
    byElementGrowth = !byElementGrowth;
}

function createButtons() {
    const buttonContainers = document.querySelectorAll('.button-container');
    const buttonContainer = document.querySelector('.button-container');
    buttonContainers.forEach((elem) => {
        clearContainer(elem);
    });
    buttonContainer.innerHTML = '<button type="button" class="btn btn-outline-success waves-effect">Reset</button>';
// + '<button type="button" class="btn btn-outline-success waves-effect">Repeat difficult words</button>';
}

function createStatisticTable() {
    objectsArray = [];
    constants.elementOfCategory.forEach(() => {
        clearDomTree();
    });
    document.querySelector('.categories-menu').innerHTML = '<table class="table table-hover mb-0" >\n'
        + '  <thead class="grey lighten-2">\n'
        + '    <tr>\n'
        + '      <th data-id="Category">Category ↕</th>\n'
        + '      <th data-id="Word">Word ↕</th>\n'
        + '      <th data-id="Translation">Translation ↕</th>\n'
        + '      <th data-id="Train">Train ↕</th>\n'
        + '      <th data-id="Correct">Correct ↕</th>\n'
        + '      <th data-id="Wrong">Wrong ↕</th>\n'
        + '      <th data-id="Wrong %">Wrong % ↕</th>\n'
        + '    </tr>\n'
        + '  </thead>\n'
        + '  <tbody class="table_body">\n'
        + '  </tbody>\n'
        + '</table>';
    for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
            const tr = document.createElement('tr');
            const errorValue = localStorage.getItem(`game-error_${cards[j][i].word}`);
            const successValue = localStorage.getItem(`game-success_${cards[j][i].word}`);
            let percentOfError;
            if (+successValue + +errorValue !== 0) {
                percentOfError = (+errorValue * 100) / (+successValue + +errorValue);
            } else {
                percentOfError = 0;
            }
            tr.innerHTML = `
                <td>${categories[j]}</td>
                <td>${cards[j][i].word}</td>
                <td>${cards[j][i].translation}</td>
                <td>${isTrueExpression(localStorage.getItem(`train_${cards[j][i].word}`))}</td>
                <td>${isTrueExpression(localStorage.getItem(`game-success_${cards[j][i].word}`))}</td>
                <td>${isTrueExpression(localStorage.getItem(`game-error_${cards[j][i].word}`))}</td>
                <td>${isTrueExpression(`${Math.round(percentOfError)}`)}</td>`;
            const element = {
                percentOfError: `${percentOfError}`,
                i: `${i}`,
                j: `${j}`,
            };
            objectsArray.push(element);
            document.querySelector('.table_body').appendChild(tr);
        }
    }
}

export function createStatistics(errorType, targetElement) {
    const identifier = targetElement.parentNode.parentNode.children[1].children[1].innerHTML;
    if (localStorage.getItem(`${errorType}_${identifier}`)) {
        let temp = localStorage.getItem(`${errorType}_${identifier}`);
        temp = +temp + 1;
        localStorage.setItem(`${errorType}_${identifier}`, `${temp}`);
    } else {
        localStorage.setItem(`${errorType}_${identifier}`, '1');
    }
}

export function createStatisticsLayout() {
    document.addEventListener('click', (event) => {
        const targetElement = event.target;
        let topMistakesArray = [];
        function sortMistakes() {
            objectsArray.forEach((object) => {
                const percentOf = +object.percentOfError;
                topMistakesArray.push(percentOf);
            });
            topMistakesArray = topMistakesArray.sort((a, b) => a - b).slice(56, 64).filter((number) => number !== 0);
        }
        if (targetElement.innerText === 'RESET') {
            const keys = Object.keys(localStorage);
            keys.forEach((key) => {
               localStorage.setItem(`${key}`, '0');
            });
            createStatisticTable();
        }
        if (targetElement.innerText === 'REPEAT DIFFICULT WORDS') {
            clearDomTree();
            sortMistakes();
            for (let k = 0; k < topMistakesArray.length; k += 1) {
                const cardPercentOfError = topMistakesArray[k];
                let temp;
                const element = objectsArray.filter((object) => object.percentOfError === cardPercentOfError.toString());
                if (element.length !== 1) {
                    if (k < element.length) {
                        temp = element[k];
                    }
                } else {
                    // eslint-disable-next-line prefer-destructuring
                    temp = element[0];
                }
                const newEl = document.createElement('div');
                newEl.classList.add('categories-menu__element');
                newEl.innerHTML = ` <div class="flip-card ">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="view overlay">
                            <audio data-sound="${[k]}" src="${cards[temp.j][temp.i].audioSrc}"></audio>
                            <img class="card-img-top"
                                 data-active="no"
                                 data-name="card"
                                 src="${cards[temp.j][temp.i].image}"
                                 alt="Card image cap">
                                <a>
                                    <div class="rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body black-color white-text rounded-bottom">
                                <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
                                <h4 class="card-title">${cards[temp.j][temp.i].word}</h4>
                                <img class="turn-card" src="./src/img/rotate.svg" data-id="swap" alt="swap">
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div class="view overlay">
                                <img class="card-img-top"  data-id="card" src="${cards[temp.j][temp.i].image}" alt="Card image cap">
                                <a>
                                    <div class="rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body black-color white-text rounded-bottom">
                                <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
                                <h4 class="card-title">${cards[temp.j][temp.i].translation}</h4>
                            </div>
                        </div>
                    </div>
                    </div>`;
                document.querySelector('.categories-menu').appendChild(newEl);
            }
        }
        if (targetElement.innerText === 'Statistics') {
            createButtons();
            createStatisticTable();
            hideElements();
        }
        if (targetElement.dataset.id === 'Category') {
            sortTable(0);
        } else if (targetElement.dataset.id === 'Word') {
            sortTable(1);
        } else if (targetElement.dataset.id === 'Translation') {
            sortTable(2);
        } else if (targetElement.dataset.id === 'Train') {
            sortTable(3);
        } else if (targetElement.dataset.id === 'Correct') {
            sortTable(4);
        } else if (targetElement.dataset.id === 'Wrong') {
            sortTable(5);
        } else if (targetElement.dataset.id === 'Wrong %') {
            sortTable(6);
        }
    });
}
