import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div style={{
                transform: "all 0.5s",
                position: "absolute",
                width: "32vw",
                minWidth: "400px",
                height: "25vh",
                minHeight: "220px",
                right: "10vh",
                bottom: "10vh"
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default Card;
