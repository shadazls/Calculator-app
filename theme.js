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

        themeButtons.forEach(button => {
            if (button.getAttribute('data-theme') !== theme) {
                button.style.opacity = '0';
                button.setAttribute('aria-hidden', 'true'); // Optionnel : indique que le bouton est caché pour les technologies d'assistance
            } else {
                button.style.opacity = '1';
                button.setAttribute('aria-hidden', 'false'); // Optionnel : indique que le bouton n'est pas caché pour les technologies d'assistance
            }
        });
    }
});