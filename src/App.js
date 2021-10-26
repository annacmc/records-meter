import React from "react";
import "./App.css";
import getFeeds from "./components/getFeeds.js";
import { BarChart } from "./components/BarChart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getFeeds(),
    };
  }

  render() {
    return (
      <div>
        <BarChart data={this.state.data} />
      </div>
    );
  }
}
export default App;
