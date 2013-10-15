$(function() {

    // setup the editor
    var $txtField = $('#main-editor'),
        editor = new Behave({
        textarea: $txtField[0],
        replaceTab: true,
        softTabs: true,
        tabSize: 4,
        autoOpen: true,
        overwrite: true,
        autoStrip: true,
        autoIndent: true,
    });

    // setup the heigth and resize on resize event
    function setTxtFieldHeight() {
        $txtField.height(window.innerHeight - 110);
    }

    $(window).smartresize(setTxtFieldHeight);


    setTxtFieldHeight();
});