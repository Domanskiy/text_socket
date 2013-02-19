var textRequire = require.config({
    urlArgs : "bust="+new Date().getTime()
});

textRequire(["functions", "events"], function(functions, events) {
    events.assign();
})
