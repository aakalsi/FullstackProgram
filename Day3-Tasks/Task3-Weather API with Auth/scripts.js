// Create a request variable and assign a new XMLHttpRequest object to it.
//var request = new XMLHttpRequest();

var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Bangalore,in&APPID=c2b1445d6ba0cdc494751d4d5f53cd35',true);

request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response);
console.log(data);
}
//request.withCredentials = true;
//request.setRequestHeader("Content-Type", "application/json");
// Send request
request.send();

