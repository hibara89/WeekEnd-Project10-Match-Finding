import React from "react";
import { GrLike } from "react-icons/gr";
import "./counters-style.css";

class Counterlikes extends React.Component {
  render() {
    return (
      <div className="counter_like">
        <GrLike />
      </div>
    );
  }
}

export default Counterlikes;
