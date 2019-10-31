const express = require('express');
const app = express();
const port = 3005;

app.use(express.static(__dirname + '/../client/dist'));

// Get Tweets
var Twitter = require('twitter');
var config = require('../client/src/config');
var client = new Twitter(config.twitter);

app.get('/tweets', (req, res) => {
  var params = {screen_name: 'hifromkevin'};
  client.get('statuses/user_timeline', params, function(err, data, response) {
    res.json(data);
    if (err) console.log('ERR', err);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));