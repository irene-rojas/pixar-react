import React, { Component } from 'react';
import answers from "../answers.json";

class Radio extends Component {

  state = {
    selectedOption: " ",
    answers
  };

  

  handleOptionChange = (event) => {
    console.log("clicked");
  };

  // ternery? if option in answerChoices[], add a button

  render() {
    return (


          <div className="radio">

            <form>
                {this.state.answers.map(answer => (
              <input 
                key={answer.id}
                type="radio" 
                value={answer.value} 
                checked={answer.selected}
                onChange={this.handleOptionChange} />
                ))}
            </form>
            
          </div>

        

    );
  }
}

export default Radio;
