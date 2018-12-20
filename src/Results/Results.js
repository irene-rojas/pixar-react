import React, { Component } from "react";
// import Questions from "../Questions";

// Could this be a stateless component? It's just showing the results, not tabulating them, right?

class Results extends Component {

    state = {
        totalTrue: null,
        totalFalse: null
    };

    // count number of true answers
    answersTrue = (props) => {
    };

    render() {
        return (

            <div className="masterResultsDiv">

                <div>
                    Correct: {this.state.totalTrue}
                </div>

                <div>
                    Wrong: {this.state.totalFalse}
                </div>

            </div>

        )
    }
}

export default Results;