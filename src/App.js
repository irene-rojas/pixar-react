import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import Radio from "./Radio";
import questions from "./questions.json";

class App extends Component {

  state = {
    questions
  };



  render() {
    return (
      <div className="App">

        <div className="wrapper">
        <h1>Pixar Trivia!</h1>

          <div className="timer">
            <Timer />
          </div>



          <div className="questions">
            <h3>Hello</h3>
            <Radio />
          </div>

          <div className="results"></div>

        </div>

      </div>
    );
  }
}

export default App;
