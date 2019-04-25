import React, { Component } from "react";
import List from "./list";

class Counter extends Component {
  /*constructor() {
    super();
    console.log("constructor", this);
    this.handkeIncrement = this.handkeIncrement.bind(this);
  }*/
  componentDidUpdate(previousProps, prevState) {
    console.log("previousProps", previousProps);
    console.log("prevState", prevState);
    // compare old prop to new prop or state
    if (previousProps.counter.value !== this.props.counter.value) {
      // Make ajax call to get new data from server
    }
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btnsm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
