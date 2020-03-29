import React from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props) {
  return (
    <button
      className='btn'
      onClick={props.onClick}>
      {props.val}
    </button>
  );
}

function Project(props){
  let val = 'val';
  let name = 'hello world';
  let lang = 'Language: ' + 'java';
  let link = 'https://google.ca';
  let description = 'blah blah';

  return (
    <div class='project-panel'>
      <a class='project-name'>{name}</a>
      <a class='project-language'>{lang}</a>
      <a href={link}>Repository</a>
      <a class='project-desc'>{description}</a>
    </div>
  );
}

function Selection(props) {
  if (props.buttonClicked) {
    return (
      <div>
        <Project />
        <Button
          val='Change project'
          onClick={() => props.onClick()}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Button 
          val='Give me a project'
          onClick={() => props.onClick()}
        />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
    };
  }

  handleClick() {
    this.setState({
      buttonClicked: true,
    });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Get a random beginner-friendly open source project!
          </p>
          <Selection 
            buttonClicked={this.state.buttonClicked}
            onClick={() => this.handleClick()}
          />
        </header>
        <footer>
          Site built with <a href="https://create-react-app.dev/">Create React App</a>
        </footer>
      </div>
    );
  }
}

export default App;
