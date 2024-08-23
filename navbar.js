document.querySelector('.navbar-hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.navbar-menu').classList.toggle('show');
});