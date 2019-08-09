const express = require('express')
var http =  require('https');
const { API_URL, USER_KEY, PORT} = require('./config');

const app = express()
const port = PORT

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/geocode/:lat/:long', function (req, response, next) {
    let lat = req.params.lat;
    let long = req.params.long
    let url = `${API_URL}geocode?lat=${lat}&lon=${long}`

    // request -> http://localhost:3000/geocode/40.730610/-73.935242#`
  
    let options = {
      host: url,
      method: 'GET',
      headers: {
        'user-key': USER_KEY,
        'Content-Type': 'application/json',
      }
    };

    let data = "";

    let apiRequest = http.request(url, options, function(res) {
      console.log("Connected");

      res.on("data", chunk => {
        data += chunk;
      });
  
      res.on("end", () => {
        console.log("data collected");
        response.end(data)
      });
    });
  
    apiRequest.end();
    
});

app.listen(port, () => console.log(`App listening on port ${port}!`))