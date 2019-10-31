# Tweet-Map
Wanna see where the Tweet you are reading is from? Look no further than this map!

## Getting Started
Node (Suggested v11.13.0)
  - https://nodejs.org/en/download/ 

Nodemon (Suggested v1.18.11)
  - https://www.npmjs.com/package/nodemon
  - Alternatively, you may go into package.json and alter "start" and "tweet" scripts to run with node rather than nodemon

NPM (Suggested v6.12.0)
Electron (Suggested v6.0.3)
  - npm install electron -g

API Keys:
1. Go to the following websites and request an API key:
  - https://developer.twitter.com/en/docs/basics/developer-portal/overview
  - https://cloud.google.com/maps-platform/?_ga=2.20455480.1868755418.1572395631-838390901.1572395631#get-started
2. Go to config/index.example.js and paste in your API key. Then, change the name of the file to index.js. 

## Installing Dependencies
Open three tabs on your terminal. 
Tab 1: 
```sh
npm install 
bower install
npm start
```

Tab 2: 
```sh
npm run build
```

To have Tweets (with random location codes) added to your account via API:
```sh
npm run tweet
```

## Overview 

This application is currently set up to take all tweets from @hifromkevin, display them on the left column, then show them using an avatar on the right column. Some of the features of this application include:
- React / Redux for state management
- SASS styling to provide flexibility, including keyframes and variables
- Ability to send out a tweet using a chain of random sentence fragments concatenated together. These tweets are also assigned a random set of coordinates, which will place them on a map
- Take coordinates provided by the Twitter API and uses them to assign a point onto a Google Map

Future developments in consideration:
- Deployment to Heroku and/or AWS
- Further styling improvements
- Currently, the coordinates are a pair of values representing a metro in the United States. A random number, or override feature, may be considered
- Flexibility in the tweets being shown. This includes the ability to search for a category (for example, tweets from a certain user), as well as a certain value (such as tweets containing the word "banana"). This would be as simple as adding two form fields that would be added to a get path (such as get(/tweet/:category/:value))
- On scroll loading for more tweets