import React, { Component } from "react";
import AnimateHeight from "react-animate-height";

//sourced from https://codesandbox.io/s/76gli?file=/src/index.js:76-102

export default class Auto extends Component {
  state = {
    contentToggle: false,
    height: "auto"
  };

  componentDidMount() {
    this.setFixedHeight();
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;

    if (prevProps.children !== children) {
      this.setState({
        height: "auto"
      });
    }
  }

  setFixedHeight = () => {
    this.setState({
      height: document.querySelector(".blog").clientHeight
    });
  };

  render() {
    const { height } = this.state;
    const { children } = this.props;
    return (
      <AnimateHeight
        height={height}
        onAnimationEnd={this.setFixedHeight}
        duration={800}
        className="blog"
      >
        {children}
      </AnimateHeight>
    );
  }
}
