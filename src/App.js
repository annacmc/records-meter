import React from 'react';
import './App.css';
import getFeeds from './components/getFeeds.js';
import { BarChart } from './components/BarChart';
  
class App extends React.Component {
  
  constructor(props){
      super(props)
      this.state = {
        data: getFeeds(),
      }
    }

  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width:'50%'}}>
<BarChart
        data={this.state.data}
          />
          
    </div>
    );
    }
}
export default App;