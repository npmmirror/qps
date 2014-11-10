/**!
 * qps - test/qps.test.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

var qps = require('../');

describe('qps.test.js', function () {
  it('should plus work', function (done) {
    var counter = qps();
    counter.plus();
    counter.get().should.equal(1);
    counter.plus();
    counter.get().should.equal(2);
    counter.get().should.equal(2);
    counter.get().should.equal(2);
    counter.get().should.equal(2);
    setTimeout(function () {
      counter.get().should.equal(0);
      counter.plus();
      counter.get().should.equal(1);
      counter.get().should.equal(1);
      counter.get().should.equal(1);
      counter.get().should.equal(1);
      counter.plus();
      counter.plus();
      counter.plus();
      counter.get().should.equal(4);
      done();
    }, 1000);
  });
});
