import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../actions';

import Tweet from './Tweet.jsx';

const Tweets = () => {
  const tweets = useSelector(state => state.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  return (
    <div className="tweets">
      <h1>Tweets</h1>
      <ul>
      {tweets.map(tweet => {
        return <Tweet tweet={tweet} key={tweet.id} />
      })}
      </ul>
    </div>
  );
};

export default Tweets;