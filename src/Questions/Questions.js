import React, { Component } from "react";
import QuestionModel from "../QuestionModel";

class Questions extends Component {

    state = {
        questions: [
        {
            id: 1,
            text: "1. The background image is the carpet from Sid's house in Toy Story. What movie inspired it?"
        },
        {
            id: 2,
            text: "2. What is the name of the studio’s mascot?"
        },
        {
            id: 3,
            text: "3. What was the first Pixar movie shown in 3D?"
        },
        {
            id: 4,
            text: "4. What was the first Pixar movie to receive a PG rating?"
        },
        {
            id: 5,
            text: "5. Which actor turned down the role of Buzz Lightyear, but later voiced another Pixar character?"
        },
        {
            id: 6,
            text: "6. When did Disney acquire Pixar?"
        },
        {
            id: 7,
            text: "7. What’s the final word of “Monsters, Inc”?"
        },
        {
            id: 8,
            text: "8. Who was the original voice of Marlin from “Finding Nemo”?"
        }
    ]
    }

    render() {
        return (
    <div className="questionsDiv">

        <ol>
            {this.state.questions.map(question => {
             return (
                <QuestionModel
                    key={question.id}
                    text={question.text}
                />  
                )    
            })}
        </ol>

        </div>

        )
    }

}



export default Questions;