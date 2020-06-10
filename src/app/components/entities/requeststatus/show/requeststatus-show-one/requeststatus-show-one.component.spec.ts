import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeststatusShowOneComponent } from './requeststatus-show-one.component';

describe('RequeststatusShowOneComponent', () => {
  let component: RequeststatusShowOneComponent;
  let fixture: ComponentFixture<RequeststatusShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeststatusShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeststatusShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
