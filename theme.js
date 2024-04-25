document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-button');
    const body = document.querySelector('body');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = button.getAttribute('data-theme');
            changeTheme(theme);
            localStorage.setItem('theme', theme);
        });
    });

    function changeTheme(theme) {
        body.className = 'theme' + theme;
    }
});