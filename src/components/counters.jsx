import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidUpdate(previousProps, prevState) {
    console.log("previousProps", previousProps);
    console.log("prevState", prevState);
    // compare old prop to new prop or state
  }
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    console.log("Counters - Rendered");

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          {" "}
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
