define(["DOM" ,"families", "values"], function(DOM, families, values) {
    return {
        setSize: function(){
            DOM.$size.slider("value", values.size);
            this.setFontSize();
        },
        setFontSize: function(){
            DOM.$text.css("font-size", values.size);
        },
        setFamily: function(){
            DOM.$family.val(values.family);
            this.setFontFamily();
        },
        setFontFamily: function() {
            DOM.$text.css("font-family",families[values.family]);
        },
        setText: function() {
            DOM.$text.val(values.text);
        },
        setAllOptions: function() {
            this.setSize();
            this.setFamily();
            this.setText();
        }
    }
});
