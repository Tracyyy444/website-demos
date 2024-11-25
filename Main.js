let Search = document.querySelector('.Search-Box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

document.querySelector('#search-icon').onclick = () => {
    Search.classList.toggle('active'); 
    navbar.classList.remove('active');
}
document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    Search.classList.remove('active');
}
window.onscroll = () => {
    if (navbar) navbar.classList.remove('active');
    if (Search) Search.classList.remove('active');
}
const searchIcon = document.querySelector('#search-icon');
const menuIcon = document.querySelector('#menu-icon');

if (searchIcon) {
    searchIcon.onclick = () => {
        Search.classList.toggle('active'); 
        navbar.classList.remove('active');
    };
}
if (menuIcon) {
    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        Search.classList.remove('active');
    };
}
document.querySelector('#search-icon').onclick = () => {
    console.log('Search icon clicked');
    Search.classList.toggle('active'); 
    navbar.classList.remove('active');
};
window.addEventListener('scroll', () => { 
    header.classList.toggle('shadow', window.scrollY > 0); 
});
