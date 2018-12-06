import React, { Component } from 'react';

class Radio extends Component {

  state = {
    selectedOption: " ",
    answers: [
        {
            id: "1-1",
            label: "2001: A Space Odyssey",
            value: false
        },
        {
            id: "1-2",
            label: "The Shining",
            value: true
        },
        {
            id: "1-3",
            label: "One Flew Over the Cuckoo's Nest",
            value: false
        },
        {
            id: "1-4",
            label: "The Godfather",
            value: false
        }

        

            
    ]
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


          <div className="radio">

            <form>
                {this.state.answers.map(answer => (
              <input 
                key={answer.id}
                type="radio" 
                value={answer.value} 
                onChange={this.handleOptionChange} />
                ))}
            </form>
            
          </div>

        

    );
  }
}

export default Radio;
