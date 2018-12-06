import React from "react";
import QuestionModel from "../QuestionModel";
import Radio from "../Radio";


// make this an ORDERED LIST
const Questions = props => (

    <div className="questionsDiv">

        {props.questions.length ? (
            <div>
                {props.questions.map(question => (
                    <QuestionModel
                        key={question.id}
                        id={question.id}
                        text={question.text}
                    />
            ))}
            </div>
        ) : (
            <h2 className="text-center">No questions</h2>
        )}

    </div>

)



export default Questions;