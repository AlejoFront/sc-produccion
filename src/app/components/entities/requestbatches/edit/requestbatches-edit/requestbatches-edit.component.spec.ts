import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbatchesEditComponent } from './requestbatches-edit.component';

describe('RequestbatchesEditComponent', () => {
  let component: RequestbatchesEditComponent;
  let fixture: ComponentFixture<RequestbatchesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbatchesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbatchesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
