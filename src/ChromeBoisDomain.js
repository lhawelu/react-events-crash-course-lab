import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => drawChromeBoiAtCoords(e.clientX, e.clientY)

  handleClick = () => toggleCycling()

  handlePress = (e) => {
    if (e.key === 'a') {
      resize('+')
    } else if (e.key === 's'){
      resize('-')
    }
  }
  
  render() {
    return (
      <canvas 
        onKeyPress={this.handlePress}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
