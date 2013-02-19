define(["values", "functions", "config"], function(values, functions, config){
    return {
        waitResponse : function() {
            this.socket.onmessage = function(event) {
                var data = JSON.parse(event.data);
                values.size = data.size;
                values.family = data.family;
                values.text = data.text;
                functions.setAllOptions();
            }
        },
        sendRequest : function() {
            this.socket.send(JSON.stringify(values));
        },
        socket: new WebSocket("ws://localhost:8081")
    }
});
