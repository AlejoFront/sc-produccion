import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeststatusCreateDialogComponent } from './requeststatus-create-dialog.component';

describe('RequeststatusCreateDialogComponent', () => {
  let component: RequeststatusCreateDialogComponent;
  let fixture: ComponentFixture<RequeststatusCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeststatusCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeststatusCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
