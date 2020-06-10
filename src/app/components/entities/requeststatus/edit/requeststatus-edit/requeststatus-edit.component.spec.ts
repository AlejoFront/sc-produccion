import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeststatusEditComponent } from './requeststatus-edit.component';

describe('RequeststatusEditComponent', () => {
  let component: RequeststatusEditComponent;
  let fixture: ComponentFixture<RequeststatusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeststatusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeststatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
