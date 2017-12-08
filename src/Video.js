import React, { Component } from 'react';
import Player from '@vimeo/player';

class Video extends Component {
  shouldComponentUpdate() {
    return false;
  }

  setUpVimeoPlayer(playerDiv) {
    const options = {
      id: this.props.id,
      title: false,
      byline: false,
      portrait: false,
      width: window.innerWidth,
      height: window.innerHeight
    };

    const player = new Player(playerDiv, options);

    player.on('play', function() {
      console.log('played the video!');
    });
    player.on('timeupdate', (state) => {
      console.log(state.seconds);
      this.props.onTimeUpdate(state);
      console.log(this.props)
    });

    this.setState({ player: player });

    Promise.all([player.getVideoWidth(), player.getVideoHeight()]).then((dimensions) => {
      const width = dimensions[0];
      const height = dimensions[1];
      this.props.onSizing(width, height);
    });
  }

  render() {
    return <div id='player' ref={this.setUpVimeoPlayer.bind(this)}></div>
  };
}

export default Video;
