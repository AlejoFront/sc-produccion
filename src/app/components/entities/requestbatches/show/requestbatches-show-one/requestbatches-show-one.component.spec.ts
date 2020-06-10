import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbatchesShowOneComponent } from './requestbatches-show-one.component';

describe('RequestbatchesShowOneComponent', () => {
  let component: RequestbatchesShowOneComponent;
  let fixture: ComponentFixture<RequestbatchesShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbatchesShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbatchesShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
