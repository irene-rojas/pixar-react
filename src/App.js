import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import Questions from "./Questions/Questions.js";
// import Results from "../src/Results";

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

            {/* this.state.articles.length > 0 && ...*/}
            <div className="resultsDiv">
                {/* <Results /> */}
            </div>

            </div>

        </div>

      </div>
    );
  }
}

export default App;
