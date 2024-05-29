import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pdf-view-detail',
  templateUrl: './pdf-view-detail.component.html',
  styleUrls: ['./pdf-view-detail.component.scss']
})
export class PdfViewDetailComponent implements AfterViewInit, OnInit {
  item_id:any;
  data: any;
  item:any;
  wvInstance?: WebViewerInstance;
  @ViewChild('viewer') viewer!: ElementRef;
  @Output() coreControlsEvent: EventEmitter<string> = new EventEmitter();
  private documentLoaded$: Subject<void>;
  private dpi = 200;
  isDataLoaded = false;
  hasClickedInput = false;

  source: LocalDataSource;
  settings = {
    columns: {
      date: {
        title: 'Date',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.date_confidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      description: {
        title: 'Description',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.description_confidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      amount: {
        title: 'Amount',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.amount_confidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      ending_balance: {
        title: 'Ending Balance',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.ending_balance_confidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      type: { title: 'Type' }
    },
    actions: {
      add: true,
      edit: true,
      delete: true
    },
    delete:{
      confirmDelete:true,
      deleteButtonContent:"<i class='ft-x danger font-medium-1 mr-2'></i>"
    },
    edit:{
      confirmSave:false,
      editButtonContent:"<i class='ft-edit-2 info font-medium-1 mr-2'></i>"
    },
    add:{
      confirmCreate:true
    },
    attr:{
      class:"table table-responsive"
    },
    pager:{
      perPage:6
    }
  };

  constructor(private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) {
    this.documentLoaded$ = new Subject<void>();
    this.source = new LocalDataSource([]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item_id = +params.get('id');
      this.loadData();
    });
  }

  convertGoogleVisionToPDFTron(googleX: number) {
    const scaleFactor = 72 / this.dpi;
    const coor = googleX * scaleFactor;
    return coor;
  }
  
  loadData() {
    console.log("item_id: ",this.item_id)
    this.dataService.getJson("tasklist.json").subscribe(response => {
      this.item = response.find(response=>response.id===this.item_id)
      if(this.item.status==='Done'){
        this.settings.actions.add=false
        this.settings.actions.delete=false
        this.settings.actions.edit=false
      }
      this.dataService.getJson(this.item.file_json).subscribe(response1 => {
        this.data = response1;
        console.log('Data loaded:', this.data); // Check what data looks like when loaded
        this.data.read.TransactionHistory.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime(); // Ascending order
        });
        this.isDataLoaded = true;
        this.source.load(this.data.read.TransactionHistory);
        this.cdr.detectChanges(); // Manually trigger change detection
        this.initializeWebViewer();
      }, error1 => {
        console.error('There was an error loading the data!', error1);
      });
    }, error => {
      console.error('There was an error loading the data!', error);
    });
  }

  highlightField(coordinates: any, page: any): void {
    const { documentViewer, Annotations, annotationManager } = this.wvInstance!.Core;

    // Clear existing annotations if necessary
    console.log(coordinates)
    annotationManager.deleteAnnotations(annotationManager.getAnnotationsList());

    const rectangleAnnot = new Annotations.RectangleAnnotation({
      PageNumber: page,  // Adjust based on actual page number
      X: this.convertGoogleVisionToPDFTron(coordinates['x'])- this.dpi / 30,
      Y: this.convertGoogleVisionToPDFTron(coordinates['y'])- this.dpi / 30,
      Width: (this.convertGoogleVisionToPDFTron(coordinates['w']))+ this.dpi / 15,
      Height: (this.convertGoogleVisionToPDFTron(coordinates['h']))+ this.dpi / 15,
      Author: annotationManager.getCurrentUser(),
      FillColor: new Annotations.Color(0, 155, 0, 0.2),
      StrokeColor: new Annotations.Color(255, 0, 0),
      StrokeThickness: 2
    });
    annotationManager.addAnnotation(rectangleAnnot);
    annotationManager.redrawAnnotation(rectangleAnnot);
    documentViewer.setCurrentPage(page, true); // Adjust scrolling if necessary

    // Set flag to indicate that an input was clicked
    this.hasClickedInput = true;
  }

  clearAnnotations(): void {
    const { annotationManager } = this.wvInstance!.Core;
    annotationManager.deleteAnnotations(annotationManager.getAnnotationsList());
  }

  ngAfterViewInit(): void {
    if (this.isDataLoaded ) {
      this.initializeWebViewer();
    }

    // Add global click event listener to detect clicks outside inputs
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(event: MouseEvent): void {
    // Check if the clicked element is an input inside the form-area
    const isInputClick = (event.target as HTMLElement).closest('.input');

    if (!isInputClick) {
      // If no input was clicked, clear annotations
      if (!this.hasClickedInput) {
        this.clearAnnotations();
      }

      // Reset the flag for the next check
      this.hasClickedInput = false;
    } else {
      // Set flag to indicate that an input was clicked
      this.hasClickedInput = true;
    }
  }

  initializeWebViewer(): void {
    WebViewer({
      path: 'lib',
      initialDoc: this.item.file_pdf,
    }, this.viewer.nativeElement).then(instance => {
      this.wvInstance = instance;
      this.wvInstance.UI.disableElements([
        'header',
        'downloadButton',
        'printButton',
        'highlightToolGroupButton',
        'underlineToolGroupButton',
        'strikeoutToolGroupButton',
        'squigglyToolGroupButton',
        'stickyToolGroupButton',
        'freeTextToolGroupButton',
        'shapeToolGroupButton',
        'freeHandToolGroupButton',
        'freeHandHighlightToolGroupButton',
        'eraserToolButton',
        'viewControlsButton',
        'leftPanelButton',
        'searchButton',
        'menuButton',
        'pageNavOverlay'
      ]);
      
      this.wvInstance.UI.setFitMode('FitWidth');
      // this.wvInstance.UI.FitMode.Zoom = '110%';

      this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);

      const { documentViewer, Annotations, annotationManager } = instance.Core;

      documentViewer.addEventListener('annotationsLoaded', () => {
        console.log('annotations loaded');
      });
    });
  }

  onRowSelect(event: any): void {
    const selectedRow = event.data;
    const coordinatesArray = [
      selectedRow.date_coordinate,
      selectedRow.amount_coordinate,
      selectedRow.description_coordinate,
      selectedRow.ending_balance_coordinate
    ];
    console.log('coordinatesArray row:', coordinatesArray);

    const minx = Math.min(...coordinatesArray.map(coordinates => coordinates.x));

    const miny = Math.min(...coordinatesArray.map(coordinates => coordinates.y));

    const maxX = Math.max(...coordinatesArray.map(coordinates => coordinates.x));
    
    const maxXIndex = coordinatesArray
    .map(coordinates => coordinates.x)
    .reduce((maxIndex, currentValue, currentIndex, array) => currentValue > array[maxIndex] ? currentIndex : maxIndex, 0);

    const sum_w = (coordinatesArray[maxXIndex].w + maxX) - minx

    const max_h = Math.max(...coordinatesArray.map(coordinates => coordinates.h));


    console.log('Selected row:', selectedRow);
    // Assuming the selected row contains coordinates and page number
    const coor ={
    x:minx,
    y:miny,
    w:sum_w,
    h:max_h,
    }
    console.log('coor:',coor)
    this.highlightField(coor, selectedRow.page_number);
  }


  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
    } else {
        event.confirm.reject();
    }
  }

//  For confirm action On Save
  onSaveConfirm(event) {
      if (window.confirm('Are you sure you want to save?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
      } else {
          event.confirm.reject();
      }
  }

  //  For confirm action On Create
  onCreateConfirm(event) {
      if (window.confirm('Are you sure you want to create?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
      } else {
          event.confirm.reject();
      }
  }

  onBackClick(): void {
    this.router.navigate(['/tasklist']);
  }

  onSubmitClick(): void {
    const updatedData = {
      read: {
        Identity: {
          name: (document.getElementById('Name') as HTMLInputElement).value,
          account_number: (document.getElementById('AccountNumber') as HTMLInputElement).value,
          bank_office: (document.getElementById('BankOffice') as HTMLInputElement).value,
          currency: (document.getElementById('Currency') as HTMLInputElement).value,
          address: (document.getElementById('Address') as HTMLTextAreaElement).value,
        },
        TransactionHistory: this.source.getAll()
      }
    };

    // Update the in-memory data object
    this.data.read = updatedData.read;
    console.log(this.data.read)

    // Send updated data to backend
    console.log(this.item.file_json)
    this.dataService.updateJson(this.item.file_json,this.data,this.item_id, "Done").subscribe(response => {
      console.log('Data successfully updated:', response); // Adjust the logging here
      this.router.navigate(['/tasklist']);
    }, error => {
      console.error('There was an error updating the data!', error);
    });
  }

  onSaveClick(): void {

    const updatedData = {
      read: {
        Identity: {
          name: (document.getElementById('Name') as HTMLInputElement).value,
          account_number: (document.getElementById('AccountNumber') as HTMLInputElement).value,
          bank_office: (document.getElementById('BankOffice') as HTMLInputElement).value,
          currency: (document.getElementById('Currency') as HTMLInputElement).value,
          address: (document.getElementById('Address') as HTMLTextAreaElement).value,
        },
        TransactionHistory: this.source.getAll()
      }
    };

    // Update the in-memory data object
    this.data.read = updatedData.read;
    console.log(this.data.read)

    // Send updated data to backend
    console.log(this.item.file_json)
    this.dataService.updateJson(this.item.file_json,this.data,this.item_id, "On Progress").subscribe(response => {
      console.log('Data successfully updated:', response); // Adjust the logging here
      this.router.navigate(['/tasklist']);
    }, error => {
      console.error('There was an error updating the data!', error);
    });
  }
}
