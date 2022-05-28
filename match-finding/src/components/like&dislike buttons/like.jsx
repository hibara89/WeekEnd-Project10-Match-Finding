import React from "react";

class Like extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className="like_button" onClick={this.props.onClickLike}>
          V
        </button>
      </div>
    );
  }
}

export default Like;
