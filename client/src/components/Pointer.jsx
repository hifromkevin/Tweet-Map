import React from 'react';

const Pointer = (props) => {
  return (
    <div>
      {
        <img src={props.tweet.user.profile_image_url} className="pointer" /> 
    
      }
      
    </div>
  )
}

export default Pointer; 