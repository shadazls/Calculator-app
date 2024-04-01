document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-button');
    const body = document.querySelector('body');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = button.getAttribute('data-theme');
            console.log(theme);
            changeTheme(theme);
        });
    });

    function changeTheme(theme) {
        body.className = 'theme' + theme;
    }
});