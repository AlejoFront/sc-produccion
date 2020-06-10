import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinerymtoComponent } from './machinerymto.component';

describe('MachinerymtoComponent', () => {
  let component: MachinerymtoComponent;
  let fixture: ComponentFixture<MachinerymtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerymtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinerymtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
