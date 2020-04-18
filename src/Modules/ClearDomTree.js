export default function clearDomTree() {
    while (document.querySelector('.categories-menu').firstChild) {
        document.querySelector('.categories-menu').removeChild(document.querySelector('.categories-menu').firstChild);
    }
}
