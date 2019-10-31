import React, { Component } from 'react';
import GoogleMapReact, { Map, Marker } from 'google-map-react';

const Pointer = ({ text }) => <img src={text} width="50px" />;


const TweetMap = () => {
  const defaultProps = {
    center: {lat: 90, lng: 90},
    zoom: 14
  };

  return(
    <div className="tweetMap">
      <h1>Map</h1>

      <div style={{ height: '100vh', width: '100%' }}>
        {console.log('!!!!', defaultProps)}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB0TrDpLsHVCI_JfmLreGUE69vg4QhzOik" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
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
        </GoogleMapReact>
      </div>
  </div>

  )
}

export default TweetMap;
