import React from "react";
import { GrDislike } from "react-icons/gr";

class CounterDislikes extends React.Component {
  render() {
    return (
      <div className="counter_dislike">
        <GrDislike />
      </div>
    );
  }
}

export default CounterDislikes;
