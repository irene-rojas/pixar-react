import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import Questions from "./Questions/Questions.js";
import Results from "../src/Results";

class App extends Component {

    state = {
        totalTrue: 0,
        totalFalse: 0,
        showTimer: true,
        showQuestions: false,
        showResults: false,
    }

    clickStart = (event) => {
        event.preventDefault();
        console.log("start button clicked");
        this.setState(
            {showQuestions: true}
        )
    }

    // submit button
    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("submit button clicked");
        this.setState(
            {showResults: true,
            showQuestions: false,
            showTimer: false}
            // timer still appears in resultsDiv
        )
    };

    timerZero = () => {
        if (this.state.timer === 0) {
        this.setState(
            {showResults: true,
            showQuestions: false,
            showTimer: false}
        )
        }
        // nothing happens >:(
    };

    callbackHandlerFunction = ( selectedOption ) => {
        const answerValue = selectedOption.value;
        if (answerValue === true) {
            this.setState({totalTrue: this.state.totalTrue + 1}, () => {
                console.log(`New TotalTrue: ${this.state.totalTrue}`);
            });
        };
        if (answerValue === false) {
            this.setState({totalFalse: this.state.totalFalse + 1}, () => {
                console.log(`New TotalFalse: ${this.state.totalFalse}`);
            });
        };
      } 

  render() {
    return (

      <div className="parallax">

        <div className="App">

            <div className="wrapper">

            <div className="headerDiv">
                <h1>Pixar Trivia!</h1>
            </div>

            <div className="timerDiv">
                <Timer 
                handleTimerClick={this.clickStart}
                timeOut={this.timerZero}
                />   
            </div>

            {this.state.showQuestions &&
            <div className="questionSection">
                <Questions 
                    handleClickInParent={this.callbackHandlerFunction}
                />

                <div>
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </div>
            </div>
            }

            {this.state.showResults && 
            <div className="resultsDiv">
                <Results 
                    totalTrue={this.state.totalTrue}
                    totalFalse={this.state.totalFalse}
                />
            </div>
            }

            </div>

        </div>

      </div>
    );
  }
}

export default App;
