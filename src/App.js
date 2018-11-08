import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import Radio from "./Radio";
import questions from "./questions.json";
import Questions from "./Pages/Questions";
// import QuestionModel from "./QuestionModel";

class App extends Component {

  // state = {
  //   questions,
  // };



  render() {
    return (
      <div className="App">

        <div className="wrapper">


          <div className="header">
            <h1>Pixar Trivia!</h1>
              <Timer />
          </div>

            <div className="questionsDiv">
              <Questions />
            </div>



          {/* <div className="resultsDiv">

          </div> */}

        </div>

      </div>
    );
  }
}

export default App;
