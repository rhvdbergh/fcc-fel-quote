import React from 'react';

const TweetButton = props => {
  return (
    <a
      id="tweet-quote"
      href={`https://twitter.com/intent/tweet?text="${props.quote}"---${props.author}`}
    >
      TweetButton
    </a>
  );
};

export default TweetButton;
