import React, { Component } from 'react';


const answerChoices = {
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
    answers: [
        {
            label: "Boo",
            value: false
        },
        { 
            label: "Kitty",
            value: true
        }
        ],
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
};

{console.log("top" + answerChoices)}

class Radio extends Component {

    state = {
        selectedOption: null,
      }

  handleOptionChange = (event) => {
    event.preventDefault();
    console.log("clicked");
    // checked={true}
  };

  render() {
    return (
          <div>

          {/* <div className="radio"> */}

            {/* <form> */}
                {/* {this.state.answerChoices.answers.map(answerOptions => {
                        return (
                        <input 
                            type="radio" 
                            key={answerOptions.id}
                            value={answerOptions.value} 
                            defaultChecked={false}
                            onClick={this.handleOptionChange} 
                        />
                        )
                })} */}

                    {/* {this.answerChoices.map((item, index) => (
                    <div key={index}>
                        {item.answers.map((answers, i) => (
                        <div key={i}>
                            <input 
                                type="radio"
                                key={answers.id}
                                values={answers.value} 
                                defaultChecked={false}
                                onClick={this.handleOptionChange}
                            />
                        </div>
                        ))}
                    </div>
                    ))} */}
            {/* </form> */}
            {console.log(this.state.answerChoices)}

          </div>

    );
  }
}

export default Radio;



               