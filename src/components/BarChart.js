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
        indexAxis: "y",
        legend: { display: false },
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
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
            display: false,
          },
          title: {
            display: false,
          },
        },
      },
      data: {
        labels: ["Anna's Chart"],
        datasets: this.props.data.map((d) => d.data),
      },
    });
  }

  render() {
    return <canvas ref={this.canvasRef} />;
  }
}
