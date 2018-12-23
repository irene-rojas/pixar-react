import React, { Component } from 'react';
import './App.css';
import Timer from "./Timer";
import Questions from "./Questions/Questions.js";
import Results from "../src/Results";

class App extends Component {

    state = {
        // totalTrue: 0,
        // totalFalse: 0,
    }

    componentDidMount() {
        console.log(`TotalTrue: ${this.totalTrue}`);
        console.log(`TotalFalse: ${this.totalFalse}`);
    }

    // submit button
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("submit button clicked");
    };

    callbackHandlerFunction = ({ selectedOption }) => {
        this.setState({ selectedOption });
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
                    totalFalse={this.totalFalse}
                />
            </div>

            </div>

        </div>

      </div>
    );
  }
}

export default App;
