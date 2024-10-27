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
  function toggleLibraryText() {
    const imagem = document.querySelector('.imagemarrow');
    const div = document.getElementById('box-left');

    if (imagem.getAttribute('src') === 'right-arrow (1).png') {
      imagem.setAttribute('src', 'arrow.png'); 
      div.classList.toggle('opened', true);
    } else {
      imagem.setAttribute('src', 'right-arrow (1).png'); 
      div.classList.toggle('opened', false);
 
    }
  }

// ESSA PARTE A CIMA ESTA CORRETA

let isReduced = false;

function modlplaylisistbar() {
    const libraryText = document.getElementById("library-text");
    const boxLeft = document.getElementById("box-left");
    const libraryImage = document.getElementById("library-image");
    const removeelement = document.querySelectorAll(".playlistsearch2");
    const removeelement2 = document.querySelectorAll(".search");
    const removeelement3 = document.querySelectorAll(".liberus2");
    const removeelement4 = document.querySelectorAll(".simbolslibrary");
    const activeheight = document.querySelector(".sexosoes");
    const sexosoesactivated = document.querySelector(".sexosoes");
    const centerimg = document.querySelector(".alldivlibrary");

    if (!isReduced) {
        libraryText.innerText = ""; 
        boxLeft.classList.add("reducedleft"); 
        libraryImage.src = "folder (2).png"; 

        const itenstoadd = [
            ...removeelement, ...removeelement2, ...removeelement3, ...removeelement4
            
        ]
            
        for (const item of itenstoadd) {
            item.style.display = "none";
        }

        // for (const item of removeelement) {
        //     item.style.display = "none";
        // }

        // for (const item2 of removeelement2) {
        //     item2.style.display = "none";
        // }
        
        // for (const item3 of removeelement3) {
        //     item3.style.display = "none";
        // }

        // for (const item4 of removeelement4) {
        //     item4.style.display = "none";
        // }

        activeheight.classList.add("activeheight");

        sexosoesactivated.classList.add("activeted");

        centerimg.classList.add("centerimg");

        isReduced = true; 

    } else {
        libraryText.innerText = "Your Library"; 
        boxLeft.classList.remove("reducedleft"); 
        libraryImage.src = "folder (1).png"; 

        // for (const item of removeelement) {
        //     item.style.display = "flex";
        // }

        // for (const lixo of removeelement2) {
        //     lixo.style.display = "flex";
        // }

        // for (const item3 of removeelement3) {
        //     item3.style.display = "flex";
        // }

        // for (const item4 of removeelement4) {
        //     item4.style.display = "flex";
        // }

        const itenstoremove = [
            ...removeelement, ...removeelement2, ...removeelement3, ...removeelement4
            
        ]
            
        for (const item of itenstoremove) {
            item.style.display = "flex";
        }

        activeheight.classList.remove("activeheight");

        sexosoesactivated.classList.remove("activeted");

        centerimg.classList.remove("centerimg");

        isReduced = false; 
    }
}

function footerimgclick() {
    const mudarimg = document.getElementById("footerimgplay");
    const mudarlocal = document.getElementById("footerimgplay");

    if (mudarimg.src.includes("play-button-arrowhead.png")) {
        mudarimg.src = "pause.png"; 
        mudarlocal.classList.add("mudarlados")

    } else {
        mudarimg.src = "play-button-arrowhead.png"; 
        mudarlocal.classList.remove("mudarlados")
    }
}

function colormodimg() {
    const elemento = document.getElementById("footercolorid");

    // Verifica se "mudarcorclass" está presente e alterna para "mudarcorclass1"
    if (elemento.classList.contains("mudarcorclass")) {
        elemento.classList.remove("mudarcorclass");
        elemento.classList.add("mudarcorclass1");
    } 
    // Verifica se "mudarcorclass1" está presente e alterna para "mudarcorclass"
    else if (elemento.classList.contains("mudarcorclass1")) {
        elemento.classList.remove("mudarcorclass1");
        elemento.classList.add("mudarcorclass");
    } 
}