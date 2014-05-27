/*
*   module.js
*   This is just an example file showing basic module creation
*/
'use strict';

// private function
var someModule = {
    init: function() {
        var $ele = $('<p></p>');

        $ele.append('Module loaded!');
        console.log($ele.text());
    }
};

module.exports = someModule;