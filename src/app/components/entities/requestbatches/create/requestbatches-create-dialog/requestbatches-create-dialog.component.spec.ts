import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbatchesCreateDialogComponent } from './requestbatches-create-dialog.component';

describe('RequestbatchesCreateDialogComponent', () => {
  let component: RequestbatchesCreateDialogComponent;
  let fixture: ComponentFixture<RequestbatchesCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbatchesCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbatchesCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
