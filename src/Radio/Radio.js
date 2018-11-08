import React, { Component } from 'react';
import questions from "../questions.json";

class Radio extends Component {

  state = {
    selectedOption: " ",
    questions
  };

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };



  render() {
    return (
      <div className="radioStyle">

        <form>

          <div className="radio">
            <label>
              <input 
                type="radio" 
                value="option1" 
                checked={this.state.selectedOption === 'option1'} 
                onChange={this.handleOptionChange} />
                {/* this is where I want the text from the answerChoices in questions.json */}
            </label>
          </div>

          <div className="radio">
            <label>
              <input 
              type="radio" 
              value="option2" 
              checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange} />
              Option 2
            </label>
          </div>

          <div className="radio">
            <label>
              <input 
              type="radio" 
              value="option3" 
              checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange} />
              Option 3
            </label>
          </div>

          <div className="radio">
            <label>
              <input 
              type="radio" 
              value="option4" 
              checked={this.state.selectedOption === 'option4'} onChange={this.handleOptionChange} />
              Option 4
            </label>
          </div>

        </form>
        
      </div>

    );
  }
}

export default Radio;
