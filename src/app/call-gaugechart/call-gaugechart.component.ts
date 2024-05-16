import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";

declare var require: any;
const data: any = require('../shared/data/chartist.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-call-gaugechart',
  templateUrl: './call-gaugechart.component.html',
  styleUrls: ['./call-gaugechart.component.scss']
})

export class CallGaugechartComponent {
  // Gauge using donut Chart 1 Starts
  donutChart1: Chart = {
    type: 'Pie',
    data: data['donutTarget'],
    options: {
        donut: true,
        donutWidth: 10,
        startAngle: 225,
        total: 133,
        showLabel: true,
        
    },       
};
donutChart2: Chart = {
    type: 'Pie',
    data: data['donutMonthly'],
    options: {
        donut: true,
        donutWidth: 10,
        startAngle: 225,
        total: 133,
        showLabel: true,
    },       
};
donutChart3: Chart = {
    type: 'Pie',
    data: data['donutBranch'],
    options: {
        donut: true,
        donutWidth: 10,
        startAngle: 225,
        total: 133,
        showLabel: true,
    },       
};
donutChart4: Chart = {
    type: 'Pie',
    data: data['donutNational'],
    options: {
        donut: true,
        donutWidth: 10,
        startAngle: 225,
        total: 133,
        showLabel: true,
    },       
};
// Gauge using donut Chart 1 Ends

  constructor() { }

  onSelect(event) {
    //your code here
 }

}
