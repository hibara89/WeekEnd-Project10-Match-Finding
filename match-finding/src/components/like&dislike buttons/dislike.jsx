import React from "react";

class Dislike extends React.Component {
  render() {
    return (
      <div>
        <button className="dislike_button" onClick={this.props.onClickDislike}>
          X
        </button>
      </div>
    );
  }
}

export default Dislike;
