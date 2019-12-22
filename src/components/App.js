import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './QuoteBox';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <QuoteBox />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
