import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestanalysisEditComponent } from './requestanalysis-edit.component';

describe('RequestanalysisEditComponent', () => {
  let component: RequestanalysisEditComponent;
  let fixture: ComponentFixture<RequestanalysisEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestanalysisEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestanalysisEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
