import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestanalysisCreateComponent } from './requestanalysis-create.component';

describe('RequestanalysisCreateComponent', () => {
  let component: RequestanalysisCreateComponent;
  let fixture: ComponentFixture<RequestanalysisCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestanalysisCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestanalysisCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
