document.querySelector(".box-right").onscroll = function() {
    const barraTeste = document.getElementById("barra-teste");
    
    if (document.querySelector(".box-right").scrollTop > 1) {
        barraTeste.style.backgroundColor = "rgb(81, 19, 139)";
        barraTeste.style.boxShadow = "0px 1px 5px rgba(0, 0, 0, 0.616)";
    } else {
        barraTeste.style.backgroundColor = "transparent";
        barraTeste.style.boxShadow = "none"; 
    }
};

function toggleLibraryText() {
    const imagem = document.querySelector('.imagemarrow');
    const div = document.getElementById('box-left');

    if (imagem.getAttribute('src') === 'Img/R-arrow.png') {
      imagem.setAttribute('src', 'Img/L-arrow.png'); 
      div.classList.toggle('opened', true);
    } else {
      imagem.setAttribute('src', 'Img/R-arrow.png'); 
      div.classList.toggle('opened', false);
 
    }
  }

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
        libraryImage.src = "Img/Folder-close.png"; 

        // const itenstoadd = [
        //     ...removeelement, ...removeelement2, ...removeelement3, ...removeelement4
        // ]
            
        // for (const item of itenstoadd) {
        //     item.style.display = "none";
        // }

        for (const item of removeelement) {
            item.style.display = "none";
        }

        for (const item2 of removeelement2) {
            item2.style.display = "none";
        }
        
        for (const item3 of removeelement3) {
            item3.style.display = "none";
        }

        for (const item4 of removeelement4) {
            item4.style.display = "none";
        }

        activeheight.classList.add("activeheight");

        sexosoesactivated.classList.add("activeted");

        centerimg.classList.add("centerimg");

        isReduced = true; 

    } else {
        libraryText.innerText = "Your Library"; 
        boxLeft.classList.remove("reducedleft"); 
        libraryImage.src = "Img/Folder-open.png"; 

        for (const item of removeelement) {
            item.style.display = "flex";
        }

        for (const lixo of removeelement2) {
            lixo.style.display = "flex";
        }

        for (const item3 of removeelement3) {
            item3.style.display = "flex";
        }

        for (const item4 of removeelement4) {
            item4.style.display = "flex";
        }

        // const itenstoremove = [
        //     ...removeelement, ...removeelement2, ...removeelement3, ...removeelement4
        // ]
            
        // for (const item of itenstoremove) {
        //     item.style.display = "flex";
        // }

        activeheight.classList.remove("activeheight");

        sexosoesactivated.classList.remove("activeted");

        centerimg.classList.remove("centerimg");

        isReduced = false; 
    }
}

function footerimgclick() {
    const mudarimg = document.getElementById("footerimgplay");
    const mudarlocal = document.getElementById("footerimgplay");

    if (mudarimg.src.includes("Img/Play.png")) {
        mudarimg.src = "Img/Pause.png"; 
        mudarlocal.classList.add("mudarlados")

    } else {
        mudarimg.src = "Img/Play.png"; 
        mudarlocal.classList.remove("mudarlados")
    }
}

function colormodimg() {
    const elemento = document.getElementById("footercolorid");

    if (elemento.classList.contains("mudarcorclass")) {
        elemento.classList.remove("mudarcorclass");
        elemento.classList.add("mudarcorclass1");
    } 

    else if (elemento.classList.contains("mudarcorclass1")) {
        elemento.classList.remove("mudarcorclass1");
        elemento.classList.add("mudarcorclass");
    } 
}

document.getElementById('openhomepage').addEventListener('click', function() {
    window.location.href = 'home.html';
});