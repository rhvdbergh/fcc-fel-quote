import React from 'react';

const NewQuoteButton = props => {
  return (
    <a
      id="new-quote"
      onClick={() =>
        props.changeQuotePos(
          props.selectRandomQuote(props.quotes, props.currentQuotePos)
        )
      }
    >
      New Quote
    </a>
  );
};

export default NewQuoteButton;
