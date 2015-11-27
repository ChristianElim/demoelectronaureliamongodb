(function () {
    /**
     * Main Electron process
     */

    'use strict';

    var app = require('app');
    var BrowserWindow = require('browser-window');
    var applicationMenu = require('./browser/application-menu');

    var mainWindow = null;

    app.on('ready', function () {

        global.aureliaRoot = __dirname  + '/src/';

        applicationMenu.setup();

        mainWindow = new BrowserWindow({
            width: 900,
            height: 700,
            "min-width": 900,
            "min-height": 700,
            center: true,
            resizable: true
        });

        mainWindow.loadUrl('file://' + __dirname + '/src/index.html');

    });
})();
