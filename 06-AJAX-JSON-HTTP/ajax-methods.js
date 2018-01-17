// GET: info from the API
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/2',
  method: 'GET',
  success: function (data, message) {
    console.log(data)
  }
});

// POST: info to the API
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon',
  method: 'POST',
  data: {/*...*/},
  success: function (data, message) {
    console.log(data)
  }
})

// PUT: update data from a pre-existing resource in the API
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/2',
  method: 'PUT',
  data: {/*...*/},
  success: function (data, message) {
    console.log(data)
  }
})

// DELETE: remove a resource from the API
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/2',
  method: 'DELETE',
  success: function (data, message) {
    console.log(data)
  }
})


// ::::  Shorthand Methods :::: //

// GET: data from the API
$.get('https://pokeapi.co/api/v2/pokemon/2') // => jQuery Deferred object
  .then(data => {
    // do stuff w/ your data
  });

// POST: data to the API
$.post('https://pokeapi.co/api/v2/pokemon/2', {/* some data to post */})
  .then(success => console.log(success))
  .catch(err => console.error(err)) // handle errors

// GET: JSON data from the API
$.getJSON('./sample.json')
  .then(data => console.log(data))