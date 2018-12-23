import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import Questions from "./Questions/Questions.js";
import Results from "../src/Results";

class App extends Component {

    state = {
        totalTrue: 0,
        totalFalse: 0,
    }

    componentDidMount() {
        return (
            <Timer />
        )
    }

    // submit button
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("submit button clicked");
            return (
                <Results />
            )
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
                <Timer />   
            </div>

            <div className="questionSection">
                <Questions 
                    handleClickInParent={this.callbackHandlerFunction} 
                />
            </div>

            <div>
                <button onClick={this.handleFormSubmit}>Submit</button>
            </div>

            <div className="resultsDiv">
                <Results 
                    totalTrue={this.state.totalTrue}
                    totalFalse={this.state.totalFalse}
                />
            </div>
            
            </div>

        </div>

      </div>
    );
  }
}

export default App;
