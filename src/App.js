import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import Questions from "./Questions/Questions.js";

class App extends Component {

  render() {
    return (

      <div className="parallax">

      <div className="App">

        <div className="wrapper">


          <div className="header">
            <h1>Pixar Trivia!</h1>
          </div>

            <Timer />   

            <div className="questionSection">
              <Questions />

            </div>

        </div>

      </div>

      </div>
    );
  }
}

export default App;
