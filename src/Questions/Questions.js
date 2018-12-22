import React, { Component } from "react";
import Select from "react-select";
import "./Questions.css";

const answerChoices = [
    {
        id: 1,
        text: "1. The background image is the carpet from Sid's house in Toy Story. What movie inspired it?",
        answers: [
            {
                label: "2001: A Space Odyssey",
                value: false
            },
            {
                label: "The Shining",
                value: true
            },
            {
                label: "One Flew Over the Cuckoo's Nest",
                value: false
            },
            {
                label: "The Godfather",
                value: false
            }
            ]
    },
    {
        id: 2,
        text: "2. What is the name of the studio’s mascot?",
        answers: [
            {
                label: "Luxo Ball",
                value: false
            },
            { 
                label: "Luxo",
                value: false
            },
            {
                label: "Luxo, Jr.",
                value: true
            },
            {
                label: "Tinny",
                value: false
            }
            ]
    },
    {
        id: 3,
        text: "3. What was the first Pixar movie shown in 3D?",
        answers: [
            {
                label: "Up",
                value: true
            },
            { 
                label: "A Bug's Life",
                value: false
            },
            {
                label: "Toy Story 2",
                value: false
            },
            {
                label: "Tinny",
                value: false
            }
            ]
    },
    {
        id: 4,
        text: "4. What was the first Pixar movie to receive a PG rating?",
        answers: [
            {
                label: "Brave",
                value: false
            },
            { 
                label: "Inside Out",
                value: false
            },
            {
                label: "Up",
                value: false
            },
            {
                label: "The Incredibles",
                value: true
            }
            ]
    },
    {
        id: 5,
        text: "5. Which actor turned down the role of Buzz Lightyear, but later voiced another Pixar character?",
        answers: [
            {
                label: "Albert Brooks",
                value: false
            },
            { 
                label: "Billy Crystal",
                value: true
            },
            {
                label: "John Ratzenberger",
                value: false
            },
            {
                label: "John Goodman",
                value: false
            }
            ]
    },
    {
        id: 6,
        text: "6. When did Disney acquire Pixar?",
        answers: [
            {
                label: "2004",
                value: false
            },
            { 
                label: "2005",
                value: false
            },
            {
                label: "2006",
                value: true
            },
            {
                label: "2007",
                value: false
            }
            ]
    },
    {
        id: 7,
        text: "7. What’s the final word of “Monsters, Inc”?",
        answers: [
            {
                label: "Boo",
                value: false
            },
            { 
                label: "Kitty",
                value: true
            }
            ]
    },
    {
        id: 8,
        text: "8. Who was the original voice of Marlin from “Finding Nemo”?",
        answers: [
            {
                label: "Albert Brooks",
                value: false
            },
            { 
                label: "Denis Leary",
                value: false
            },
            {
                label: "Brad Garrett",
                value: false
            },
            {
                label: "William H. Macy",
                value: true
            }
            ]
    }
];


class Questions extends Component {

    state = {
        answerChoices,
        selectedOption: null,
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);

        const answerValue = selectedOption.value;
        if (answerValue === true) {
            // console.log(answerValue);
            this.setState({totalTrue: this.totalTrue + 1}, () => {
                console.log(`New TotalTrue: ${this.totalTrue}`);
            });
        };
        if (answerValue === false) {
            // console.log(answerValue);
            this.setState({totalFalse: this.totalFalse + 1}, () => {
                console.log(`New TotalFalse: ${this.totalFalse}`);
            });
        };
        this.props.handleClickInParent({selectedOption});

      }



    render() {
        // const { selectedOption } = this.state;

        return (

            <div className="questionsDiv">

                <ol>
                    {this.state.answerChoices.map(question => {
                    return (

                        <div className="individualQuestions" key={question.id}>

                            {question.text}
                            
                            <Select
                                value={this.selectedOption}
                                onChange={this.handleChange}
                                options={question.answers}
                            />

                        </div>

                        )  
                    })}
                </ol>


            </div>

        )
    }

}

export default Questions;