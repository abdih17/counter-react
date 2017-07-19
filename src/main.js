import './style/main.scss';
import faker from 'faker';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navbar">
        <h1> Cowsay </h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'cowsay'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const content = faker.fake('{{lorem.sentence}}');
    this.setState({ content });
  }

  render() {
    return (
      <div>
        <Navbar />
        <pre>
          {cowsay.say({ text: this.state.content, e: 'oO', T: 'U' })}{' '}
        </pre>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
