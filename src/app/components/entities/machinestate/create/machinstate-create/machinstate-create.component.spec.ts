import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinstateCreateComponent } from './machinstate-create.component';

describe('MachinstateCreateComponent', () => {
  let component: MachinstateCreateComponent;
  let fixture: ComponentFixture<MachinstateCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinstateCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinstateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
