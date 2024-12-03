const resetButton = document.getElementById('resetBtn');


resetButton.addEventListener('click', () => {
    localStorage.removeItem('btnClicked');
    alert('you decided to unfollow');
});