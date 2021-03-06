import React, { Component } from "react";
import "./styles.css";
import error from "./../../../img/error.svg";
import warning from "./../../../img/warning.svg";
import noImage from "./../../../img/error-404.svg";
import info from "./../../../img/information.svg";
import success from "./../../../img/success.svg";

import classNames from "classnames";

class StatusMessage extends Component {
  render() {
    let img;
    if (this.props.status === "ERROR") {
      img = error;
    } else if (this.props.status === "WARNING") {
      img = warning;
    } else if (this.props.status === "INFO") {
      img = info;
    } else if (this.props.status === "SUCCESS") {
      img = success;
    } else {
      img = noImage;
    }

    let messageText = classNames("font-medium", "margin-top-5", {
      "status-message-error": this.props.status === "ERROR",
      "status-message-warning": this.props.status === "WARNING",
      "status-message-info": this.props.status === "INFO",
      "status-message-success": this.props.status === "SUCCESS"
    });
    return (
      <div className="status-message">
        <img src={img} className="status-message-icon" alt="message icon" />
        <h2 className={messageText}>{this.props.children}</h2>
      </div>
    );
  }
}
StatusMessage.defaultProps = {
  status: null
};

export { StatusMessage };
