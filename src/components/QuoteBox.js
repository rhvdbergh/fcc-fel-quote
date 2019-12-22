import React from 'react';
import TextBox from './TextBox';
import AuthorBox from './AuthorBox';
import NewQuoteButton from './NewQuoteButton';
import TweetButton from './TweetButton';
import quotes from '../quotes';

// TODO: Select random quote at startup

const selectRandomQuote = arr => {
  return Math.round(Math.random() * (arr.length - 1));
};

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentQuote: selectRandomQuote(quotes) };
  }
  render() {
    return (
      <div id="quote-box">
        <TextBox
          quote={quotes[this.state.currentQuote].quote}
          author={quotes[this.state.currentQuote].author}
        />
        <AuthorBox />
        <NewQuoteButton />
        <TweetButton />
      </div>
    );
  }
}

export default QuoteBox;
