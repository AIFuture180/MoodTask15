function adjustMainContentPadding() {
    const navBar = document.querySelector('.nav-bar');
    const mainContent = document.querySelector('.main-content');
    if (navBar && mainContent) {
        const navHeight = navBar.offsetHeight;
        mainContent.style.paddingTop = `${navHeight + 10}px`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-bar .nav-links a');
    const mainContent = document.querySelector('.main-content');

    mainContent.classList.add('fade-in');
    adjustMainContentPadding();

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('active') || link.parentElement.classList.contains('dropdown')) return;
            e.preventDefault();
            mainContent.classList.remove('fade-in');
            mainContent.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    });

    window.addEventListener('resize', adjustMainContentPadding);
});
