import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebranchofficeCreateComponent } from './statebranchoffice-create.component';

describe('StatebranchofficeCreateComponent', () => {
  let component: StatebranchofficeCreateComponent;
  let fixture: ComponentFixture<StatebranchofficeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatebranchofficeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebranchofficeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
