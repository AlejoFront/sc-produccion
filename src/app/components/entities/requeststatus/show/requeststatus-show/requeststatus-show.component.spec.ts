import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeststatusShowComponent } from './requeststatus-show.component';

describe('RequeststatusShowComponent', () => {
  let component: RequeststatusShowComponent;
  let fixture: ComponentFixture<RequeststatusShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeststatusShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeststatusShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
