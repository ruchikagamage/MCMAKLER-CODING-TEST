import React, { Component } from 'react';


class Col extends Component {
    
    render() {

        let rowType = 'col-' + this.props.colNumber
     
        return (
            <div className={rowType}>
            {this.props.children}
            </div>
        );
    }
}

export {Col};