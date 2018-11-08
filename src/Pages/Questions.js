import React, {Component} from "react";
import questions from "../questions.json";

class Questions extends Component {

  state = {
    questions
  };

  render() {
    return (

      <div className="questionText">
        {this.state.questions.map(question => (
          <p
          id={question.id}
          key={question.id}
          text={question.text}
          />
        ))}
      </div>
  

    )
  }
}

export default Questions;