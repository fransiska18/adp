import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfViewDetailComponent } from './pdf-view-detail.component';

describe('PdfViewDetailComponent', () => {
  let component: PdfViewDetailComponent;
  let fixture: ComponentFixture<PdfViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
