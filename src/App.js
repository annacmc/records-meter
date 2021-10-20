import React from 'react';
import './App.css';
import getFeeds from './components/getFeeds.js';
import { BarChart } from './components/BarChart';
  
class App extends React.Component {
  
  constructor(props){
      super(props)
      this.state = {
        response: [],
        data: getFeeds()
      }
    }

  async componentDidMount() {
    const response = await fetch( 'https://public-api.wordpress.com/wpcom/v2/read/interests' );
    const json = await response.json();
    this.setState( { response: json } );
    console.log( json );
    console.log ( getFeeds() );
    window.setInterval(() => {
      this.setState({
        data: getFeeds()
      })
    }, 5000)

  }
  
  render() {
    return (
          <BarChart
            data={this.state.data[0].data}
            title={this.state.data[0].title}
            color="#B08EA2"
          />
        
    );
    }
}
  
export default App;