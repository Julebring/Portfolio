if (!window.Promise){       /* finns inte Promise i webbläsaren, läs in det i index.html, dvs promise.js, som i sin tur behöver fetch.js*/
    window.Promise = Promise;
}


/* om serviceWorker finns i våran webbläsare (navigator), nyttja serviceWorker, dvs registrera vår sw.js*/
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('../sw.js')
    .then (function() {
        console.log('Service Worker har registrerats!');
    }).catch(function(error){
        console.log(error);
    });
};


