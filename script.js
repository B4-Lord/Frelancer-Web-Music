document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.text a');
    const nav = document.querySelector('#teste111');
    const scrollableDiv = document.querySelector('.box-right'); 

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    
    scrollableDiv.addEventListener('scroll', () => {
        if (scrollableDiv.scrollTop > 0) { 
            nav.classList.add('text-active'); 
        } else {
            nav.classList.remove('text-active'); 
        }
    });
});

// const hoverDiv = document.getElementById('color');
// const nav = document.getElementById('box-right');

// hoverDiv.addEventListener('mouseenter', function() {
//     nav.style.background = 'red';
// });

// hoverDiv.addEventListener('mouseleave', function() {
//     nav.style.backgroundColor = 'blue';  
// });