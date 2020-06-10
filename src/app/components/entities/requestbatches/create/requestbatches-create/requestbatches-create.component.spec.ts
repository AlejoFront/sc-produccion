import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbatchesCreateComponent } from './requestbatches-create.component';

describe('RequestbatchesCreateComponent', () => {
  let component: RequestbatchesCreateComponent;
  let fixture: ComponentFixture<RequestbatchesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbatchesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbatchesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
