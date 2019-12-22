import React, { useState } from 'react';
import TextBox from './TextBox';
import AuthorBox from './AuthorBox';
import NewQuoteButton from './NewQuoteButton';
import TweetButton from './TweetButton';
import quotes from '../quotes';

const selectRandomQuote = (arr, currentQuotePos) => {
  let newPos = Math.round(Math.random() * (arr.length - 1));

  // don't let it return the current quote position - always change!
  while (newPos === currentQuotePos && quotes.length > 1) {
    newPos = Math.round(Math.random() * (arr.length - 1));
  }

  return newPos;
};

const QuoteBox = props => {
  const [currentQuotePos, changeQuotePos] = useState(selectRandomQuote(quotes));

  return (
    <div id="quote-box">
      <TextBox quote={quotes[currentQuotePos].quote} />
      <AuthorBox author={quotes[currentQuotePos].author} />
      <NewQuoteButton
        currentQuotePos={currentQuotePos}
        changeQuotePos={changeQuotePos}
        quotes={quotes}
        selectRandomQuote={selectRandomQuote}
      />
      <TweetButton
        quote={quotes[currentQuotePos].quote}
        author={quotes[currentQuotePos].author}
      />
    </div>
  );
};

export default QuoteBox;
