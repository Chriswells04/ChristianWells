const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element => observer.observe(element));

window.addEventListener('scroll', function () {
    var element = document.querySelector('.scroll-element');
    var position = element.getBoundingClientRect();

    if (position.top < window.innerHeight || position.bottom >= 0) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
})

function goToLink(link){
    console.log(link.value);
    window.open(link.value);
}
