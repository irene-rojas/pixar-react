import React from "react";

const Results = (props) => {
    let totalTrue = props.totalTrue;
    let totalFalse = props.totalFalse;
    return (
        <div className="masterResultsDiv">

            <div>
                Correct: {totalTrue}
            </div>

            <div>
                Wrong: {totalFalse}
            </div>

        </div>
            )
}

export default Results;