
var gui = require('nw.gui'),
    win = gui.Window.get();

exports.quit = function() {
    gui.App.quit();
}


exports.minimize = function() {
    win.minimize();
}


exports.maximize = function() {
    win.maximize();
}


exports.unmaximise = function() {
    win.unmaximize();
}

exports.setTitle = function(title) {
    win.title = title;
}