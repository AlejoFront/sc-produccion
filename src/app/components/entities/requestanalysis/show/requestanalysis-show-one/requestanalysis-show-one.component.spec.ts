import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestanalysisShowOneComponent } from './requestanalysis-show-one.component';

describe('RequestanalysisShowOneComponent', () => {
  let component: RequestanalysisShowOneComponent;
  let fixture: ComponentFixture<RequestanalysisShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestanalysisShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestanalysisShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
