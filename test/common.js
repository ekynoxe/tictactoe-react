/* global global */
import should from 'should';
import chai from 'chai';

(function (global) {
    'use strict';

    // These are defined globally on a browser, so only care about node here
    if (typeof require !== 'undefined') {
        global.should = should;
        global.chai = chai;
        global.expect = global.chai.expect;
    }
})(typeof global === 'undefined' ? window : global);
