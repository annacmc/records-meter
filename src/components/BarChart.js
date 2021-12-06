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
        borderRadius: 100,
        borderSkipped: "middle",
        indexAxis: "y",
        maintainAspectRatio: false,
        aspectRatio: 1.3,
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
            display: false,
          },
          subtitle: {
            display: false,
          },
          legend: {
            display: false,

            labels: {
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

    this.setState({ legendItems: this.myChart.legend.legendItems });
  }

  render() {
    return (
      <div className="chartContainer">
        <canvas ref={this.canvasRef} />
        <ul className="chartLegend">
          {this.state?.legendItems.length &&
            this.state.legendItems.map((item) => {
              return (
                <li key={item.text}>
                  <div
                    className="chartLegendBox"
                    style={{
                      backgroundColor: item.fillStyle,
                    }}
                  />
                  {item.text} ({this.props.data[item.datasetIndex].data.data})
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
