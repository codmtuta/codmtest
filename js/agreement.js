document.getElementById('private').addEventListener('change', function () {
    const button = document.querySelector('.agreement__terms-btn');
    if (this.checked) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
});