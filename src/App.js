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
        console.log(`TotalTrue: ${this.state.totalTrue}`);
        console.log(`TotalFalse: ${this.state.totalFalse}`);
    }

    // submit button
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("submit button clicked");
    };

    callbackHandlerFunction = ( selectedOption ) => {
        const answerValue = selectedOption.value;
        if (answerValue === true) {
            // console.log(answerValue);
            this.setState({totalTrue: this.state.totalTrue + 1}, () => {
                console.log(`New TotalTrue: ${this.state.totalTrue}`);
            });
        };
        if (answerValue === false) {
            // console.log(answerValue);
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

            {/* this.state.articles.length > 0 && ...*/}
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
