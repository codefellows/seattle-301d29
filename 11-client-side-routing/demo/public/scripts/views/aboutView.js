'use strict';

(function(module) {
  const aboutView = {};

  aboutView.init = function() {
    $('#contacts').empty();
    $('body').css('background', 'orange');
    $('#content').text('welcome to my about page');
  }

  module.aboutView = aboutView;
})(window);