import React from 'react';

const TweetButton = props => {
  return (
    <a
      id="tweet-quote"
      href={`https://twitter.com/intent/tweet?text="${props.quote}"---${props.author}`}
    >
      Tweet This
    </a>
  );
};

export default TweetButton;
