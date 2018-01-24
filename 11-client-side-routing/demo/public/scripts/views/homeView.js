'use strict';

(function(module) {
  const homeView = {};

  homeView.init = function() {
    $('#contacts').empty();
    $('body').css('background', 'green');
    $('#content').text('hi, welcome to the home page!');
  }

  module.homeView = homeView;
})(window);