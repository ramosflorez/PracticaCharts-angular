import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineChartComponent } from './utils/lineChart/lineChart.component';
import { DoughnutChartComponent } from './utils/doughnutChart/doughnutChart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ LineChartComponent, DoughnutChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'probandoCharts';
}
