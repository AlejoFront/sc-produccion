import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoShowComponent } from './info-show.component';

describe('InfoShowComponent', () => {
  let component: InfoShowComponent;
  let fixture: ComponentFixture<InfoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
