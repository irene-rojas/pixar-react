import React, { Component } from 'react';

class Timer extends Component {

  state = {
    timer: 10
  };

  startTimer = () => {
    this.timer = setInterval(() => this.setState({
      timer: this.state.timer - 1}), 1000); 
 
    console.log(this.state);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    alert("Oops");
  };


  render() {
    return (
      <div className="Timer">
        <div>{this.state.timer} seconds</div>
        <button onClick={this.startTimer}>Let's start!</button>
        {this.state.timer === 0 && this.stopTimer()}
      </div>
    );
  }
}

export default Timer;
