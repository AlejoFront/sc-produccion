import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeremainingComponent } from './timeremaining.component';

describe('TimeremainingComponent', () => {
  let component: TimeremainingComponent;
  let fixture: ComponentFixture<TimeremainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeremainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeremainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
