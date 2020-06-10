import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinestateShowOneComponent } from './machinestate-show-one.component';

describe('MachinestateShowOneComponent', () => {
  let component: MachinestateShowOneComponent;
  let fixture: ComponentFixture<MachinestateShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinestateShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinestateShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
