import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestanalysisShowComponent } from './requestanalysis-show.component';

describe('RequestanalysisShowComponent', () => {
  let component: RequestanalysisShowComponent;
  let fixture: ComponentFixture<RequestanalysisShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestanalysisShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestanalysisShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
