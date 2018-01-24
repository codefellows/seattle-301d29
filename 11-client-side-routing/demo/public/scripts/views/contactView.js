'use strict';

(function(module) {
  const contactView = {};

  contactView.init = function() {
    $('#contacts').empty();
    $('body').css('background', 'red');
    $('#content').text('welcome to my contact page');

    $.getJSON('./scripts/model/contact.json')
      .then(data => {
        console.log('our contact JSON data:', data);

        data.forEach(contact => {
          var li = document.createElement('li');
          li.innerHTML = `${contact.name} has an id of ${contact.id} and thier favorite number is ${contact.fav_num}. Are they a ninja?  The answer is ${contact.ninja}`;

          $('#contacts').append(li);
        });
      })
  }

  module.contactView = contactView;
})(window);