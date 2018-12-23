import React, { Component } from 'react';

class Timer extends Component {

  state = {
    timer: 10
  };

  startTimer = () => {
    this.timer = setInterval(() => this.setState({
      timer: this.state.timer - 1}), 1000); 
    // onClick, load Questions
    // but do I need to import Questions?
   };

  stopTimer = () => {
    clearInterval(this.timer);
    alert("Time's up!");
  };

  render() {
    return (
      <div className="Timer">
        <div>{this.state.timer} seconds</div>
        <button onClick={this.startTimer}>Start!</button>
        {this.state.timer === 0 && this.stopTimer()}
      </div>
    );
  }
}

export default Timer;
