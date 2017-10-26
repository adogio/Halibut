import React, { Component } from 'react';

class Corner extends Component {
    render() {
        return (
            <div style={{
                transform: "all 0.5s",
                position: "absolute",
                left: "1vw",
                top: "1vh"
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default Corner;
