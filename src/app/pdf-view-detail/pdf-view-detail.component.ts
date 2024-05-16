import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';

@Component({
  selector: 'app-pdf-view-detail',
  templateUrl: './pdf-view-detail.component.html',
  styleUrls: ['./pdf-view-detail.component.scss']
})
export class PdfViewDetailComponent implements AfterViewInit {

  data: any;
  wvInstance?: WebViewerInstance;
  @ViewChild('viewer') viewer!: ElementRef;
  @Output() coreControlsEvent: EventEmitter<string> = new EventEmitter();
  private documentLoaded$: Subject<void>;
  private dpi = 205;
  isDataLoaded = false;
  hasClickedInput = false;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
    this.documentLoaded$ = new Subject<void>();
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
      X: this.convertGoogleVisionToPDFTron(coordinates['x1']),
      Y: this.convertGoogleVisionToPDFTron(coordinates['y1']),
      Width: (this.convertGoogleVisionToPDFTron(coordinates['x3'])) - (this.convertGoogleVisionToPDFTron(coordinates['x1'])) + this.dpi / 15,
      Height: (this.convertGoogleVisionToPDFTron(coordinates['y3'])) - (this.convertGoogleVisionToPDFTron(coordinates['y1'])) + this.dpi / 15,
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
      this.wvInstance.UI.setFitMode('FitPage');
      this.wvInstance.UI.FitMode.Zoom = '100%';

      this.coreControlsEvent.emit(instance.UI.LayoutMode.Single);

      const { documentViewer, Annotations, annotationManager } = instance.Core;

      documentViewer.addEventListener('annotationsLoaded', () => {
        console.log('annotations loaded');
      });
    });
  }

}
