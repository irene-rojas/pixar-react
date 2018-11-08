import React from "react";
import Radio from "../Radio";
import "./QuestionModel.css";


const QuestionModel = props => (

    <div className="individualQuestion">
        <div className="text">{props.text}</div>
        <div className="answerOptions">
            <Radio answers={props.label}/>
        </div>
    </div>
    
)



export default QuestionModel;