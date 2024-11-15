import { Component, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js/auto';

Chart.register(...registerables);

@Component({
  selector: 'app-doughnutChart',
  standalone: true,
  templateUrl: `./doughnutChart.component.html`,
  styleUrls: ['./doughnutChart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public chart?: Chart;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const ctx = (document.getElementById('myChart2') as HTMLCanvasElement);
    if (!ctx) return;

    const data = [
      { title: "Tokyo", value: 120, color: "#2C3E50" },
      { title: "San Francisco", value: 80, color: "#FC4349" },
      { title: "New York", value: 70, color: "#6DBCDB" },
      { title: "London", value: 50, color: "#F7E248" },
      { title: "Sydney", value: 40, color: "#D7DADB" },
      { title: "Berlin", value: 20, color: "#FFF" }
    ];
    const values = data.map(d => d.value);
    const colors = data.map(d => d.color);
    const total = values.reduce((acc, val) => acc + val, 0);

    this.chart = new Chart(ctx, {
      type: 'doughnut' as ChartType,
      data: {
        labels: data.map(d => d.title),
        datasets: [
          {

            label: 'City Population',
            data: values,
            backgroundColor: colors,
            hoverOffset: 4,
            borderColor: '#fff',
            borderWidth: 2,
            // cutout: '80%',
          }
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          }
          },

      },
      plugins: [{
        id: 'centerText',
        beforeDraw: (chart) => {
          const { width, height, ctx } = chart;
          ctx.save();
          const xcoor =chart.getDatasetMeta(0).data[0].x;
          const ycoor =chart.getDatasetMeta(0).data[0].y;

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#333';

          const fontSize = (height / 15).toFixed(2);
          ctx.font = `bold ${fontSize}px sans-serif`;
          ctx.fillText(`TOTAL ${total}`, xcoor, ycoor);



          ctx.restore();
        }
      }]
    });
  }
}
