import React from 'react';

const NewQuoteButton = props => {
  return (
    <h3
      id="new-quote"
      onClick={() =>
        props.changeQuotePos(
          props.selectRandomQuote(props.quotes, props.currentQuotePos)
        )
      }
    >
      NewQuoteButton
    </h3>
  );
};

export default NewQuoteButton;
