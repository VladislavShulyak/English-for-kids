export function clearDomTree() {
    while (document.querySelector('.categories-menu').firstChild) {
        document.querySelector('.categories-menu').removeChild(document.querySelector('.categories-menu').firstChild);
    }
}

export function clearContainer(elem) {
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}
