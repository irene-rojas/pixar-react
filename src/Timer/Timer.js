import React, { Component } from 'react';

class Timer extends Component {

  state = {
    timer: 60
  };

  startTimer = (event) => {
    this.timer = setInterval(() => this.setState({
      timer: this.state.timer - 1}), 1000); 
    // onClick, load Questions
    this.props.handleTimerClick(event);
   };

  stopTimer = () => {
    clearInterval(this.timer);
    // console.log("Time's up!");
    this.props.timeOut();
  };

  shouldComponentUpdate() {
    // console.log(this.state.timer);
    if (this.state.timer <= 0) {
      this.stopTimer();
      return false;
    }
    return true;
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className="Timer">
        <div>{this.state.timer} seconds</div>
        <button onClick={this.startTimer}>Start!</button>
      </div>
    );
  }
}

export default Timer;
