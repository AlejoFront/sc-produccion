import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryreparacionDialogComponent } from './machineryreparacion-dialog.component';

describe('MachineryreparacionDialogComponent', () => {
  let component: MachineryreparacionDialogComponent;
  let fixture: ComponentFixture<MachineryreparacionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryreparacionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryreparacionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
