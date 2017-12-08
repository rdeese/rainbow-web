import React, { Component } from 'react';
import _ from 'lodash';
import './Annotations.css';

class Annotations extends Component {
  render() {
    const visibleAnnotations = _.filter(this.props.notes, (note) => {
      return this.props.currentTime > note.start && this.props.currentTime < note.end;
    });

    return _.map(visibleAnnotations, (note) => {
      return <div className='annotation'>{note.text}</div>
    });
  };
}

export default Annotations;
