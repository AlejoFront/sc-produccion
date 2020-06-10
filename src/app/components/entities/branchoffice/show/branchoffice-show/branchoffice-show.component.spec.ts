import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchofficeShowComponent } from './branchoffice-show.component';

describe('BranchofficeShowComponent', () => {
  let component: BranchofficeShowComponent;
  let fixture: ComponentFixture<BranchofficeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchofficeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchofficeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
