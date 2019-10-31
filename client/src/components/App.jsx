import React from 'react';

import Tweets from './Tweets.jsx';
import TweetMap from './TweetMap.jsx';

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <Tweets />
        </div>
        <div className="col-sm">
          <TweetMap />
        </div>
      </div>
    </div>
  )
}
