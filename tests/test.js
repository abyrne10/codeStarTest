'use strict';

const expect = require('chai').expect;

describe('test module', () => {
    it('should pass the test', () => {
        expect(true).to.equal(true);
    });
    it('should fail the test', () => {
        expect(true).to.equal(false);
    });
});
