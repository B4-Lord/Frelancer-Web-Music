function showModal() {
    document.getElementById('overlay').classList.add('show');
}

function hideModal() {
    document.getElementById('overlay').classList.remove('show');
}

function showModal2() {
    document.getElementById('overlay2').classList.add('show');
}

function hideModal2() {
    document.getElementById('overlay2').classList.remove('show');
}

window.addEventListener("load", function() {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
    
    const background = document.querySelector(".background");
    setTimeout(() => {
        background.style.opacity = "1";
    });
});

document.getElementById('openPageButton').addEventListener('click', function() {
    window.location.href = 'home.html';
});

function toggleBackground() {
    const mudarimg = document.querySelector("#mudarimg img");
    const currentSrc = mudarimg.getAttribute("src");

    if (currentSrc === "Img/Moon-Dark.png") {
        mudarimg.setAttribute("src", "Img/Sun-Light.png");
    } else {
        mudarimg.setAttribute("src", "Img/Moon-Dark.png");
    }

    const elements = document.querySelectorAll('.bodyjs, .navbar, .modal, .modal1');
    elements.forEach(element => {
        element.classList.toggle('dark-mode');
        element.classList.toggle('light-mode');
    });

    const elementstext = document.querySelectorAll('.button11, .h3');
    elementstext.forEach(elementstext => {
        elementstext.classList.toggle('dark-mode-text');
        elementstext.classList.toggle('light-mode-text');
    });

    const elementstext2 = document.querySelectorAll('.btn2');
    elementstext2.forEach(elementstext2 => {
        elementstext2.classList.toggle('dark-mode-text2');
        elementstext2.classList.toggle('light-mode-text2');
    });

    const elementstext3 = document.querySelectorAll('.mudartexto11');
    elementstext3.forEach(elementstext3 => {
        elementstext3.classList.toggle('dark-mode-text3');
        elementstext3.classList.toggle('light-mode-text3');
    });

    const elementstext4 = document.querySelectorAll('.subtitle, .h4text, .ptext');
    elementstext4.forEach(elementstext4 => {
        elementstext4.classList.toggle('dark-mode-text4');
        elementstext4.classList.toggle('light-mode-text4');
    });

    const elementbackground = document.querySelectorAll('.background');
    elementbackground.forEach(elementbackground => {
        elementbackground.classList.toggle('dark-background');
        elementbackground.classList.toggle('light-background');
    });

    const bolabranca1 = document.querySelectorAll('.bola-branca, .bola-pequena-branca');
    bolabranca1.forEach(bolabranca1 => {
        bolabranca1.classList.toggle('bolabranca-black');
        bolabranca1.classList.toggle('bolabranca-light');
    });

    const btn = document.querySelector('.btn2');
    btn.classList.toggle('clicked');

    const btn3 = document.querySelector('.btn3');
    btn3.classList.toggle('clicked');

    const btn1 = document.querySelector('.btn');
    btn1.classList.toggle('clicked');
}

document.getElementById('openPageButton1').addEventListener('click', function() {
    window.location.href = 'home.html';
});

document.getElementById('opengithub').addEventListener('click', function() {
    window.open('https://github.com/B4-Lord', '_blank')
});