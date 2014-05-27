/*
*   appSpec.js
*/


'use strict';

var app = require('../../dev/scripts/app');

describe('just checking', function() {

    it('works for app', function() {
        var msg = 'Welcome to Ali Baba Tajine';

        var message = app.init(msg);

        expect(message).toMatch(/Welcome/);
    });

});
