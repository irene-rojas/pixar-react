import React from "react";
import Radio from "../Radio";
import Answers from "../Answers";
import "./QuestionModel.css";


const QuestionModel = (props) => (

    <div className="individualQuestion">
        <div className="text">{props.text}</div>
        <div className="answerChoices">
            <Answers />
        </div>
    </div>
    
)



export default QuestionModel;