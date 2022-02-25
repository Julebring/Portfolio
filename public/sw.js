var CACHE_STATIC_NAME = 'static-v1';
var CACHE_DYNAMIC_NAME = 'dynamic-v1';
var self = this;

/* lyssnar på install. När det sker skriv ut nåt */
self.addEventListener('install', function(event){
    console.log('[Service Worker] installerar Service Worker', event);
    event.waitUntil(        /* vänta med att gå vidare i event tills allt är cachat och klart. */
        caches.open(CACHE_STATIC_NAME)   /* valfritt namn på cachen */
        .then(function(cache){  /* vi får tillbaka innehållet i cachen med namn static och lägger det i cache */
            console.log("[Service Worker] Static cache");
            /* cache.add('/');    
            cache.add('index.html');
            cache.add('sw.js');
            cache.add('js/app.js'); */      /* lägg filen i cachen */
            cache.addAll(
                [
                    '/',
                    'index.html',
                    'js/app.js',
                    'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;900&display=swap',
                    'https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap'
                
                ]
            )
        })
    )
});




self.addEventListener('activate', function(event){
    console.log('[Service Worker] aktiverar Service Worker', event);

    /* städa i cache så inte gamla ligger kvar */
    event.waitUntil(
          caches.keys().then(function (keyList) {
                return Promise.all(keyList.map(function(key){
                    if(key !==CACHE_STATIC_NAME && key !==CACHE_DYNAMIC_NAME){
                        caches.delete(key);
                        console.log('[SERVICE WORKER] Tar bort gammal cache', key);
                    }
                }));
          })
    );

});





/* när vi ber om nåt, svara med det vi vill hämta */
self.addEventListener('fetch', function(event){
    /* console.log('[Service Worker] hämtar något', event); */
    event.respondWith(async function(){
        const cachedResponse = await caches.match(event.request);
        if(cachedResponse) return cachedResponse;  /* om det finns nåti cache (caches.match), returnera cachedResponse */
        /* return fetch(event.request); */               /* om inte, returnera alla fetch från internet*/

        /* cacha dynamiskt: */
        console.log('[SERVICE WORKER] Utför dynamic cache');
        return fetch(event.request)      /* om inget finns i cach (match ovan) hämta, lägg i dynamisk cache */       
        .then(function(res) {
            return caches.open(CACHE_DYNAMIC_NAME)      /* om inte finns, öppna cache med namn dynamic, skicka (return) till en .then över denna */ 
                .then(function(cache){
                    cache.put(event.request.url, res.clone())   /* url ligger i objektet event från ovan =request. res=respond*/
                    return res;
                });
         })
         .catch(function(error){
                console.log("FEL: "+error);
         });

    }());  
});


