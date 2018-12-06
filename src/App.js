import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import questions from "./questions.json";
import Questions from "./Questions/Questions.js";
// import QuestionModel from "./QuestionModel";

class App extends Component {

  state = {
    questions,
  };

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
              <Questions questions={this.state.questions}/>
            </div>



          {/* <div className="resultsDiv">

          </div> */}

        </div>

      </div>

      </div>
    );
  }
}

export default App;
