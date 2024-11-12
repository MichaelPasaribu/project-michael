
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#data-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const data = document.querySelector('#data-menu');

document.addEventListener('click', function(e){
    if(!data.contains(e.target) && !navbarNav.contains(e.target)) {navbarNav.classList.remove('active')}
});