// nasz program

function pomniejsz () {
    var bodyDokumentu = document.querySelectorAll('body')[0];
    bodyDokumentu.classList.remove('duze');
}

function powieksz () {
    var bodyDokumentu = document.querySelectorAll('body')[0];
    bodyDokumentu.classList.add('duze');
}

console.log('przed listenerem');

window.addEventListener('load', function () {

    console.log('zaszlo zdarzenie load');
    powieksz();

});

console.log('po listenerze');

