import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbatchesComponent } from './requestbatches.component';

describe('RequestbatchesComponent', () => {
  let component: RequestbatchesComponent;
  let fixture: ComponentFixture<RequestbatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
