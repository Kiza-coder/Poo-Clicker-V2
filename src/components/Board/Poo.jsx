import React from 'react'

import posed from 'react-pose';

function Poo() {
    const Box = posed.div({
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
          });
    return (
        <Box
          className="box"
          pose={this.state.isVisible ? 'visible' : 'hidden'}
        />
      );
}

export default Poo