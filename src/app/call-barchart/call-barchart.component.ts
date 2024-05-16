import { Component, OnInit } from '@angular/core';
import { barChartSingle, barChartmulti } from '../shared/data/ngxChart';
import * as chartsData from '../shared/configs/ngx-charts.config';
import { BarChartModel } from '../shared/data/barChartModel';
import { HttpClient } from '@angular/common/http';
//import { Object } from 'core-js';

@Component({
  selector: 'app-call-barchart',
  templateUrl: './call-barchart.component.html',
  styleUrls: ['./call-barchart.component.scss']
})

export class CallBarchartComponent implements OnInit {
  listBarChartModelObj: BarChartModel[] = new Array<BarChartModel>();

  barChartmulti = barChartmulti;
  barChartView: any[] = chartsData.barChartView;
  barChartShowYAxis = chartsData.barChartShowYAxis;
  barChartShowXAxis = chartsData.barChartShowXAxis;
  barChartGradient = chartsData.barChartGradient;
  barChartShowLegend = chartsData.barChartShowLegend;
  barChartShowXAxisLabel = chartsData.barChartShowXAxisLabel;
  barChartXAxisLabel = chartsData.barChartXAxisLabel;
  barChartShowYAxisLabel = chartsData.barChartShowYAxisLabel;
  barChartYAxisLabel = chartsData.barChartYAxisLabel;
  barChartColorScheme = chartsData.barChartColorScheme;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get("./assets/json/example.json").subscribe(
      (response: any[]) => {
        response.forEach(item => {
          var barCharObj = new BarChartModel();
          barCharObj.name = item["Year"]
          barCharObj.series.push({"name":"Interest Amount","value":item["Interest Amount"]});
          barCharObj.series.push({"name":"Inventory Amount","value":item["Inventory Amount"]});
          this.listBarChartModelObj.push(barCharObj);
        });
        console.log(this.listBarChartModelObj);
        this.barChartmulti = this.listBarChartModelObj;
      },
      error => {
        console.log(error);
      }
    );
  }
  onSelect(event) {
    //your code here
  }
}