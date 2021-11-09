import React from "react";
import "./App.css";
import getFeeds from "./components/getFeeds.js";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          padding: "90px 20%",
        }}
      >
        <BarChart data={this.state.feed[0]} />
      </div>
    );
  }
}
export default App;
