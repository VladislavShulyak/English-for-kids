import * as constants from '../Constants';
import { cards, categories } from '../Cards';
import clearDomTree from '../ClearDomTree';

let byElementGrowth = true;

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
        if (targetElement.innerText === 'Statistics') {
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
                    document.querySelector('.table_body').appendChild(tr);
                }
            }
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
