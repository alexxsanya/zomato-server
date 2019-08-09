const express = require('express')
var http =  require('https');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.get('/geocode/:lat/:long', function (req, response, next) {
    let lat = req.params.lat;
    let long = req.params.long
    let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`

    // request -> http://localhost:3000/geocode/40.730610/-73.935242#`

    let user_key = 'daa1df830df8b3376b10ae9fe57ba59f';  
  
    let options = {
      host: url,
      method: 'GET',
      headers: {
        'user-key': user_key,
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