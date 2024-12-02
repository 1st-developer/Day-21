const btnClick = document.querySelector('.hover');
const btnFollow = document.querySelector('.follow');

btnClick.addEventListener('click', function () {
    btnClick.classList.add('show');
    btnFollow.classList.add('delay');
});