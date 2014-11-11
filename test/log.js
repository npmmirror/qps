/**!
 * qps - test/log.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var qps = require('../');

var counter = qps({
  listener: total
});

function request() {
  counter.plus();
}
setInterval(request, 10);

function total(qpsList) {
  var now = new Date();
  var index = now.getMinutes() % 2;
  console.log('%s, %s:\nprev   : %j\ncurrent: %j',
    now, Date.now(), qpsList, counter.counts[index]);
}

// $ node test/log.js
// Tue Nov 11 2014 14:07:21 GMT+0800 (CST), 1415686041867:
// prev   : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,85,85,86,86,86,85,89,88,86,87,85,86,84,85,88,87,88,84,87,86,87,89,89,86,88,89,87,86,89,89,88,91,88,88,87,88,84,85]
// current: [85,82,86,90,87,87,88,87,85,87,86,84,87,87,85,82,84,85,85,86,85,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Tue Nov 11 2014 14:08:21 GMT+0800 (CST), 1415686101895:
// prev   : [85,82,86,90,87,87,88,87,85,87,86,84,87,87,85,82,84,85,85,86,85,84,88,86,85,85,84,84,85,84,84,85,82,84,80,81,83,82,86,81,82,84,83,88,83,84,83,83,84,84,85,87,87,86,88,85,85,86,86,90]
// current: [87,88,86,88,86,84,87,87,85,85,86,85,86,86,85,88,85,85,88,88,87,77,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Tue Nov 11 2014 14:09:21 GMT+0800 (CST), 1415686161902:
// prev   : [87,88,86,88,86,84,87,87,85,85,86,85,86,86,85,88,85,85,88,88,87,86,87,86,86,87,88,86,86,83,81,83,88,85,87,86,87,86,87,88,85,87,86,87,85,84,87,81,88,87,86,88,89,89,87,84,85,86,87,86]
// current: [87,89,88,86,87,87,90,87,87,87,87,89,87,87,85,83,84,85,87,86,86,79,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Tue Nov 11 2014 14:10:21 GMT+0800 (CST), 1415686221907:
// prev   : [87,89,88,86,87,87,90,87,87,87,87,89,87,87,85,83,84,85,87,86,86,87,87,87,89,84,87,87,87,86,87,87,87,85,84,85,87,84,85,86,85,86,86,87,89,88,88,87,87,87,88,88,88,88,88,87,85,87,87,86]
// current: [89,89,86,87,85,86,87,85,87,83,86,88,86,84,86,88,86,85,87,84,87,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Tue Nov 11 2014 14:11:21 GMT+0800 (CST), 1415686281909:
// prev   : [89,89,86,87,85,86,87,85,87,83,86,88,86,84,86,88,86,85,87,84,87,86,88,85,86,88,84,90,85,88,86,84,88,86,84,86,86,85,89,86,89,85,89,87,86,84,84,84,86,85,86,87,87,85,86,86,85,83,85,85]
// current: [87,89,86,85,86,87,85,84,84,85,84,84,85,85,83,85,86,85,87,86,87,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Tue Nov 11 2014 14:12:21 GMT+0800 (CST), 1415686341914:
// prev   : [87,89,86,85,86,87,85,84,84,85,84,84,85,85,83,85,86,85,87,86,87,86,88,87,85,85,84,87,84,85,86,85,85,86,83,85,85,86,84,85,85,83,86,85,89,85,84,86,84,87,85,84,86,85,85,85,84,86,85,85]
// current: [86,88,88,87,85,86,84,87,85,85,84,86,86,87,85,86,85,86,84,87,87,78,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// Tue Nov 11 2014 14:13:21 GMT+0800 (CST), 1415686401917:
// prev   : [86,88,88,87,85,86,84,87,85,85,84,86,86,87,85,86,85,86,84,87,87,86,88,84,86,85,84,84,88,85,84,85,85,85,86,85,86,85,85,84,85,84,86,85,85,86,84,84,85,85,88,85,85,86,86,85,85,85,84,86]
