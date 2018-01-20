'use strict';

// IIFE module pattern is used for creating local scope within the file, and
// handling data back out to a higher level of scope
(function(module) {


  // below is just an example of assigning methods to an object and then handing that object out to the global scope
  let someObj = {}
  someObj.method1 = function() {}
  someObj.method2 = function() {}
  someObj.method3 = function() {}
  someObj.method4 = function() {}
  someObj.method5 = function() {}
  someObj.method6 = function() {}

  module.someObj = someObj

})(window)