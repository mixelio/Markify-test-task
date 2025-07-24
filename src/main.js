import './style.scss';

const menuItems = document.querySelectorAll('.navigation__item');

menuItems.forEach((menuItem, index, array) => {

    menuItem.addEventListener('click', () => {
        array.forEach(item => {
            item.classList.remove('_current');
        })
        menuItem.classList.add('_current');
    })
})