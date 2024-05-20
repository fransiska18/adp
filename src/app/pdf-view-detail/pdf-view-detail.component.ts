import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-pdf-view-detail',
  templateUrl: './pdf-view-detail.component.html',
  styleUrls: ['./pdf-view-detail.component.scss']
})
export class PdfViewDetailComponent implements AfterViewInit, OnInit {

  data: any;
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
      Date: {
        title: 'Date',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.DateConfidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      Description: {
        title: 'Description',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.DescriptionConfidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      Amount: {
        title: 'Amount',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.AmountConfidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      EndingBalance: {
        title: 'Ending Balance',
        type: 'text',
        filter:false,
        valuePrepareFunction: (cell, row) => {
          if (row.EndingBalanceConfidence < 0.9){
            return `${cell} (WARNING!!!)`;
          }
          return cell;
        },
      },
      Type: { title: 'Type' }
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
      confirmSave:true,
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

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.documentLoaded$ = new Subject<void>();
    this.source = new LocalDataSource([]);
  }

  ngOnInit() {
    this.loadData();
  }

  convertGoogleVisionToPDFTron(googleX: number) {
    const scaleFactor = 72 / this.dpi;
    const coor = googleX * scaleFactor;
    return coor;
  }
  
  loadData() {
    this.http.get('../assets/json_rekorBRI1_rev2.json').subscribe(response => {
      this.data = response;
      console.log('Data loaded:', this.data); // Check what data looks like when loaded
      this.isDataLoaded = true;
      this.source.load(this.data.read.TransactionHistory);
      this.cdr.detectChanges(); // Manually trigger change detection
      this.initializeWebViewer();
    }, error => {
      console.error('There was an error loading the data!', error);
    });
  }

  highlightField(coordinates: any, page: any): void {
    const { documentViewer, Annotations, annotationManager } = this.wvInstance!.Core;

    // Clear existing annotations if necessary
    annotationManager.deleteAnnotations(annotationManager.getAnnotationsList());

    const rectangleAnnot = new Annotations.RectangleAnnotation({
      PageNumber: page,  // Adjust based on actual page number
      X: this.convertGoogleVisionToPDFTron(coordinates['x1'])- this.dpi / 30,
      Y: this.convertGoogleVisionToPDFTron(coordinates['y1'])- this.dpi / 30,
      Width: (this.convertGoogleVisionToPDFTron(coordinates['x3'])) - (this.convertGoogleVisionToPDFTron(coordinates['x1']))+ this.dpi / 15,
      Height: (this.convertGoogleVisionToPDFTron(coordinates['y3'])) - (this.convertGoogleVisionToPDFTron(coordinates['y1']))+ this.dpi / 15,
      Author: annotationManager.getCurrentUser(),
      FillColor: new Annotations.Color(0, 155, 0, 0.2),
      StrokeColor: new Annotations.Color(255, 0, 0),
      StrokeThickness: 2
    });
    console.log('coor pross:',this.convertGoogleVisionToPDFTron(coordinates['x1']),this.convertGoogleVisionToPDFTron(coordinates['y1']),(this.convertGoogleVisionToPDFTron(coordinates['x3'])) - (this.convertGoogleVisionToPDFTron(coordinates['x1'])) + this.dpi / 12,(this.convertGoogleVisionToPDFTron(coordinates['y3'])) - (this.convertGoogleVisionToPDFTron(coordinates['y1'])) + this.dpi / 12)
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
    if (this.isDataLoaded) {
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
      path: '../lib',
      initialDoc: '../assets/Rekor BRI 1 (1).pdf',
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
      selectedRow.DateCoordinates,
      selectedRow.AmountCoordinate,
      selectedRow.DescriptionCoordinates,
      selectedRow.EndingBalanceCoordinates
    ];
    console.log('coordinatesArray row:', coordinatesArray);
    const minX1 = Math.min(...coordinatesArray.map(coordinates => coordinates.x1));

    const maxX3 = Math.max(...coordinatesArray.map(coordinates => coordinates.x3));

    const minY1 = Math.min(...coordinatesArray.map(coordinates => coordinates.y1));

    const maxY3 = Math.max(...coordinatesArray.map(coordinates => coordinates.y3));


    console.log('Selected row:', selectedRow);
    // Assuming the selected row contains coordinates and page number
    const coor ={
    x1:minX1,
    x3:maxX3,
    y1:minY1,
    y3:maxY3,
    }
    console.log('coor:',coor)
    this.highlightField(coor, selectedRow.PageNumber);
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
}
