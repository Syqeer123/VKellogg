document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a:not([href^="#"])');
    const body = document.querySelector('body');

    body.classList.add('fade-in');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.href;

            if (url && !url.startsWith('javascript:')) {
                e.preventDefault();

                body.classList.remove('fade-in');
                body.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = url;
                }, 500);
            }
        });
    });
});
