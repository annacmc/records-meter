import React from "react";
import { Chart, registerables } from "chart.js";
import getFeeds from "./getFeeds.js";

Chart.register(...registerables);

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      feed: getFeeds(),
    };
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
        aspectRatio: 2.3,
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
          title: {
            display: true,
            text: "Your search records",
            align: "start",
            font: {
              size: 24,
            },
          },
          subtitle: {
            display: true,
            text:
              this.state.feed[1],
            align: "start",
            font: {
              size: 14,
            },
          },
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
