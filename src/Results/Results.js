import React, { Component } from "react";
import Questions from "../Questions";

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
                    correct
                </div>

                <div>
                    wrong
                </div>

            </div>

        )
    }




}

export default Results;