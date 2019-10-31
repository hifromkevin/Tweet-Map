import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tweet from './Tweet.jsx';
import { fetchTweets } from '../actions/index'; 


class Tweets extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchTweets();
  }

  render() {
    return (
      <div>
        <h1>Tweets</h1>
        {console.log(':)', this.props)}
        <ul>
        {this.props.tweets.map(tweet => {
          return <Tweet tweet={tweet} key={tweet.id} />
        })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({tweets}) {
  return { tweets }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTweets }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);