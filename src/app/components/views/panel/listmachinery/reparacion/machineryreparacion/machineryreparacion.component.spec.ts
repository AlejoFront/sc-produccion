import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryreparacionComponent } from './machineryreparacion.component';

describe('MachineryreparacionComponent', () => {
  let component: MachineryreparacionComponent;
  let fixture: ComponentFixture<MachineryreparacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryreparacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryreparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
