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
        }),
        currFont = 'droidserif',

        $preview = $('#preview-window');

    // setup the heigth and resize on resize event
    function setTxtFieldHeight() {
        $txtField.height(window.innerHeight - 110);
    }

    $(window).smartresize(setTxtFieldHeight);


    setTxtFieldHeight();


    // change the font
    $('#font-selector').on('change', function() {

        $prevTxt = $('#main-editor, #preview-window');

        $prevTxt.removeClass(currFont);

        currFont = this.value;

        $prevTxt.addClass(currFont);

    });



    // preview stuff
    function preview() {

        // set the same height, then hide the editor
        $preview.height($txtField.height());
        $txtField.hide();

        Parser($txtField.val(), $preview[0]);

        $preview.show();
    }


    $('.show-preview-btn').on('click', function() {

        $('.show-editor-btn').removeClass('hidden');
        $(this).addClass('hidden');

        preview();
    });


    $('.show-editor-btn').on('click', function() {

        $('.show-preview-btn').removeClass('hidden');
        $(this).addClass('hidden');

        $preview.hide();
        $txtField.show();
    });

});