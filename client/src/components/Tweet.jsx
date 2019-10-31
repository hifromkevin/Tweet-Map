import React from 'react'

export default function Tweet({tweet}) {
  return (
    <div className="container_fluid tweet">
      <div className="row">
        <div className="col-sm-2">
        <img src={tweet.user.profile_image_url} alt={tweet.user.screen_name} className="tweet__avatar" />
        </div>
        <div className="col-sm-10">
          <p className="tweet__text"><strong>{tweet.user.screen_name} is all like: </strong> {tweet.text} </p>
        </div>
      </div>
    </div>
  )
};

