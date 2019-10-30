import React from 'react';

import Tweets from './Tweets.jsx';
import Map from './Map.jsx';

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <Tweets />
        </div>
        <div className="col-sm">
          <Map />
        </div>
      </div>
    </div>
  )
}
