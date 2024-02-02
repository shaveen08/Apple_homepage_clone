//Search
const search = document.querySelector('.search img'); // Use '#' for ID
const searchField = document.querySelector('.search-field');

search.addEventListener('click', ()=>{
    searchField.style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});
search.addEventListener('mouseout', () => {
    searchField.style.display = 'none';
});

//Sidebar-menu
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar'); //ul
const openMenu = document.querySelector('#open');
const closeMenu = document.querySelector('#close');

openMenu.addEventListener('click', () => {
    navbar.style.display = 'block'; // ul
    openMenu.style.display = 'none'; // open
    closeMenu.style.display = 'block'; // close
});

closeMenu.addEventListener('click', () => {
    navbar.style.display = 'none';//ul
    closeMenu.style.display = 'none';//close
    openMenu.style.display = 'block';//open
});

