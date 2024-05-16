import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBarchartComponent } from './call-barchart.component';

describe('CallBarchartComponent', () => {
  let component: CallBarchartComponent;
  let fixture: ComponentFixture<CallBarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
