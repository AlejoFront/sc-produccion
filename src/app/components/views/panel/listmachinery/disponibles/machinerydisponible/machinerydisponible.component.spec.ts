import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinerydisponibleComponent } from './machinerydisponible.component';

describe('MachinerydisponibleComponent', () => {
  let component: MachinerydisponibleComponent;
  let fixture: ComponentFixture<MachinerydisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerydisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinerydisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
