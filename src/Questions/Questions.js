import React from "react";
import QuestionModel from "../QuestionModel";
import Radio from "../Radio";


// make this an ORDERED LIST
const Questions = props => (

    <div className="questionsDiv">

        <ol>
            {props.questions.map(question => (
                <QuestionModel
                    key={question.id}
                    text={question.text}
                />
                
            ))}
            <ol>
                <Radio />
            </ol>
        </ol>

    </div>

)

export default Questions;