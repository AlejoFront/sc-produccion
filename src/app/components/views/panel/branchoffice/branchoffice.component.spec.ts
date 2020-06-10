import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchofficeComponent } from './branchoffice.component';

describe('BranchofficeComponent', () => {
  let component: BranchofficeComponent;
  let fixture: ComponentFixture<BranchofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
