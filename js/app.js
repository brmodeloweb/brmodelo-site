if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function(registration) {
            console.log("Service worker registered");
        })
        .catch(function(err) {
            console.log("Fail to register service worker",  err);
        })
}