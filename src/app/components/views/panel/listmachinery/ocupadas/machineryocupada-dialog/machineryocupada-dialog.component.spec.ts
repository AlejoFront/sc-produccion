import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryocupadaDialogComponent } from './machineryocupada-dialog.component';

describe('MachineryocupadaDialogComponent', () => {
  let component: MachineryocupadaDialogComponent;
  let fixture: ComponentFixture<MachineryocupadaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryocupadaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryocupadaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
