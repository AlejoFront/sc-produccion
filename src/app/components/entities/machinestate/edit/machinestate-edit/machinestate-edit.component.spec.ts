import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinestateEditComponent } from './machinestate-edit.component';

describe('MachinestateEditComponent', () => {
  let component: MachinestateEditComponent;
  let fixture: ComponentFixture<MachinestateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinestateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinestateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
