import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinstateShowComponent } from './machinstate-show.component';

describe('MachinstateShowComponent', () => {
  let component: MachinstateShowComponent;
  let fixture: ComponentFixture<MachinstateShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinstateShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinstateShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
