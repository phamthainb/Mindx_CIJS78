import React, { Component } from "react";

//
export default class BannerClass extends Component {
  constructor(props) {
    super(props); // constructor of Component
    this.state = { number: 1 };
    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn = (e) => {
    console.log("clicked Banner class");
    this.setState((state, props) => {
      console.log("state::", state);
      return { number: state.number + 1 };
    });
  };

  // sau khi dc mount vao DOM
  componentDidMount() {
    console.log("componentDidMount");
    // get position div, tag,...
  }

  //
  componentDidUpdate(pre, cur) {
    console.log("componentDidUpdate");
    // number > 18 -> nguowi lon
    // logic
    // number > 35 -> trung nien
  }

  //
  // shouldComponentUpdate() {
  //   // ....
  //   // return false;

  // }

  //
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // = return Func
  render() {
    // console.log("this::", this);
    // console.log("render state::", this.state);

    return (
      <section id="welcome-section" className="welcome-section">
        <h1>{this.state.number}</h1>
        <h1>Hey I am mindXer</h1>
        <p>A Full Stack Web Developer</p>
        <button onClick={this.onClickBtn}>Banner Class</button>
      </section>
    );
  }
}
