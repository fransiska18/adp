import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallGaugechartComponent } from './call-gaugechart.component';

describe('CallGaugechartComponent', () => {
  let component: CallGaugechartComponent;
  let fixture: ComponentFixture<CallGaugechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallGaugechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallGaugechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
