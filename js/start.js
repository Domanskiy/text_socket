var textRequire = require.config({
    urlArgs : "bust="+new Date().getTime(),
    paths:{
        "jquery": "lib/jquery-1.9.1",
        "jquery-ui": "lib/jquery-ui-1.10.1.custom"
    }
});

textRequire(["events"], function(events) {
    events.assign();
})
