import React from "react";
import QuestionModel from "../QuestionModel";


const Questions = props => (

    <div className="questionsDiv">

        <ol>
            {props.questions.map(question => (
                <QuestionModel
                    key={question.id}
                    text={question.text}
                />      
            ))}
        </ol>

    </div>

)

export default Questions;