import React from 'react';
import TextBox from './TextBox';
import AuthorBox from './Authorbox';
import NewQuoteButton from './NewQuoteButton';
import TweetButton from './TweetButton';

const QuoteBox = () => {
  return (
    <div id="quote-box">
      <TextBox />
      <AuthorBox />
      <NewQuoteButton />
      <TweetButton />
    </div>
  );
};

export default QuoteBox;
