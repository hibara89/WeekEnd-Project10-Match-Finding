import React from "react";
import Card from "./components/card/card";
import Counterlikes from "./components/counters/counter-likes";
import CounterDislikes from "./components/counters/counter-dislikes";
import Dislike from "./components/like&dislike/dislike";
import galerry from "./components/Galerry";

import Like from "./components/like&dislike/like";
import "./style.css";

export class AppMatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: galerry,
      index: 0,
      counter_like: 0,
      counter_dislike: 0,
      isFinished: false,
    };
  }

  onclickLike = () => {
    if (this.state.isFinished) return;

    if (this.state.index === this.state.array.length) {
      this.setState({
        counter_like: this.state.counter_like + 1,
        isFinished: true,
      });
      return;
    }
    if (!this.state.isFinished) {
      this.setState({
        counter_like: this.state.counter_like + 1,
        index: this.state.index + 1,
      });
    }
    console.log(this.state.index);
  };

  onclickDislike = () => {
    if (this.state.index === this.state.array.length) {
      this.setState({ isFinished: true });
      return;
    }
    this.setState({
      counter_dislike: this.state.counter_dislike + 1,
      index: this.state.index + 1,
    });
  };

  render() {
    return (
      <div className="app_container">
        <div className="counters_container">
          <div className="dislike-container">
            <CounterDislikes />
            <div style={{ color: "red", fontWeight: "bolder" }}>
              {this.state.counter_dislike}
            </div>
          </div>
          <div className="like-container">
            <Counterlikes />
            <div style={{ color: "green", fontWeight: "bolder" }}>
              {this.state.counter_like}
            </div>
          </div>
        </div>

        <div className="card-container">
          <Card
            image={this.state.array[this.state.index].image}
            name={this.state.array[this.state.index].name}
          />
        </div>
        <div className="buttons-container">
          <Dislike onClickDislike={this.onclickDislike} />
          <Like onClickLike={this.onclickLike} />
        </div>
      </div>
    );
  }
}
