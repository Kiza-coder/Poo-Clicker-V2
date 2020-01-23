import React from 'react'

import posed from 'react-pose';

function Poo() {
  var audio = document.getElementById("boing.mp3");
  audio.play();
    return (
        <Box
          className="box"
          pose={this.state.isVisible ? 'visible' : 'hidden'}
        />
      );
}

export default Poo