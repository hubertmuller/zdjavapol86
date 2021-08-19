var s = new Date().getSeconds();

console.log('wystartowalismy');

setTimeout(
    function () {
        console.log(
            "Uruchomiono po upływie " +
            (new Date().getSeconds() - s) +
            " sekund");
    },
    500
);

while(true) {
   if(new Date().getSeconds() - s >= 5) {
       console.log('petla while, zapetlona na 5 sek wlasnie sie skonczyla');
       break;
   }
}

