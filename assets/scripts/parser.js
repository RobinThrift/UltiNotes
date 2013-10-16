
var gui = require('nw.gui');

marked.setOptions({
    gfm: true,
    highlight: function (code, lang) {
        return hljs.highlight(lang, code).value;
    },
    tables: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: true
});


Parser = function(input, outputEl) {

    var output = "";

    // firstly we parse the input as simple markdown
    output = marked(input);


    outputEl.innerHTML = output;
};



window.Parser = Parser;