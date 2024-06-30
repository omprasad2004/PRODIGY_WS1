function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

window.addEventListener('resize', () => {
    const navLinks = document.getElementById('nav-links');
    if (window.innerWidth > 800) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 800) {
        document.getElementById('nav-links').style.display = 'flex';
    } else {
        document.getElementById('nav-links').style.display = 'none';
    }
});