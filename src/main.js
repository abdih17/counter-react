import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <header className="navbar">
        <h1> Generate Cowsay Lorem </h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      title: 'hello world'
    }

    this.lulwat = this.lulwat.bind(this);
  }

  handleClick(e) {
    console.log('event', e);

    this.setState({count: Math.random()});
    this.setState({oldState => {
      return {
        count: oldState.count + 3});
      }
    })
  }

  render(){
    return (
      <div>
        <Navbar />
        <h1>Cool</h1>
        <p onclick={this.handleClick}> counter: {this.state.count}</p>
        <p>{this.state.title}</p>
      </div>
    )
  }
}

ReactDom.render(
  <App />, document.getElementById('root'))
