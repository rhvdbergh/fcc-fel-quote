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
      NewQuoteButton
    </a>
  );
};

export default NewQuoteButton;
