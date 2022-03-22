import React from "react";
import './Field.css';

const Field = (props) => {

    return (
        <button
            className="field"
            onClick={props.changeSymbolHandler}
            disabled={props.disabled}
        >
            {props.value}
        </button>
    );
}

export default Field;