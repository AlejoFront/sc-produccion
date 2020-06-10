import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinerydisponibleDialogComponent } from './machinerydisponible-dialog.component';

describe('MachinerydisponibleDialogComponent', () => {
  let component: MachinerydisponibleDialogComponent;
  let fixture: ComponentFixture<MachinerydisponibleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerydisponibleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinerydisponibleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
