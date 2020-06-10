import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatebranchofficeShowOneComponent } from './statebranchoffice-show-one.component';

describe('StatebranchofficeShowOneComponent', () => {
  let component: StatebranchofficeShowOneComponent;
  let fixture: ComponentFixture<StatebranchofficeShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatebranchofficeShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatebranchofficeShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
