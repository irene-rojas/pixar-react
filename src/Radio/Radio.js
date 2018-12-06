import React, { Component } from 'react';
import answers from "../questions.json";

class Radio extends Component {

  state = {
    selectedOption: " ",
    answers
  };

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };





// do I need to map radio component itself?
// ternery? if option in answerChoices[], add a button

  render() {
    return (
      <div className="radioStyle">


          <div className="radio">

            <form>
              <input 
                type="radio" 
                value="option" 
                onChange={this.handleOptionChange} />
            </form>
            
          </div>

        
      </div>

    );
  }
}

export default Radio;
