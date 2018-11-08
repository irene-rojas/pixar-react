import React, {Component} from "react";
import Radio from "../Radio";
import questions from "../questions.json";

class QuestionModel extends Component {

    state = {
        questions
    };

    render() {
        return (

            <div className="questionPage">
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



// const QuestionModel = props => (
//     <div className="individualQuestion">
//         <div className="text">{props.text}</div>
//         <Radio />
//     </div>
// )



export default QuestionModel;