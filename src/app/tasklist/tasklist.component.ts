import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { apiservice } from '../callAPI/api.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']

})

export class TasklistComponent implements OnInit {

  data: any[] = [];
  constructor(private apiService: apiservice, private router: Router) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.data = data;
    });
  }

  onEditClick(item: any): void {
    // Navigate to another page with the item's ID
    // this.router.navigate(['/pdf-view-detail', item.id]);
    this.router.navigate(['/pdf-view-detail']);
  }
}
