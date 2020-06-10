import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchofficeShowOneComponent } from './branchoffice-show-one.component';

describe('BranchofficeShowOneComponent', () => {
  let component: BranchofficeShowOneComponent;
  let fixture: ComponentFixture<BranchofficeShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchofficeShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchofficeShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
