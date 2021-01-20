import React from "react";

//These colors should change
function handleOver(e) {
    e.target.style.background = "#6C757D";
}
function handleLeave(e) {
    e.target.style.background = "#343A40";
}

function FloorHeading({ handleSort }) {
    return (
        <thead>
            <tr className="color">
                <th scope="col"
                    data-value="itemNumber"
                    onClick={handleSort}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}>
                    #</th>
                <th scope="col"
                    data-value="itemName"
                    onClick={handleSort}
                    onMouseOver={handleOver}
                    onMouseLeave={handleLeave}>
                    Item
                </th>
            </tr>
        </thead>
    )
}

export default FloorHeading;