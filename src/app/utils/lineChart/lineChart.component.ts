import { Component, OnInit } from '@angular/core';
import { CategoryScale, Chart, ChartType, registerables } from 'chart.js/auto';


Chart.register(...registerables);

@Component({
  selector: 'app-lineChart',
  standalone: true,
  templateUrl: './lineChart.component.html',
  styleUrls: ['./lineChart.component.css']
})
export class LineChartComponent implements OnInit {

  public chart?: Chart;

  private colors: string[] = [
    'rgba(255, 119, 56, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)'
  ];

  ngOnInit(): void {
    this.createChart();
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private createChart(): void {
    const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');
    if (ctx === null) return;

    this.chart = new Chart(ctx, {
      type: 'line' as ChartType,
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(255, 119, 56, 1)',
            borderWidth: 3,
            backgroundColor: (ctx: any) => {
              const color = this.getRandomColor();
              const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
              gradient.addColorStop(0, 'rgba(255, 119, 56, 0.3)');
              gradient.addColorStop(1, 'rgba(255, 119, 56, 0)');
              return gradient;
            },
            fill: 'start'
          },
          {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'rgba(46, 119, 238, 1)',
            borderWidth: 3,
            backgroundColor: (ctx: any) => {
              const color = this.getRandomColor();
              const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, ctx.chart.height);
              gradient.addColorStop(0, 'rgba(46, 119, 238, 0.3)');
              gradient.addColorStop(1, 'rgba(46, 119, 238, 0)');
              return gradient;
            },
            fill: 'start'
          }
        ]
      }
    });
  }

}
