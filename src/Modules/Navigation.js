import * as constants from './Constants';

function hideNavigationBar() {
    constants.navigation.classList.remove('active');
}

export function toggleHamburger() {
    document.addEventListener('click', (event) => {
        const targetElement = event.target;
        if (targetElement === constants.hamburger
            || targetElement.parentNode === constants.hamburger) {
            constants.hamburger.classList.toggle('hamburger_active');
            constants.navigation.classList.toggle('active');
        } else if (constants.navigation.classList.contains('active')) {
            hideNavigationBar();
            constants.hamburger.classList.toggle('hamburger_active');
        }
    });
}
 export function toggleNavigationLink(targetElement) {
     document.querySelectorAll('.navigation__list_item').forEach((element) => {
         element.classList.remove('active_link');
     });
     targetElement.classList.add('active_link');
 }