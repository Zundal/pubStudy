window.addEventListener('DOMContentLoaded', function() {
        const nav = document.getElementById('nav');
    fetch('./navigator.html')
    .then(response => response.text())
    .then(html => {
        nav.innerHTML = html;
    });
});