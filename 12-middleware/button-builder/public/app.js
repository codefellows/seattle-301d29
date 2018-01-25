'use strict';

function setColor(ctx, next) {
  $('button').css('background', '#' + ctx.params.color);
  $('form')[0].color.value = ctx.params.color;
  next();
}

function setRadius(ctx, next) {
  $('button').css('border-radius', ctx.params.radius + 'px');
  $('form')[0].radius.value = ctx.params.radius;
  next();
}

function setPhrase(ctx) {
  $('button').text(ctx.params.phrase);
  $('form')[0].phrase.value = ctx.params.phrase;
  $('#buttoncode').text(document.getElementById('thebutton').outerHTML);
}

page('/:color/:radius?/:phrase?', setColor, setRadius, setPhrase);
page('*', ctx => console.log('404', ctx));

$(function() {
  const form = $('form')[0];
  page();
 
  $('form').on('change', function() {
    const path = [form.color.value, form.radius.value, form.phrase.value].filter(item => item).join('/');
    console.log(path);
    page.show(`/${path}`);
  });
})