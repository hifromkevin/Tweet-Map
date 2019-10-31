import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact, { Map, Marker } from 'google-map-react';

import Pointer from './Pointer.jsx';
import config from '../config';


const TweetMap = () => {
  const tweets = useSelector(state => state.tweets);
  const dispatch = useDispatch();

  const defaultProps = {
    center: {lng: -122.4194, lat: 37.7749},
    zoom: 11
  };

  return(
    <div className="tweetMap">
      <h1>Map</h1>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.google }}
          defaultCenter= {defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        {tweets.map(tweet => {
            console.log('tttt', tweet)
            return <Pointer key={tweet.id} lat={defaultProps.center.lat} lng={defaultProps.center.lng} tweet={tweet} />
          } 
        )}

        </GoogleMapReact>
      </div>
  </div>

  )
}

export default TweetMap;

/*

          <Pointer
            lat={59.955413}
            lng={30.337844}
            text="https://i.pinimg.com/originals/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg"
          />
          <Pointer
            lat={59}
            lng={30}
            text="https://i.pinimg.com/originals/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg"
          />

*/