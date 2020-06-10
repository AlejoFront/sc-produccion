import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestanalysisCreateDialogComponent } from './requestanalysis-create-dialog.component';

describe('RequestanalysisCreateDialogComponent', () => {
  let component: RequestanalysisCreateDialogComponent;
  let fixture: ComponentFixture<RequestanalysisCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestanalysisCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestanalysisCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
