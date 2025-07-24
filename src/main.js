import './style.scss';

const menuItems = document.querySelectorAll('.navigation__item');
const pages = document.querySelectorAll('.hero-section');
const pagesContainer = document.querySelector('.hero-container');
const pagesContainerWidth = pagesContainer.offsetWidth;
const pageWidth = pagesContainerWidth / pages.length;

menuItems.forEach((menuItem, index, array) => {
    menuItem.addEventListener('click', () => {
        array.forEach((item, index) => {
            item.classList.remove('_current');
            pages[index].classList.remove('_active');
        })
        menuItem.classList.add('_current');
        pages[index].classList.add('_active');
        pagesContainer.style.translate = `-${100 * index}% 0`;
    })
})