import React from "react";
import "./App.css";
import getRecordInfo from "./lib/getRecordInfo.js";
import getData from "./lib/getData.js";
import { BarChart } from "./components/BarChart.jsx";
import { RecordCount } from "./components/RecordCount.jsx";
import { NoticeBox } from "./components/NoticeBox.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recordInfo: getRecordInfo(getData().data, getData().planInfo),
    };
    console.log(this.state.recordInfo.data);
  }

  render() {
    return (
      <main>
        <RecordCount
          recordCount={this.state.recordInfo.recordCount}
          planRecordLimit={this.state.recordInfo.tier}
        />
        <BarChart
          data={this.state.recordInfo.data}
          isValid={this.state.recordInfo.isValid}
        />

        <NoticeBox
          recordCount={this.state.recordInfo.recordCount}
          planRecordLimit={this.state.recordInfo.tier}
          hasBeenIndexed={this.state.recordInfo.hasBeenIndexed}
          hasValidData={this.state.recordInfo.hasValidData}
          hasItems={this.state.recordInfo.hasItems}
        ></NoticeBox>
      </main>
    );
  }
}
export default App;
