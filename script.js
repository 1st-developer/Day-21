const btnClick = document.querySelector('.hover');
const btnFollow = document.querySelector('.follow');

const isClicked = localStorage.getItem('btnClicked');

if (isClicked === 'true') {
    btnClick.classList.add('show'); 
    btnFollow.classList.add('delay');
}

btnClick.addEventListener('click', function () {
    btnClick.classList.add('show');
    btnFollow.classList.add('delay');
    localStorage.setItem('btnClicked', 'true');
});