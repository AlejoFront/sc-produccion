import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeststatusCreateComponent } from './requeststatus-create.component';

describe('RequeststatusCreateComponent', () => {
  let component: RequeststatusCreateComponent;
  let fixture: ComponentFixture<RequeststatusCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeststatusCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeststatusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
