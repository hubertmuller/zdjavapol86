// nasz program

function pomniejsz () {
    var bodyDokumentu = document.querySelectorAll('body')[0];
    bodyDokumentu.classList.remove('duze');
}

function powieksz () {
    var bodyDokumentu = document.querySelectorAll('body')[0];
    bodyDokumentu.classList.add('duze');
}

function sprawdz(target) {
    //var forma = document.querySelectorAll("form")[0];
    var forma = document.forma;
    var imieWartosc = forma.imie.value;
    var nazwiskoWartosc = forma.nazwisko.value;
    //document.querySelector('#imieError');
    var imieError = document.getElementById('imieError');
    var nazwiskoError = document.getElementById('nazwiskoError');
    var komentarzeError = document.getElementById('komentarzeError');
    var blad = false;

    var tablicaElementow = [
        {
            wartoscSpr: forma.imie.value,
            poleBlad: imieError,
            wyrazenie: /^([A-z]{3,})$/g,
        },
        {
            wartoscSpr: forma.nazwisko.value,
            poleBlad: nazwiskoError,
            wyrazenie: /^([A-z\-]{3,})$/g,
        },
        {
            wartoscSpr: forma.komentarze.value,
            poleBlad: komentarzeError,
            wyrazenie: /^([A-z ]{3,})$/g,
        }
    ];

    var ustawBlad = function (status, uchwytPola) {
        if (status === true) uchwytPola.classList.remove('noerror');
        else uchwytPola.classList.add('noerror');
    }

    for(let x = 0; x < tablicaElementow.length ; x++) {

        let sparawdzanyElement = tablicaElementow[x];

        if (!sparawdzanyElement.wartoscSpr.match(sparawdzanyElement.wyrazenie)) {
            ustawBlad(true, sparawdzanyElement.poleBlad);
            blad = true;
        } else {
            ustawBlad(false, sparawdzanyElement.poleBlad);
        }
    }

    if (blad === true) {
        target.preventDefault();
    }

    //funkcja strzalkowa
    var elementyP = document.querySelectorAll("p");
    elementyP.forEach(
        (element) => {
            element.style.color = "#ff0000";
        });

    elementyP.forEach(
        function (element) {
            element.style.color =  "#ff0000";
        }
    )


}

console.log('przed listenerem');

window.addEventListener('load', function () {
    console.log('zaszlo zdarzenie load');
    powieksz();
    var forma = document.forma;
    forma.addEventListener('submit', function (target) {
        sprawdz(target);
    });
});

console.log('po listenerze');



