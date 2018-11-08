import React, { Component } from 'react';

class Radio extends Component {

    state = {
        selectedOption: "",
    };

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value
          });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`You have chosen ${this.state.selectedOption}`);
    }

  render() {
    return (
  <form onSubmit={this.handleFormSubmit}>

    <div className="radio">
      <label>
      <input type="radio" name="answer1" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange}/>        
      Option 1
      </label>
    </div>

    <div className="radio">
      <label>
      <input type="radio" name="answer1" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>        
      Option 2
      </label>
    </div>

    <div className="radio">
      <label>
      <input type="radio" name="answer1" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>        
      Option 3
      </label>
    </div>

        <div className="radio">
      <label>
      <input type="radio" name="answer1" value="option4" checked={this.state.selectedOption === 'option4'} onChange={this.handleOptionChange}/>        
      Option 4
      </label>
    </div>
    
    <button className="btn btn-default" type="submit">Save</button>
  </form>
    );
  }
}

export default Radio;
