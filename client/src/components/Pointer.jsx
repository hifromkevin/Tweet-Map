import React from 'react';

const Pointer = (props) => {
  return (
    <div>
      {
        <img src={props.tweet.user.profile_image_url} width="50px" /> 
    
      }
      
    </div>
  )
}

export default Pointer; 