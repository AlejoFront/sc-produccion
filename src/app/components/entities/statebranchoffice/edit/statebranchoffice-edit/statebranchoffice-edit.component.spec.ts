import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebranchofficeEditComponent } from './statebranchoffice-edit.component';

describe('StatebranchofficeEditComponent', () => {
  let component: StatebranchofficeEditComponent;
  let fixture: ComponentFixture<StatebranchofficeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatebranchofficeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebranchofficeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
