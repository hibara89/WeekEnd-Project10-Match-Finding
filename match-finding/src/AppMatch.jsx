import React from "react";
import Card from "./components/card/card";
import Counterlikes from "./components/counters/counter-likes";
import CounterDislikes from "./components/counters/counter-dislikes";
import Dislike from "./components/like&dislike buttons/dislike";
import galerry from "./data/Galerry";

import Like from "./components/like&dislike buttons/like";
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
    this.setState({
      counter_like: this.state.counter_like + 1,
      index: this.state.index + 1,
    });
  };

  onclickDislike = () => {
    this.setState({
      counter_dislike: this.state.counter_dislike + 1,
      index: this.state.index + 1,
    });
  };

  render() {
    const displayedImage =
      this.state.array[this.state.counter_dislike + this.state.counter_like];

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
        {displayedImage ? (
          <div className="card-container">
            <Card
              image={this.state.array[this.state.index].image}
              name={this.state.array[this.state.index].name}
            />
          </div>
        ) : this.state.counter_like > this.state.counter_dislike ? (
          <>
            <h2 className="final-message">
              Seems like you love colorful birds
            </h2>
            <img
              src="https://thumbs.dreamstime.com/z/funny-colorful-bird-kids-cartoon-amazing-brightly-colored-small-birdie-cute-child-greeting-card-design-vector-illustration-70726541.jpg"
              style={{ width: "300px", height: "300px" }}
            />
          </>
        ) : (
          <h2 className="final-message">I am really shocked!!! </h2>
        )}

        {this.state.counter_like + this.state.counter_dislike < 10 && (
          <div className="buttons-container">
            <Dislike onClickDislike={this.onclickDislike} />
            <Like onClickLike={this.onclickLike} />
          </div>
        )}
      </div>
    );
  }
}
