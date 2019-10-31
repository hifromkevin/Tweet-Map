import React from 'react'

export default function Tweet({tweet}) {
  return (
    <div className="tweet">
      {console.log(tweet)}
      <img src={tweet.user.profile_image_url} alt={tweet.user.screen_name} />
      <p><strong>{tweet.user.screen_name} is all like: </strong> {tweet.text} </p>
    </div>
  )
};

