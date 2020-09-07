// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET','https://dog.ceo/api/breeds/list/all', true);

request.onload = function() {
  // Begin accessing JSON data here
var dataFetched = JSON.parse(this.response);
console.log(dataFetched);
}

// Send request
request.send();