import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbatchesShowComponent } from './requestbatches-show.component';

describe('RequestbatchesShowComponent', () => {
  let component: RequestbatchesShowComponent;
  let fixture: ComponentFixture<RequestbatchesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbatchesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbatchesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
