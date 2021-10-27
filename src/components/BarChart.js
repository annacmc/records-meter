import React from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "bar",
      options: {
        borderRadius: 150,
        borderSkipped: "middle",
        indexAxis: "y",
        legend: { display: false },
        maintainAspectRatio: false,
        aspectRatio: 4,
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
            display: true,
            position: "bottom",
            align: "start",

            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              boxWidth: 7,
              borderRadius: 100,
              filter: function (legendItem, data) {
                return !legendItem.text.includes("Remaining");
              },
            },
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
