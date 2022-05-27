import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img src={this.props.image} alt="failed" />
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Card;
