/*
*   app.js
*   This file is where all global/app specific javascript should go
*/

'use strict';
/* jshint unused:false */
/* global $:true */
var someModule = require('./modules/module');
var app = {
    init: function(msg) {
        someModule.init('Module called from app.js');
        console.log(msg);
        return msg;
    }
};

module.exports = app;
