import React from 'react';
import logo from './logo.svg';
import './App.css';
import projectList from './projects/projects';

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
  // get random project
  let projectNum = Math.round(Math.random() * projectList.length);
  let project = projectList[projectNum];

  let name = project[1];
  let lang = 'language: ' + (project[0]);
  let linkText = '<go to repo>'
  let link = project[2];
  let description = project[3];

  return (
    <div className='project-panel'>
      <a className='project-name'>{name}<br /></a>
      <a className='project-language'>{lang}<br /></a>
      <a className='project-desc'>{description}<br /></a>
      <a className='project-repo' href={link}>{linkText}</a>
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
