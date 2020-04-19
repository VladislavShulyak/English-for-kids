import { cards } from './Cards';

export default function GenerateCards(targetElement, indexOfCategory) {
    for (let i = 0; i < 8; i += 1) {
        const newEl = document.createElement('div');
        newEl.classList.add('categories-menu__element');
        newEl.innerHTML = ` <div class="flip-card ">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="view overlay">
                            <audio data-sound="${[i]}" src="${cards[indexOfCategory][i].audioSrc}"></audio>
                            <img class="card-img-top" 
                                 data-active="no" 
                                 data-name="card" 
                                 data-id="${targetElement.dataset.id}" 
                                 src="${cards[indexOfCategory][i].image}" 
                                 alt="Card image cap">
                                <a>          
                                    <div class="rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body black-color white-text rounded-bottom">
                                <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
                                <h4 class="card-title">${cards[indexOfCategory][i].word}</h4>
                                <img class="turn-card" src="./src/img/rotate.svg" data-id="swap" alt="swap">
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div class="view overlay">
                                <img class="card-img-top"  data-id="card" src="${cards[indexOfCategory][i].image}" alt="Card image cap">
                                <a>          
                                    <div class="rgba-white-slight"></div>
                                </a>
                            </div>
                            <div class="card-body black-color white-text rounded-bottom">
                                <a class="activator waves-effect mr-4"><i class="fas fa-share-alt white-text"></i></a>
                                <h4 class="card-title">${cards[indexOfCategory][i].translation}</h4>
                            </div>
                        </div>
                    </div>
                    </div>`;
        document.querySelector('.categories-menu').appendChild(newEl);
    }
}
