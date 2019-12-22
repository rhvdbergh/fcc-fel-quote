import React from 'react';

const NewQuoteButton = props => {
  return (
    <h3
      id="new-quote"
      onClick={() =>
        props.changeQuote(props.quotes[props.selectRandomQuote(props.quotes)])
      }
    >
      NewQuoteButton
    </h3>
  );
};

export default NewQuoteButton;
