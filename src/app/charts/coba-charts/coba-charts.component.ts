import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { apiservice } from "../../callAPI/api.service";
import { columns } from "../../classes/columns";

@Component({
    selector: 'app-coba',
    templateUrl: './coba-charts.component.html',
    styleUrls: ['./coba-charts.component.scss'],
    providers: [NgbCarouselConfig] //add NgbCarouselConfig to the component providers
})

export class CobachartsComponent{
    constructor(private _apiservice : apiservice){}     

    lstcolumns : columns[];
    ngOnInit(){

        //post from API
        //columns dibawah adalah = columns.ts
        var leaddata = new columns();
        //leaddata.CmoName='reynard';

        // this._apiservice.getcolumns(leaddata)
        // .subscribe(
        //     data=>{
        //         console.log("Test");
        //         this.lstcolumns=data;
        //         console.log(this.lstcolumns);
        //     }
        // )
    }
}

// export class NGXTistChartsComponent {

//     ngOnInit() {    
//         //  Code formatting script
//         $.getScript('./assets/js/prism.min.js');
//     }

//     constructor(config: NgbCarouselConfig) {
//         config.interval = 10000;
//         config.wrap = true;
//         config.keyboard = false;
//         config.pauseOnHover = true;
//         config.showNavigationIndicators = false;
//     }

//     onSelect(event) {
//        //your code here
       
//     }
// }