import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebranchofficeShowComponent } from './statebranchoffice-show.component';

describe('StatebranchofficeShowComponent', () => {
  let component: StatebranchofficeShowComponent;
  let fixture: ComponentFixture<StatebranchofficeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatebranchofficeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebranchofficeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
