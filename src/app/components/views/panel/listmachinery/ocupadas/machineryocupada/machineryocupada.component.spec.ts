import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryocupadaComponent } from './machineryocupada.component';

describe('MachineryocupadaComponent', () => {
  let component: MachineryocupadaComponent;
  let fixture: ComponentFixture<MachineryocupadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryocupadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryocupadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
