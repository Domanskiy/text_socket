define(["functions", "DOM", "values", "server", "config"], function(functions, DOM, values, server, config){
    return {
        assign: function(){
            var keyupTimeoutId;
            var _this = this;

            /* font size slider */
            DOM.$size.slider({
                range: "min",
                min: config.minFont,
                max: config.maxFont,
                step: 1,
                slide: function(event, ui){
                    values.size = ui.value;
                    functions.setFontSize();
                },
                stop: function(event, ui) {
                    server.sendRequest();
                }
            });

            /* font family select */
            DOM.$family.change(function(){
                values.family = $(this).val();
                functions.setFontFamily();
                server.sendRequest();
            });

            /* textarea */
            DOM.$text.on("keyup", function(){
                var currentValue = $(this).val();
                values.text = currentValue;
                if (keyupTimeoutId !== undefined) {
                    clearTimeout(keyupTimeoutId);
                }
                keyupTimeoutId = setTimeout(function(){checkText(currentValue)}, config.keyupTimeout);
            })

            /* set default values */
            functions.setAllOptions();

            /* wait from server(web socket) */
            server.waitResponse();

            function checkText(value){
                if (value === values.text){
                    server.sendRequest();
                }
            }
        }
    }
});