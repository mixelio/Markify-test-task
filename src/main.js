import './style.scss';

const menuItems = document.querySelectorAll('.navigation__item');
const pagesContainer = document.querySelector('.hero-container');

menuItems.forEach((menuItem, index, array) => {
    menuItem.addEventListener('click', () => {
        array.forEach((item, index) => {
            item.classList.remove('_current');
        })
        menuItem.classList.add('_current');
        pagesContainer.style.translate = `-${100 * index}% 0`;
    })
})