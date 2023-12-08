document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode', darkModeToggle.checked);
    });
});
