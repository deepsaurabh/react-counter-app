import React, { Component } from "react";
import List from "./list";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <List />
      </React.Fragment>
    );
  }
}

export default Counter;
