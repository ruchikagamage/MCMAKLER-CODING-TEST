import React from "react";
import "./styles.css";
import img from './../../../img/disconnected-chains.svg'

const ErrorMessage = props => {
  return (
    <div className="error-message">
       <img src={img} className="error-message-icon" alt="error"/>
      <h2 className="error-message-text">{props.children}</h2>
    </div>
  );
};
export { ErrorMessage };
