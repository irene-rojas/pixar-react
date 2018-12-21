import React from "react";

const Results = (props) => {
    return (
        <div className="masterResultsDiv">

            <div>
                Correct: {props.totalTrue}
            </div>

            <div>
                Wrong: {props.totalFalse}
            </div>

        </div>
            )
}

export default Results;