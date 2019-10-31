var Twitter = require('twitter');
var config = require('../client/src/config');
var client = new Twitter({
  consumer_key: '1p6Z7za3oGlFYV3nZOzdt1nRO',
  consumer_secret: 'iuWPyie0YWDz7wgX8Zf1Y1UeOXlL4V6uCKVWNWpiO9ZUtwhpMd',
  access_token_key: '147853437-I4oVS1k5rBXluKGtjEd9GlBdqqFJFL8RUkgqmNpL',
  access_token_secret: 'aumLkGqUtVwGDu6TLVFDFQGXiyqhiZN0l2Y3blFpRNumM',

});

let opening = ['Let me show you how I', 'My dog', 'You', 'Barack Obama', 'Bob Ross', 'BILLY MAYS HERE, AND I', 'Tom Cruise', 'Almost', 'Barely', 'Totally just', 'Oh no, I', 'Cookie Monster', 'Expertly', 'Precisely', 'This one time I', 'My cousin\'s barber\'s uncle\'s friend', 'I scienced and'];
let verb = ['mentored', 'redesigned', 'launched', 'modernized', 'valued', 'orchestrated', 'programmed', 'karated', 'exploded', 'faked', 'left in the sun', 'totally didn\'t just break'];
let objects = ['an entire', 'the whole', 'this', 'that', 'a new', 'with some', 'a defiant', 'then accidentally blew up a'];
let noun = ['burrito', 'potato', 'bad idea', 'money', 'religion', 'future', 'dog', 'pumpkin', 'haiku', 'puppy', 'new dance move', 'bacon'];
let ending = ['because ideas.', 'because it seemed like a good idea at the time.', 'because my mom told me to.', 'because why not?', 'but it\'s not my fault.', 'because it came to me in a dream.', 'and now I am terrified.', 'and now the cops are coming.', 'for science.', 'but don\'t tell anyone.', 'and I regretted every minute of it.', 'becasue I said so.', 'but that\'s our little secret.'];
let tags = ['#likeaboss', '#tryandstopme', '#nojoke', '#coacHELLA', '#hardlystrictly', '#wheninrome', '#bayarea', '#calirocks', '#realtalk', '#lol', '#yolo', '#nottellingyouhow', '#conscientious', '#hella', '#oops'];

// Pick Random
let randomElement = arr => arr[Math.floor(Math.random() * arr.length)];
let randomMessage = () => {
  return [randomElement(opening),randomElement(verb), randomElement(objects), randomElement(noun), randomElement(ending), randomElement(tags)];
};

let generateTweet = () => {
  let tweet = {};
  tweet.message = randomMessage().join(' ') + ' @hifromkevin';
  tweet.create_at = new Date();
  // return tweet;
  return randomMessage().join(' ');
};

let generateLocation = () => {
  let coords = [["47.6062","122.3321"], ["37.7749", "122.4194"], ["37.8044", "122.2712"], ["32.7157", "117.1611"], ["40.7128", "74.0060"], ["45.5051", "122.6750"], ["36.1699", "115.1398"], ["41.8781", "87.6298"], ["42.3601", "71.0589"], ["43.0389", "87.9065"], ["25.7617", "80.1918"], ["38.9072", "77.0369"], ["29.9511", "90.0715"], ["39.7392", "104.9903"], ["43.4799", "110.7624"], ["40.7608", "111.8910"], ["21.3069", "157.8583"], ["61.2181", "149.9003"], ["43.6532", "79.3832"], ["33.7490", "84.3880"], ["39.9612", "82.9988"], ["45.7833", "108.5007"], ["41.5868", "93.6250"], ["39.3280", "120.1833"], ["35.0844", "106.6504"], ["32.7767", "96.7970"], ["44.9778", "93.2650"]]
  return randomElement(coords);
}

let coordinates = generateLocation();

// Switched Long and lat
let params = {
  "status": generateTweet(),
  "long": coordinates[0],
  "lat": coordinates[1]
};

client.post('statuses/update', params, (err, data, response) => {
  // console.log('some DATA', data);
  if (err) console.log('errrrr', err);
  // console.log('REsponse', response);
});