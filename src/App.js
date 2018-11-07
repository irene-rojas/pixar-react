import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";

class App extends Component {




  render() {
    return (
      <div className="App">

        <div className="wrapper">

          <div className="pixarTrivia">
            <h1>Pixar Trivia!</h1>
              <div className="timer">
                <Timer />
              </div>
          </div>


          <div className="questions"></div>

          <div className="results"></div>

        </div>

      </div>
    );
  }
}

export default App;
