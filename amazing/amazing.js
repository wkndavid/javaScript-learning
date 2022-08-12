function reveal() {
    var reveals = document.querySelector('.reveal');

    reveals.forEach((reveal) => {
        var windowHeigth = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeigth - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);