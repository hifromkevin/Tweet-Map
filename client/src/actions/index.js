import 'babel-polyfill';

import FETCH_TWEETS from './types';

export const fetchTweets = async() => {
  try {
    const res = await fetch('/tweets');
    const data = await res.json();
    return {
      type: FETCH_TWEETS,
      payload: data
    }
  } catch (err) {
    console.error('Error in fetchTweets function, actions/index.js: ', err);
  }
}

// export function fetchTweets() {
//   fetch('/tweets')
//     .then(res => res.json())
//     .then(data => {
//       return {
//         type: FETCH_TWEETS,
//         payload: data
//       }
//     })
// }




