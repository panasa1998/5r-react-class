import React, { Component } from "react";
//import ButtonComponent from "../Button/button";

class ButtonComponentClass extends Component{
  state = {
    text1: "subscribe",
    text2: "unsubscribe",
    isSubscribe: false,
  };
  subscribeHandler = () => {
    console.log("subscribe");
    this.setState({
      isSubscribe: !this.state.isSubscribe,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.subscribeHandler}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>
      </>
    );
  }
}
export default ButtonComponentClass;
