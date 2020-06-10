import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinstateDialogComponent } from './machinstate-dialog.component';

describe('MachinstateDialogComponent', () => {
  let component: MachinstateDialogComponent;
  let fixture: ComponentFixture<MachinstateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinstateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinstateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
