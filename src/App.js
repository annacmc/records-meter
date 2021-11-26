import React from "react";
import "./App.css";
import getFeeds from "./lib/getFeeds.js";
import { BarChart } from "./components/BarChart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: getFeeds(),
    };
  }

  render() {
    return (
      <div>
        <BarChart data={this.state.feed[0]} />
      </div>
    );
  }
}
export default App;
