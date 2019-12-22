import React, { useState } from 'react';
import TextBox from './TextBox';
import AuthorBox from './AuthorBox';
import NewQuoteButton from './NewQuoteButton';
import TweetButton from './TweetButton';
import quotes from '../quotes';

const selectRandomQuote = arr => {
  return Math.round(Math.random() * (arr.length - 1));
};

const QuoteBox = props => {
  const [currentQuote, changeQuote] = useState(
    quotes[selectRandomQuote(quotes)]
  );

  return (
    <div id="quote-box">
      <TextBox quote={currentQuote.quote} />
      <AuthorBox author={currentQuote.author} />
      <NewQuoteButton
        changeQuote={changeQuote}
        quotes={quotes}
        selectRandomQuote={selectRandomQuote}
      />
      <TweetButton />
    </div>
  );
};

export default QuoteBox;
