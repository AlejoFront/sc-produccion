import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebranchofficeCreateDialogComponent } from './statebranchoffice-create-dialog.component';

describe('StatebranchofficeCreateDialogComponent', () => {
  let component: StatebranchofficeCreateDialogComponent;
  let fixture: ComponentFixture<StatebranchofficeCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatebranchofficeCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebranchofficeCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
