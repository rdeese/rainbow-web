import React, { Component } from 'react';
import './App.css';
import Video from './Video.js';
import Annotations from './Annotations.js';

const NOTES = [
  {
    start: 5,
    end: 10,
    text: 'Test note!'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    }
  }

  updateTime(state) {
    this.setState({ currentTime: state.seconds });
  }

  setVideoDimensions(width, height) {
    console.log(width, height);
    this.setState({
      videoSize: {
        width: width,
        height: height
      }
    });
  }

  render() {
    const annotationsArea = this.state.videoSize;

    return (
      <div className="App">
        <Video
          id={52250962}
          onTimeUpdate={this.updateTime.bind(this)}
          onSizing={this.setVideoDimensions.bind(this)}
        />
        <Annotations
          availableArea={annotationsArea}
          notes={NOTES}
          currentTime={this.state.currentTime}
        />
      </div>
    );
  }
}

export default App;
