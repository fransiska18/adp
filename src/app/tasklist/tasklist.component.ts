import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiservice } from '../callAPI/api.service';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})

export class TasklistComponent implements OnInit {

  data: any[] = [];
  constructor(private apiService: apiservice, private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getJson("tasklist.json").subscribe(response => {
      this.data = response;
    });
  }

  onEditClick(item: any): void {
    // Navigate to another page with the item's ID
    this.router.navigate(['/pdf-view-detail', item.id]);
    // this.router.navigate(['/pdf-view-detail']);
  }
}
