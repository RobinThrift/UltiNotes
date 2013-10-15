$(function() {

    "use strict";

    // require the window interface
    var gui = require('nw.gui'),
        win = gui.Window.get();

    // register click events for the close handlers


    // CLOSE BTN
    $('.close-window-btn').on('click', function(e) {
        gui.App.quit();
        e.preventDefault();
    });


    // MINIMIZE BTN
    $('.mini-window-btn').on('click', function(e) {
        win.minimize();
        e.preventDefault();
    });


    // MAXIMIZE BTN
    $('.maxi-window-btn').on('click', function(e) {

        var $html = $('html').toggleClass('maximized');

        if ($html.hasClass('maximized')) {
            win.unmaximize();
        } else {
            win.maximize(); 
        }

        e.preventDefault();
    });


});