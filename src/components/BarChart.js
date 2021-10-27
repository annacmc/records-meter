import React from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      labels: this.props.data.map((d) => d.data.label),
      colors: this.props.data.map((d) => d.data.backgroundColor),
      moredata: this.props.data.map((d) => d.data),
    };
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "bar",
      options: {
        borderRadius: Number.MAX_VALUE, 
        borderSkipped: 'middle',
        indexAxis: "y",
        legend: { display: false },
        maintainAspectRatio: false,
        aspectRatio:  4,

        scales: {
          x: {
            stacked: true,
            // max: 1500,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        },

        plugins: {

          legend: {
            display: true,
            position: "bottom",
            align: "start",
  
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              boxWidth: 7,
              borderRadius:100,
            }
            
          },

          title: {
            display: false,
          },
        },
      },

      data: {

        labels: ["Record Meter"],
        datasets: this.props.data.map((d) => d.data),
        
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
