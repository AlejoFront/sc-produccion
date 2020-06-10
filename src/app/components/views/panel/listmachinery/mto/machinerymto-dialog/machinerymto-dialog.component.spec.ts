import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinerymtoDialogComponent } from './machinerymto-dialog.component';

describe('MachinerymtoDialogComponent', () => {
  let component: MachinerymtoDialogComponent;
  let fixture: ComponentFixture<MachinerymtoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinerymtoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinerymtoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
