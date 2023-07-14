window.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    fetch('./footer.html')
    .then(response => response.text())
    .then(html => {
        footer.innerHTML = html;
    });

    const nav = document.getElementById('nav');
    fetch('./navigator.html')
    .then(response => response.text())
    .then(html => {
        nav.innerHTML = html;
    });
});